/// <reference types="cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },

    opencategoriesfilter(){
            cy.get(`[data-testid="Category"]`).click()
    },

    categories(){
        return cy.get(`[data-testid^="search-category-"]`)
    }
}