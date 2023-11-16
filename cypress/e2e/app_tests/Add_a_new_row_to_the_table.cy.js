// Сторінка http://localhost:4200/pages/tables/smart-table
// Додати новий рядок у таблицю за допомогою кнопки + , перевірити чи він доданий.

/// <reference types="cypress" />

describe('Table validation', () => {
    it('add a new row to the table', () => {
        cy.visit('/pages/tables/smart-table');
        cy.get('.ng2-smart-actions-title > .ng2-smart-action').click();
        cy.get(':nth-child(2) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control').type("70");
        cy.get(':nth-child(3) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control').type("Alisa");
        cy.get(':nth-child(4) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control').type("Shevchenko");
        cy.get(':nth-child(5) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control').type("@alisa");
        cy.get(':nth-child(6) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control').type("alisa@mail.com");
        cy.get(':nth-child(7) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control').type("28");
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

