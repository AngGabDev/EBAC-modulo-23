import { homePage } from "./pages/home.page"
import loginPage from "./pages/login.page"

Cypress.Commands.add('login', (email, senha) =>{
    cy.setCookie('ebacStoreVersion', Cypress.env("ebacStoreVersion"), {domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    homePage.openMenu('Account')
    loginPage.login(email, senha)
})

Cypress.Commands.add('addCarrinho', (lista) =>{
    cy.get('[style="padding: 8px;"] > ').eq(lista).click()
    cy.get('[data-testid="addToCart"]').click()
})

Cypress.Commands.add('addItem',(item) =>{
    cy.get('[data-testid="addItem"] > ').eq(item).click()
})

Cypress.Commands.add('removeItem',(produto) =>{
    cy.get('[data-testid="remove"]').eq(produto).click()
})