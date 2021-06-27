describe('Renders App', () => {
    
    it('Renders correctly', () => {
        cy.visit("http://localhost:3000/")
        cy.get(".App").should("exist")
    })

    it('Test the click on filter', () => {
        // cy.wait(3000) 
        cy.get('[data-testid=filter-species]').click()
        // cy.wait(1000) 
        cy.get('[data-testid=filter-people]').click()
    })

    it('Test the click on some cards', () => {
        // cy.wait(2000) 
        cy.get(':nth-child(2) > [data-testid=card]').click()
        // cy.wait(2000) 
        cy.get(':nth-child(4) > [data-testid=card]').click()
        // cy.wait(2000) 
        cy.get(':nth-child(6) > [data-testid=card]').click()
    })

    it('Final test', () => {
        // cy.wait(2000) 
        cy.get('[data-testid=filter-species]').click()
        // cy.wait(2000) 
        cy.get(':nth-child(1) > [data-testid=card]').click()
        // cy.wait(2000) 
        cy.get(':nth-child(3) > [data-testid=card]').click()
        // cy.wait(2000) 
        cy.get(':nth-child(5) > [data-testid=card]').click()
    })

})