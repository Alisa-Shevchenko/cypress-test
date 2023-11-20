import { DialogPage } from '../pages/dialogPage';

const dialogPage = new DialogPage();

export function checkItemsOnTheDialogModal() {
    dialogPage.enterNameButton().click();
    dialogPage.modalWindow();
    dialogPage.dialogHeader().should('have.text', 'Enter your name');
    dialogPage.dialogNameInput();
    dialogPage.cancelButton();
    dialogPage.submitButton()
}