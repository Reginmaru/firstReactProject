


describe("open page", function(){
    it("then they see my msg", function(){
        cy.visit('/')
        cy.get("#heading").should('contain',"Profile")
    }
    )
})