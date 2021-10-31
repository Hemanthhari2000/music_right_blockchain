
received_json = {"name" : "Hemanth", "artist": "Hemanth"}
transaction_keys = {"name", "artist"}

print(all(key in received_json for key in transaction_keys))