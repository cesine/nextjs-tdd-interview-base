describe('home', () => {
  // TODO updating to react 18 exposed a bug
  // Hydration failed because the initial UI does not match what was rendered on the server.
  // This will be resolved when we move to platforms so skipping the test for now
  it('should render the home page and display a message', () => {
    cy.visit('http://localhost:3000', {
      headers: {
        host: 'www.chene.com',
      },
    });
    cy.get('h2').contains('Home page');
    cy.get('body').contains('CHENE');
  });
})
