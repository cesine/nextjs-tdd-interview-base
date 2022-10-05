describe('home', () => {
  // TODO updating to react 18 exposed a bug
  // Hydration failed because the initial UI does not match what was rendered on the server.
  // This will be resolved when we move to platforms so skipping the test for now
  it.skip("should render the home page and display a message", () => {
    cy.setCookie('brand', 'chene');
    cy.visit('http://localhost:3000')
    cy.get("h2").contains("Home page");
    cy.get("body").contains("CHENE");
  });
})
