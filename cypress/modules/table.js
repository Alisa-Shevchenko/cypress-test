import { TablePage } from '../pages/tablePage';

import { validUserData } from '../testData/testData';

const tablePage = new TablePage();

export function addNewRowToTheTable() {

    tablePage.addRowToTheTableButton().click();
    tablePage.tableIdInput().type(validUserData.userId);
    tablePage.tableFirstNameInput().type(validUserData.userName);
    tablePage.tableLastNameInput().type(validUserData.userLastName);
    tablePage.tableUsernameInput().type(validUserData.userUserName);
    tablePage.tableEmailInput().type(validUserData.userEmail);
    tablePage.tableAgeInput().type(validUserData.userAge);
    tablePage.tableCheckmark().click()

    const elems = []
    tablePage.tableBody().each(($el) => {
        let elem = $el.text();
        elems.push(elem);
    }).then(() => {
        expect(elems[0]).to.equal(validUserData.userId)
        expect(elems[1]).to.equal(validUserData.userName)
        expect(elems[2]).to.equal(validUserData.userLastName)
        expect(elems[3]).to.equal(validUserData.userUserName)
        expect(elems[4]).to.equal(validUserData.userEmail)
        expect(elems[5]).to.equal(validUserData.userAge)
    })

}

export function editRowFromTable() {
    tablePage.editRowButton().click();
    tablePage.tableIdInput().clear().type(validUserData.userId);
    tablePage.tableFirstNameInput().clear().type(validUserData.userName);
    tablePage.tableCheckmark().click()

    const elems = []
    tablePage.tableBody().each(($el) => {
        let elem = $el.text();
        elems.push(elem);
    }).then(() => {
        expect(elems[0]).to.equal(validUserData.userId)
        expect(elems[1]).to.equal(validUserData.userName)

    })

}