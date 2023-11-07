// Сторінка /pages/modal-overlays/dialog

// Натисніть на кнопку показану на скріні
// Має бути показане модальне вікно. Треба перевірити що воно показане.
// Після чого перевірити що в цьому модальному вікні є заголовок(перевірити його текст), інпут та 2 кнопки Submit та Cancel

/// <reference types="cypress" />

describe('Modal-overlays', () => {
    it('Check modal window', () => {
        cy.visit('/pages/modal-overlays/dialog');
        cy.get('.result-from-dialog > .appearance-filled').click();
        cy.get('.cdk-overlay-pane');
        cy.get('.ng-star-inserted > nb-card > nb-card-header').should('have.text', 'Enter your name');
        cy.get('.ng-star-inserted > nb-card > nb-card-body > .size-medium');
        cy.get('.cancel');
        cy.get('.status-success')

    })

})