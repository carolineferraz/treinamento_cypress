const BTN_ACESSA_LOGIN = '.login'
const LI_WOMEN = '.sf-menu > li:contains("Women")'

Cypress.Commands.add('acessarLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).click()
})

Cypress.Commands.add('validarLogin', () => {
    cy.get('.account').should('contain.text', 'Luiza ferreira')
})

Cypress.Commands.add('acessarPaginaWomen', () => {
    cy.get(LI_WOMEN).click()
})