// Сторінка /pages/forms/layouts

// Введіть емейл та пасворд, перед тим зітріть текст який вже є в автозаповненні
// Чекніть чекбокс показаний на скріні
// Натисніть кнопку Sign In

/// <reference types="cypress" />

describe('Forms', () => {
    it('Check text', () => {
        cy.visit('/pages/forms/layouts');
        cy.get('#inputEmail3').clear().type('alisa.shevchenko747@gmail.com');
        cy.get('#inputPassword3').clear().type('123456');
        cy.get('.checkbox > nb-checkbox > .label > .custom-checkbox').click();
        cy.get('.form-horizontal > :nth-child(4) > .offset-sm-3 > .appearance-filled').click();

    })

})