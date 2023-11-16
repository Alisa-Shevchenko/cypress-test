// Відредагувати будь який рядок з таблиці, перевірити чи елемент апдейтнувся.

/// <reference types="cypress" />

describe('Table validation', () => {
    it('edit a row from a table', () => {
        cy.visit('/pages/tables/smart-table');
        cy.get(':nth-child(1) > .ng2-smart-actions > ng2-st-tbody-edit-delete > .ng2-smart-action-edit-edit > .nb-edit').click();
        cy.get(':nth-child(2) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control').clear().type("101");
        cy.get(':nth-child(3) > ng2-smart-table-cell > table-cell-edit-mode.ng-star-inserted > :nth-child(1) > table-cell-default-editor.ng-star-inserted > div > .ng-star-inserted > .form-control').clear().type("Test");
        cy.get('.nb-checkmark').click();

        const elems = []
        cy.get("tbody tr td").find("[ng-reflect-ng-switch]").each(($el) => {
            let elem = $el.text();
            elems.push(elem);
        }).then(() => {
            expect(elems[0]).to.equal('101')
            expect(elems[1]).to.equal('Test')

        })
    })

})