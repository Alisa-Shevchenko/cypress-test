//Заповнення форми реєстрації та натиснення кнопки "Register",
//перевірка чи чекбокс чекнутий, 
//та чи у ng-reflect-model є значення вашого введеного тексту або просто перевірка 'have.value', 'your typed value'.


/// <reference types="cypress" />

describe('Register page', () => {
    
    it('Registration with valid credentials', () => {
        cy.visit('/auth/register');
        cy.get('#input-name').type('Alisa').should('have.value', "Alisa");
        cy.get('#input-email').type('alisa.shevchenko747@gmail.com').should('have.value', "alisa.shevchenko747@gmail.com");
        cy.get('#input-password').type('123456').should('have.value', "123456");
        cy.get('#input-re-password').type('123456').should('have.value', "123456");
        cy.get('[type="checkbox"]').check({force:true}).should('be.checked');
        cy.get('.appearance-filled').click();
        cy.get('.user-container');
        cy.location('pathname').should ('eq',"/pages")

    })

})