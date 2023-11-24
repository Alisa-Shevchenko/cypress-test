export class RegisterPage {

    registerModal() {
        return cy.get('nb-register')
    }

    nameInput() {
        return cy.get('#input-name')
    }

    emailInput() {
        return cy.get('#input-email')
    }

    passwordInput() {
        return cy.get('#input-password')
    }

    rePasswordInput() {
        return cy.get('#input-re-password')
    }

    checkbox() {
        return cy.get('[type="checkbox"]')
    }

    registerButton() {
        return cy.get('.appearance-filled')
    }

    registerModal() {
        return cy.get('nb-register')
    }

    registerTitle() {
        return cy.get('#title')
    }

    nameHeader() {
        return cy.get('form.ng-untouched > :nth-child(1) > .label')
    }

    registerLabel() {
        return cy.get('.label')
    }

    agreeToTermsConditions() {
        return cy.get('.text')
    }

    socialLinks() {
        return cy.get('.links')
    }

    errorMessageText() {
        return cy.get('.caption')
    }

}