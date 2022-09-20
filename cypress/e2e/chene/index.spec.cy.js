describe('home', () => {
  beforeEach(() => {
    cy.setCookie('brand', 'chene');
    cy.visit('http://localhost:3000')
  })

  it("should render the home page and display a message", () => {
    cy.get("h2").contains("Home page");
    cy.get("body").contains("CHENE");
  });
})
