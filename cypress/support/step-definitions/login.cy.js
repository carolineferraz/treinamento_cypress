Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When('realizo login no portal', () => {
    cy.acessarLogin()
    cy.realizarLogin()
})

Then('acesso a Home com meu usuário logado', () => {
    cy.validarLogin()
})