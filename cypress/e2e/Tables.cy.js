// Сторінка http://localhost:4200/pages/tables/smart-table
// Додати новий рядок у таблицю за допомогою кнопки + , перевірити чи він доданий.
// Відредагувати будь який рядок з таблиці, перевірити чи елемент апдейтнувся.

/// <reference types="cypress" />

import { url } from '../testData/testData';
import { navigateTo } from '../modules/navigation';
import { addNewRowToTheTable, editRowFromTable } from '../modules/table';

describe('Table validation', () => {
    beforeEach(() => {
        navigateTo(url.table);
    })

    it('add a new row to the table', () => {
        addNewRowToTheTable()

    })

    it('edit a row from a table', () => {
        editRowFromTable()
    })

})