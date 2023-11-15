//Валідація 2-3 полів, потрібно ввести текст який не відповідає патерну для цього поля, 
//та перевірити ерор меседж. 
//Для того щоб побачити ерор меседж, у тесті можна клікнути на боді(cy.get("body").click()), 
//або на будь який інший елемент Для більшої наглядності додаю скрін валідація ерор меседжу

/// <reference types="cypress" />

describe('Fields validation. Should have correct error message', () => {
    beforeEach(() => cy.visit('/auth/register'));

    it('Empty fields', () => {
        cy.get('#input-email').click();
        cy.get('#input-password').click();
        cy.get('#input-re-password').click();
        cy.get('#input-name').click();
        cy.get('.appearance-filled').should('be.disabled');
        cy.get('.caption').should(($el) => {
            expect($el[0]).to.have.text(" Email is required! ");
            expect($el[1]).to.have.text(" Password is required! ");
            expect($el[2]).to.have.text(" Password confirmation is required! ")
        });

    });

    it('Invalid data', () => {
        cy.get('#input-email').type('r@');
        cy.get('#input-password').type('12');
        cy.get('#input-re-password').click();
        cy.get('.appearance-filled').should('be.disabled');
        cy.get('.caption').should(($el) => {
            expect($el[0]).to.have.text(" Email should be the real one! ");
            expect($el[1]).to.have.text(" Password should contain from 4 to 50 characters ");
        });

    });

    it('Invalid password confirmation', () => {
        cy.get('#input-email').type('test@mail.com@');
        cy.get('#input-password').type('123456');
        cy.get('#input-re-password').type('1234567');
        cy.get('#input-name').click();
        cy.get('.appearance-filled').should('be.disabled');
        cy.get('#input-re-password').should('have.css', 'border-color', 'rgb(255, 61, 113)');

    });
});