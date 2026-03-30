/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const { email, senha } = require('../fixtures/data.json')

describe ('Teste de intercept',() =>{

    beforeEach('Deve logar com sucesso',() =>{
        cy.login(email, senha)
        
    })

    it('Categories should be visible',() => {
        cy.intercept('GET', '**/public/getCategories', {fixture: 'categories.json'}).as('getCategories ')
        homePage.openMenu('Browse')
        homePage.opencategoriesfilter()
        homePage.categories().should('have.length.greaterThan', 1)
    })

    it('Categories should be empty',() => {
        cy.intercept('GET', '**/public/getCategories', {fixture: 'noCategories.json'}).as('getCategoriesEmpty ')
        homePage.openMenu('Browse')
        homePage.opencategoriesfilter()
        homePage.categories().should('have.length', 1)
    })

    it('Categories should be empty',() => {
        cy.intercept('GET', '**/public/getCategories', {statusCode: 500}).as('getCategoriesError')
        homePage.openMenu('Browse')
        homePage.opencategoriesfilter()
        homePage.categories().should('have.length', 1)
    })

    cy.compareSnapshot(Cypress.currentTest.title)
})