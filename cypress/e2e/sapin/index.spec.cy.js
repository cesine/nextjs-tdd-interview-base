describe('home', () => {
  it('should render the sapin products', () => {
    cy.visit('http://sapin.localhost:3000');
    cy.get('h2').contains('Home page');
    cy.get('body').contains('SAPIN');
    cy.get('[data-automation=products]').contains('spruce');
  });

  it('should render the sapin products when the host header is sent', () => {
    cy.visit('http://localhost:3000', {
      headers: {
        host: 'www.sapin.com',
      },
    });
    cy.get('h2').contains('Home page');
    cy.get('body').contains('SAPIN');
    cy.get('[data-automation=products]').contains('spruce');
  });
})
