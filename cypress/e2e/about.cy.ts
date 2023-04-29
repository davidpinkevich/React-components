/// <reference types="cypress" />
describe('loading the About page of the application', () => {
  it('About view', () => {
    cy.visit('/about');

    cy.get('main').should('have.text', 'About');
  });
});
