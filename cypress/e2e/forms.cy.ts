/// <reference types="cypress" />
describe('loading the Forms page of the application', () => {
  it('form on the page', () => {
    cy.visit('/forms');

    cy.get('form').should('be.visible');
  });

  it('invalid form parameters', () => {
    cy.visit('/forms');

    cy.get('input[type="text"]').type('one two');
    cy.get('input[type="date"]').type('2022-12-12');

    cy.get('input[type="submit"]').click();

    cy.contains('A user must be at least 18 years of age to create a card (2005)').should(
      'be.visible'
    );

    cy.contains('Model must be selected').should('be.visible');
    cy.contains('Choose at least one dream').should('be.visible');
    cy.contains('You need to select a file with .jpeg, .png or .jpg permissions').should(
      'be.visible'
    );

    cy.contains(
      'You must enter the first and last name with a capital letter (minimum 3 letters per word)'
    ).should('be.visible');
  });

  it('valid form parameters', () => {
    cy.visit('/forms');

    cy.get('input[type="text"]').type('Dave Batista');
    cy.get('input[type="date"]').type('2000-12-12');
    cy.get('[type="radio"]').check('Toyota');
    cy.get('[type="checkbox"]').check(['Motorcycling', 'Hunting']);

    cy.get('input[type=file]').selectFile(
      {
        fileName: 'picture.png',
        contents: ['its a picture'],
      },
      { force: true }
    );

    cy.get('input[type="submit"]').click();

    cy.contains('Card created successfully!').should('be.visible');
    cy.contains('List of cards:').should('be.visible');
    cy.contains('Master:').should('be.visible');
  });
});
