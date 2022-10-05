describe('home', () => {
  it("should render the home page and display a message", () => {
    cy.visit('http://localhost:3000', {
      headers: {
        host: 'www.sapin.com',
      },
    });
    cy.get("h2").contains("Home page");
    cy.get("body").contains("SAPIN");
  });
})
