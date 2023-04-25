describe('loading the Home page of the application', () => {
  it('presence of cards on the page', () => {
    cy.visit('/');

    cy.get('li').should('have.length', 20);
  });

  it('number of menu items', () => {
    cy.visit('/');

    cy.get('a').should('have.length', 3);
  });

  it('work links', () => {
    cy.visit('/');

    cy.get('a:last-child').click();
    cy.get('main').should('have.text', 'About');
  });

  it('display modal window', () => {
    cy.visit('/');
    cy.get('li:first-child').click();
    cy.get('.popupContainer').should('have.class', 'popupContainer containerActive');
  });

  it('work search on the main page', () => {
    cy.visit('/');
    cy.get('input:first-child').type('hulk');
    cy.get('input:first-child').should('have.value', 'hulk');

    cy.get('input:last-child').click();
    cy.get('li').should('have.length', 9);
  });
});
