# utf-8
# language: pt

Funcionalidade: testeValidacaoProduto-01 - Produto Fora de Estoque
    Cenário: Validação Produto Fora de Estoque com Adição ao Carrinho Desabilitada
        Dado que acesso a página Women do portal My Shop
        Quando sobreponho o cursor do mouse sobre um produto fora de estoque
        Então botão de adicionar ao carrinho está visível
        E botão de adicionar ao carrinho está desabilitado