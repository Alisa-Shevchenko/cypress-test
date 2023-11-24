//Заповнення форми реєстрації та натиснення кнопки "Register",
//перевірка чи чекбокс чекнутий, 
//та чи у ng-reflect-model є значення вашого введеного тексту або просто перевірка 'have.value', 'your typed value'.
//Перевірка хедерів до кожного елемента з форми та заголовка (показано на скріні)
//Валідація 2-3 полів, потрібно ввести текст який не відповідає патерну для цього поля, 
//та перевірити ерор меседж. 
//Для того щоб побачити ерор меседж, у тесті можна клікнути на боді(cy.get("body").click()), 
//або на будь який інший елемент Для більшої наглядності додаю скрін валідація ерор меседжу


/// <reference types="cypress" />

import { url } from '../testData/testData';
import { navigateTo, verifyThatUserHasBeenNavigatedTo } from '../modules/navigation';
import { performRegisterWithValidUserData, shouldHaveCorrectHeadings, checkErrorMessageForEmptyFields, checkErrorMessageForInvalidUserData, checkErrorMessageForInvalidPasswordConfirmation } from '../modules/register';



describe('Register page', () => {
    beforeEach(() => {
        navigateTo(url.register);
    })

    it('Registration with valid credentials', () => {
        performRegisterWithValidUserData();
        verifyThatUserHasBeenNavigatedTo(url.pages);
    });

    it('Should have correct headings', () => {
        shouldHaveCorrectHeadings();
    });

    it('Error message for empty fields', () => {
        checkErrorMessageForEmptyFields()
    })


    it('Error message for invalid data', () => {
        checkErrorMessageForInvalidUserData()
    })

    it('Error message for invalid password confirmation', () => {
        checkErrorMessageForInvalidPasswordConfirmation()
    })

})