const LI_WOMEN = '.sf-menu > li:contains("Women")'
const LI_PRODUTO_FORA_DE_ESTOQUE = '.product-container .right-block:has(.availability span.out-of-stock)'
const SPAN_ADD_TO_CART = 'span:contains("Add to cart")'

Cypress.Commands.add('acessarPaginaWomen', () => {
    cy.get(LI_WOMEN).click()
})

Cypress.Commands.add('sobreporCursorSobreProdutoForaDeEstoque', () => {
    cy.get(LI_PRODUTO_FORA_DE_ESTOQUE).first().trigger('mouseover')
})

Cypress.Commands.add('validarAddToCartVisivel', () => {
    cy.sobreporCursorSobreProdutoForaDeEstoque()
        .find(SPAN_ADD_TO_CART).should('be.visible')
})

Cypress.Commands.add('validarAddToCartDesabilitado', () => {
    cy.sobreporCursorSobreProdutoForaDeEstoque()
        .find(SPAN_ADD_TO_CART).should('have.class', 'disabled')
})