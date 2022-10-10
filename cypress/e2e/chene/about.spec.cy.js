describe('home', () => {
  // TODO updating to react 18 exposed a bug
  // Hydration failed because the initial UI does not match what was rendered on the server.
  // This will be resolved when we move to platforms so skipping the test for now
  it('should render chene products on the client side', () => {
    cy.visit('http://chene.localhost:3000/about');
    cy.get('h2').contains('About brand');
    cy.get('body').contains('CHENE');
  });

  it('should have a bug if you use a host that doesnt match the url', () => {
    cy.visit('http://localhost:3000/about', {
      headers: {
        host: 'www.chene.com',
      },
    });
    cy.get('h2').contains('About brand');
    cy.get('body').contains('CHENE');
  });
});
