/// <reference types="cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },

    openSearchProduct(product){
        cy.get('[data-testid="searchInput"').type(product)
    },

    products(){
        return cy.get('[data-testid="browse-product-list"] [data-testid="productDetails"]')
    },

    opencategoriesfilter(){
            cy.get(`[data-testid="Category"]`).click()
    },

    categories(){
        return cy.get(`[data-testid^="search-category-"]`)
    }
}