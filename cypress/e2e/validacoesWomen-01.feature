# utf-8
# language: pt

Funcionalidade: testeValidacaoWomen-01 - Item Fora de Estoque
    Cenário: Validação Item Fora de Estoque com Adição ao Carrinho Desabilitada
        Dado que acesso a página Women do portal My Shop
        Quando sobreponho o cursor do mouse sobre um produto fora de estoque
        Então botão de adicionar ao carrinho está visível
        Mas botão de adicionar ao carrinho está desabilitado