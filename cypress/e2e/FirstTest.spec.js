/// <reference types="cypress"/>

describe("My first test suite", () => { 
    it("first test", () =>{
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        cy.get('div#start button').click()
        cy.get('div#finish h4', { timeout: 1000 }).should('be.visible')
    })
})
