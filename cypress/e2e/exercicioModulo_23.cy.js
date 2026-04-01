/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const { email, senha } = require('../fixtures/data.json')

describe('Exercício de intercept compras na EBACStore', () => {

    beforeEach('Deve logar com sucesso',() =>{
        cy.login(email, senha)
        
    })

    it('Teste E2E com intercept', () => {

        cy.intercept('GET', '**/public/getProducts?sortBy=popularity',{fixture: 'products.json'}).as('getProducts')
        homePage.openMenu('Browse')
        cy.addCarrinho(5)
        cy.intercept('GET','**/public/getCart?userId=67f55de836e994dfd8baa11a',{fixture: 'cart.json'}).as('getCart')
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').should('have.text', 'Continue to payment')
        cy.addItem(0)
        cy.intercept('PUT', '**/public/updateCart/67f55de836e994dfd8baa11a',{fixture: 'updateCartProduct.json'}).as('updateCart')
        cy.removeItem(0)
        cy.intercept('PUT', '**/public/updateCart/67f55de836e994dfd8baa11a',{fixture: 'updateCartProduct.json'}).as('updateCart')
        
        

        
    });
    
});

