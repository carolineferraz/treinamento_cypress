const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'

Cypress.Commands.add('realizarLogin', () => {
    cy.get(INPUT_EMAIL).type('testes_cypress@test.com')
    cy.get(INPUT_SENHA).type('123456789')
    cy.get(BTN_LOGIN).click()
})