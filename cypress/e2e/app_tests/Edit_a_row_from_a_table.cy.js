// Відредагувати будь який рядок з таблиці, перевірити чи елемент апдейтнувся.

/// <reference types="cypress" />

describe('Table validation', () => {
    it('edit a row from a table', () => {
        cy.visit('/pages/tables/smart-table');
        cy.get('.nb-edit').first().click();
        cy.get('input-editor [placeholder="ID"]').clear().type("101");
        cy.get('input-editor [placeholder="First Name"]').clear().type("Test");
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