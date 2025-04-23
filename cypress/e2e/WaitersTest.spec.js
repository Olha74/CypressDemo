/// <reference types="cypress"/>

describe("Waiters first test suite", () => { 
    it("waiters test", {defaultCommandTimeout: 8000}, () =>{
        cy.visit("https://magento.softwaretestingboard.com")
        cy.wait (3000)
        cy.get("//*[@id='maincontent']/div[1]/h1/span").then(($element) =>{
            var elementText = $element.text()
            expect(elementText).to.contain("Home Page")
        })
        
    })

})