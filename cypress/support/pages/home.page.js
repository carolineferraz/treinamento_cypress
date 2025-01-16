const BTN_ACESSA_LOGIN = '.login'

Cypress.Commands.add('acessarLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).click()
})

Cypress.Commands.add('validarLogin', () => {
    cy.get('.account').should('contain.text', 'Luiza ferreira')
})