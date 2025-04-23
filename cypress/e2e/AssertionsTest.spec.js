/// <reference types="cypress"/>

describe("Assertions test suite", () => { 
    it("Assertions test", () =>{
        cy.visit("https://neoxonline.com/")
        cy.contains("Datenschutz").click()
        cy.url().should("include", "datenschutz")
        
    })
    it("Assertions test", () =>{
        cy.visit("https://neoxonline.com/")
        cy.contains("About us").click()
        cy.url().should("include", "#about")
        
    })
    it("Assertions test", () =>{
        cy.visit("https://neoxonline.com/")
        cy.contains("Incubator").click()
        cy.url().should("include", "incubator")
        
    })
    it("Assertions test", () =>{
        cy.visit("https://neoxonline.com/")
        cy.contains("Contact").click()
        cy.url().should("include", "/#home-contact")
        
    })
    
        
        
    
})
