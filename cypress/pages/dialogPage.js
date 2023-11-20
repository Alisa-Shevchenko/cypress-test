export class DialogPage {

    enterNameButton() {
        return cy.get('.result-from-dialog > .appearance-filled')
    }

    modalWindow() {
        return cy.get('.cdk-overlay-pane')
    }

    dialogHeader() {
        return cy.get('.ng-star-inserted > nb-card > nb-card-header')
    }

    dialogNameInput() {
        return cy.get('.ng-star-inserted > nb-card > nb-card-body > .size-medium')
    }

    cancelButton() {
        return cy.get('.cancel')
    }

    submitButton() {
        return cy.get('.status-success')
    }
}