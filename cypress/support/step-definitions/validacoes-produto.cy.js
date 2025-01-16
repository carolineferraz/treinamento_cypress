Given('que acesso a página Women do portal My Shop', () => {
    cy.visit('/')
    cy.acessarPaginaWomen()
})

When('sobreponho o cursor do mouse sobre um produto fora de estoque', () => {
    cy.sobreporCursorSobreProdutoForaDeEstoque()
})

Then('botão de adicionar ao carrinho está visível', () => {
    cy.validarAddToCartVisivel()
})

And('botão de adicionar ao carrinho está desabilitado', () => {
    cy.validarAddToCarDesabilitado()
})