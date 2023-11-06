// Сторінка /pages/layout/stepper

// Тест має перевіряти текст всередині компоненту "Step content ..."на кожному кроці. 
// Тобто вам треба перевірити текст, після чого натиснути кнопку NEXT. Потім знову перевірити текст.
// Повторювати до останнього степу.

/// <reference types="cypress" />

describe('Step content', () => {
    it('Check text', () => {
        cy.visit('/pages/layout/stepper');
        cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #1');
        cy.get('.horizontal > .step-content > [aria-disabled="false"]').click();
        cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #2');
        cy.get('.horizontal > .step-content > [nbsteppernext=""]').click();
        cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #3');
        cy.get('.horizontal > .step-content > [nbsteppernext=""]').click();
        cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', 'Step content #4');
        cy.get('.horizontal > .step-content > .btn-disabled');
    })

})