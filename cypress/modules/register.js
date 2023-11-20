import { RegisterPage } from '../pages/registerPage';
import { validUserData, invalidUserData } from '../testData/testData';

const registerPage = new RegisterPage();

export function performRegisterWithValidUserData() {
    registerPage.registerModal().within(() => {
        registerPage.nameInput().clear().type(validUserData.userName).should('have.value', validUserData.userName);
        registerPage.emailInput().clear().type(validUserData.userEmail).should('have.value', validUserData.userEmail);
        registerPage.passwordInput().clear().type(validUserData.userPassword).should('have.value', validUserData.userPassword);
        registerPage.rePasswordInput().clear().type(validUserData.userPassword).should('have.value', validUserData.userPassword);
        registerPage.checkbox().check({ force: true }).should('be.checked');
        registerPage.registerButton().click();
    }
    )
}

export function shouldHaveCorrectHeadings() {
    registerPage.registerTitle()
        .should('have.text', "Register")
        .should('have.prop', 'tagName', 'H1');

    registerPage.nameHeader().should('have.text', "Full name:");

    registerPage.registerLabel().should(($el) => {
        expect($el[1]).to.have.text("Email address:");
        expect($el[2]).to.have.text("Password:");
        expect($el[3]).to.have.text("Repeat password:");
    });

    registerPage.agreeToTermsConditions().should('have.text', " Agree to Terms & Conditions");

    registerPage.socialLinks().should('have.text', " or enter with: ");
}

export function checkErrorMessageForEmptyFields() {
    registerPage.emailInput().click();
    registerPage.passwordInput().click();
    registerPage.rePasswordInput().click();
    registerPage.nameInput().click();
    registerPage.registerButton().should('be.disabled');
    registerPage.errorMessageText().should(($el) => {
        expect($el[0]).to.have.text(" Email is required! ");
        expect($el[1]).to.have.text(" Password is required! ");
        expect($el[2]).to.have.text(" Password confirmation is required! ")
    });
}

export function checkErrorMessageForInvalidUserData() {
    registerPage.emailInput().clear().type(invalidUserData.invalidUserEmail).should('have.value', invalidUserData.invalidUserEmail);
    registerPage.passwordInput().clear().type(invalidUserData.invalidUserPassword).should('have.value', invalidUserData.invalidUserPassword);
    registerPage.rePasswordInput().clear().type(invalidUserData.invalidUserPassword).should('have.value', invalidUserData.invalidUserPassword);
    registerPage.registerButton().should('be.disabled');
    registerPage.errorMessageText().should(($el) => {
        expect($el[0]).to.have.text(" Email should be the real one! ");
        expect($el[1]).to.have.text(" Password should contain from 4 to 50 characters ");
    });
}

export function checkErrorMessageForInvalidPasswordConfirmation() {
    registerPage.emailInput().clear().type(validUserData.userEmail).should('have.value', validUserData.userEmail);
    registerPage.passwordInput().clear().type(validUserData.userPassword).should('have.value', validUserData.userPassword);
    registerPage.rePasswordInput().clear().type(invalidUserData.invalidUserRePassword).should('have.value', invalidUserData.invalidUserRePassword);
    registerPage.nameInput().click();
    registerPage.registerButton().should('be.disabled');
    registerPage.rePasswordInput().should('have.css', 'border-color', 'rgb(255, 61, 113)');

}