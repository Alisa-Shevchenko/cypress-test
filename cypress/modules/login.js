import { LoginPage } from '../pages/loginPage';
import { validUserData } from '../testData/testData';

const loginPage = new LoginPage();

export function performLogin() {
    loginPage.emailInput().clear().type(validUserData.userEmail);
    loginPage.passwordInput().clear().type(validUserData.userPassword);
    loginPage.rememberMeCheckbox().click();
    loginPage.signUpButton().click();

}