// Сторінка http://localhost:4200/pages/tables/smart-table
// Додати новий рядок у таблицю за допомогою кнопки + , перевірити чи він доданий.

/// <reference types="cypress" />

describe('Table validation', () => {
    it('add a new row to the table', () => {
        cy.visit('/pages/tables/smart-table');
        cy.get('.nb-plus').click();
        cy.get('input-editor [placeholder="ID"]').type("70");
        cy.get('input-editor [placeholder="First Name"]').type("Alisa");
        cy.get('input-editor [placeholder="Last Name"]').type("Shevchenko");
        cy.get('input-editor [placeholder="Username"]').type("@alisa");
        cy.get('input-editor [placeholder="E-mail"]').type("alisa@mail.com");
        cy.get('input-editor [placeholder="Age"]').type("28");
        cy.get('.nb-checkmark').click()
        
        const elems = []
        cy.get("tbody tr td").find("[ng-reflect-ng-switch]").each(($el) => {
            let elem = $el.text();
            elems.push(elem);
        }).then(() => {
            expect(elems[0]).to.equal('70')
            expect(elems[1]).to.equal('Alisa')
            expect(elems[2]).to.equal('Shevchenko')
            expect(elems[3]).to.equal('@alisa')
            expect(elems[4]).to.equal('alisa@mail.com')
            expect(elems[5]).to.equal('28')
        })
    })

})

