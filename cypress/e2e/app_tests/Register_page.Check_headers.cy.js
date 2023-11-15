//Перевірка хедерів до кожного елемента з форми та заголовка (показано на скріні)

/// <reference types="cypress" />

describe('Register page', () => {

    it('Should have correct headings', () => {
        cy.visit('/auth/register');

        cy.get('#title')
            .should('have.text', "Register")
            .should('have.prop', 'tagName', 'H1');

        cy.get('form.ng-untouched > :nth-child(1) > .label').should('have.text', "Full name:");

        cy.get('.label').should(($el) => {
            expect($el[1]).to.have.text("Email address:");
            expect($el[2]).to.have.text("Password:");
            expect($el[3]).to.have.text("Repeat password:");
        });

        cy.get('.text').should('have.text', " Agree to Terms & Conditions");

        cy.get('.links').should('have.text', " or enter with: ");


    })

})