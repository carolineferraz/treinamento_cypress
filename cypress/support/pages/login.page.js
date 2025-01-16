const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'

Cypress.Commands.add('realizarLogin', () => {
    cy.get(INPUT_EMAIL).type('treinamento_academia@teste.com')
    cy.get(INPUT_SENHA).type('!QAZ2wsx')
    cy.get(BTN_LOGIN).click()
})