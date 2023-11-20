export class LoginPage {

    emailInput() {
        return cy.get('#inputEmail3')
    }

    passwordInput() {
        return cy.get('#inputPassword3')
    }

    rememberMeCheckbox() {
        return cy.get('.checkbox > nb-checkbox > .label > .custom-checkbox')
    }

    signUpButton() {
        return cy.get('.form-horizontal > :nth-child(4) > .offset-sm-3 > .appearance-filled')
    }
}