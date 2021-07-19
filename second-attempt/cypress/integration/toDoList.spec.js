describe("I have a list and I am adding items to it", function(){
    it("adds my task", function(){
        cy.visit('/')
        cy.get("#addTask").should('contain','Do ToDo list')
    })
})