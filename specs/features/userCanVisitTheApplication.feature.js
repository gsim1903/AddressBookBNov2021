describe('User Visits the Application url', () => {
    it ('is expected to see a header',() => {
        cy.visit("http://localhost:3000");
        cy.get("h1").should('contain.text','Address Book');
    });
});

