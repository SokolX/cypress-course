/// <reference types="Cypress" />

describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('/');
    cy.get('.main-header img');
    cy.get('.main-header').find('img');
  })

  it('should display the page title', () => {
    cy.visit('/');
    cy.get('h1').should('have.length', 1);
    cy.get('h1').should('exist');
    cy.get('h1').contains('My Cypress Course Tasks');
  })
})