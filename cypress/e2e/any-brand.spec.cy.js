describe('any-brand', () => {
  it('should render the foo products when the host header is sent', () => {
    cy.visit('http://localhost:3000', {
      headers: {
        host: 'www.foo.com',
      },
    });
    cy.get('h1').contains('multi-brand usage example');
    cy.get('body').contains('palmier');
    cy.get('[data-automation=products]').contains('Date Palm');
  });
})
