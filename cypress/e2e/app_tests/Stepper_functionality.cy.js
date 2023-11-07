// Сторінка /pages/layout/stepper

// Тест має перевіряти текст всередині компоненту "Step content ..."на кожному кроці. 
// Тобто вам треба перевірити текст, після чого натиснути кнопку NEXT. Потім знову перевірити текст.
// Повторювати до останнього степу.

/// <reference types="cypress" />

describe('Stepper functionality', () => {
    it('Check text', () => {
        cy.visit('/pages/layout/stepper');
        const stepContent = {
            firstStep: 'Step content #1',
            secondStep: 'Step content #2',
            thirdStep: 'Step content #3',
            fourthStep: 'Step content #4'
        }
        for (const step in stepContent) {
            cy.get('.horizontal > .step-content > h3.ng-star-inserted').should('have.text', stepContent[step]);
            step != "fourthStep" ? cy.get('.appearance-filled:contains("next"):eq("0")').click() : "Finish"
        }
    })

})