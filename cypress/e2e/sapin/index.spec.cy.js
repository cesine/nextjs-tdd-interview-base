describe('sapin', () => {
  it('should render the sapin products', () => {
    cy.visit('http://sapin.localhost:3000');
    cy.get('title').contains('Sapin Christmas Trees');
    cy.get('h1').contains('SAPIN');
    cy.get('body').contains('SAPIN');
    cy.get('[data-automation=products]').contains('spruce');
  });

  it('should render the sapin products when the host header is sent', () => {
    cy.visit('http://localhost:3000', {
      headers: {
        host: 'www.sapin.com',
      },
    });
    cy.get('h1').contains('SAPIN');
    cy.get('body').contains('SAPIN');
    cy.get('[data-automation=products]').contains('spruce');
  });
})
