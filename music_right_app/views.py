import json
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .blockchain import MusicRightBlockchain
from uuid import uuid4

blockchain = MusicRightBlockchain()

copyright_no = str(uuid4()).replace('-', '')


def pending_block(request):
    if request.method == "GET": 
        remaining_block_count = len(blockchain.music_copyright)
        return JsonResponse({"pending_block": remaining_block_count})
    return JsonResponse({"error": "Only GET method is valid"})

def mined_block(request):
    if request.method == "GET":
        mined_block_count = len(blockchain.chain)
        return JsonResponse({"mined_block": mined_block_count})
    return JsonResponse({"error": "Only GET method is valid"})

def mine_block(request):
    if request.method == 'GET':
        previous_block = blockchain.get_last_block()
        previous_nonce = previous_block['nonce']
        nonce = blockchain.proof_of_work(previous_nonce)
        previous_hash = blockchain.hash(previous_block)
        block = blockchain.create_block(nonce, previous_hash)
        response = {'message': 'Congratulations, you just mined a block!',
                    'index': block['index'],
                    'nonce': block['nonce'],
                    'music_copyright': block['music_copyright'],
                    'timestamp': block['timestamp'],
                    'previous_hash': block['previous_hash'],
        }
    return JsonResponse(response)

def get_chain(request):
    if request.method == 'GET':
        response = {'chain': blockchain.chain,
                    'length': len(blockchain.chain)}
    return JsonResponse(response)

def is_valid(request):
    if request.method == 'GET':
        is_valid = blockchain.is_chain_valid(blockchain.chain)
        if is_valid:
            response = {'message': 'All good. The Blockchain is valid.'}
        else:
            response = {'message': 'Houston, we have a problem. The Blockchain is not valid.'}
    return JsonResponse(response)

@csrf_exempt
def add_music_copyright(request):
    if request.method == "POST": 
        received_json = json.loads(request.body)
        music_copyright_keys = ["name", "artist", "produced", "copyright_no"]
        if not all(key in received_json for key in music_copyright_keys):
            return "Some elements of the transaction are missing", HttpResponse(status=400)
        index = blockchain.add_music_copyright(
            data=
                {
                    "name" : received_json['name'],
                    "artist": received_json["artist"],
                    "produced": received_json["produced"],
                    "copyright_no": received_json["copyright_no"]
                }
        )
        response = {"message": f"This transaction will be added to Block {index}"}
    return JsonResponse(response)

        
@csrf_exempt
def connect_node(request):
    if request.method == 'POST':
        received_json = json.loads(request.body)
        nodes = received_json.get('nodes')
        if nodes is None:
            return "No node", HttpResponse(status=400)
        for node in nodes:
            blockchain.add_node(node)
        response = {'message': 'All the nodes are now connected. The Sudocoin Blockchain now contains the following nodes:',
                    'total_nodes': list(blockchain.nodes)}
    return JsonResponse(response)

def replace_chain(request): 
    if request.method == 'GET':
        is_chain_replaced = blockchain.replace_chain()
        if is_chain_replaced:
            response = {'message': 'The nodes had different chains so the chain was replaced by the longest one.',
                        'new_chain': blockchain.chain}
        else:
            response = {'message': 'All good. The chain is the largest one.',
                        'actual_chain': blockchain.chain}
    return JsonResponse(response)