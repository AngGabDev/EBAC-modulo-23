/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const { email, senha } = require('../fixtures/data.json')

describe ('Teste de Enviroment Variables ',() =>{

    beforeEach(() => {
       cy.setCookie('ebacStoreVersion', Cypress.env("ebacStoreVersion"), {domain: 'lojaebac.ebaconline.art.br' })
    })

    it('Default Env', () => {
         cy.log(Cypress.env('MY_ENV'))
         cy.visit('/')
    });

    it('Config test env', {
    env: {
      MY_ENV: "local"
    }
  }, () => {
    cy.log(Cypress.env('MY_ENV'))
    cy.log(Cypress.env('ebacStoreVersion'))

    cy.visit("/")
  })

})