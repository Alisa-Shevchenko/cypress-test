export class TablePage {

    addRowToTheTableButton() {
        return cy.get('.nb-plus')
    }

    tableIdInput() {
        return cy.get('input-editor [placeholder="ID"]')
    }

    tableFirstNameInput() {
        return cy.get('input-editor [placeholder="First Name"]')
    }

    tableLastNameInput() {
        return cy.get('input-editor [placeholder="Last Name"]')
    }

    tableUsernameInput() {
        return cy.get('input-editor [placeholder="Username"]')
    }

    tableEmailInput() {
        return cy.get('input-editor [placeholder="E-mail"]')
    }

    tableAgeInput() {
        return cy.get('input-editor [placeholder="Age"]')
    }

    tableCheckmark() {
        return cy.get('.nb-checkmark')
    }

    tableBody() {
        return cy.get('tbody tr td').find("[ng-reflect-ng-switch]")
    }

    editRowButton() {
        return cy.get('.nb-edit').first()
    }
}