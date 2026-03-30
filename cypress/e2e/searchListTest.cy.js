/// <reference types="cypress" />

const{ categories } = require('../fixtures/categories.json')
const { homePage } = require("../support/pages/home.page")
const { email, senha } = require('../fixtures/data.json')

describe('Categories', () => {
    
    beforeEach('Deve logar com sucesso',() =>{
        cy.login(email, senha)
    })
    
    
    it('Deve pesquisar produtos e eles terem um valor', () => {
        homePage.openMenu('Browse')
        homePage.openSearchProduct('in')
        homePage.products().should('have.length.greaterThan', 0)

        homePage.products().each(product => {
            let price = product.find('[data-testid="price"]').text()
            expect(price).to.contain('R$')
        })

        cy.compareSnapshot(Cypress.currentTest.title)

    })   
    

    
}); 