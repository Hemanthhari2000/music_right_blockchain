from django.urls import path

from . import views

urlpatterns = [
    path('mine_block/', views.mine_block, name='mine_block'),
    path('get_chain/', views.get_chain, name='get_chain'),
    path('is_valid/', views.is_valid, name="is_valid"),
    path('add_music_copyright', views.add_music_copyright),
    path('connect_node/',views.connect_node),
    path('replace_chain/', views.replace_chain),
    path('pending_block/', views.pending_block),
    path('mined_block/', views.mined_block),

    path('test-pending-block/', views.pending_block),
]
