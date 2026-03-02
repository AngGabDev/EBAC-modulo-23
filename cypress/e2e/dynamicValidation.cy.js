/// <reference types="cypress" />

const{ categories } = require('../fixtures/categories.json')
const { homePage } = require("../support/pages/home.page")
const { email, senha } = require('../fixtures/data.json')

describe('Categories', () => {
    
    beforeEach('Deve logar com sucesso',() =>{
        cy.login(email, senha)
        
    })
    
    categories.forEach(category => {
        it(`Validação categoria ${category .name}`, () => {
            homePage.openMenu('Browse')
            homePage.opencategoriesfilter()
            homePage.categories().should('contain.text', category.name)
         });

    })

    
});