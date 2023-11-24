// Сторінка /pages/layout/stepper

// Тест має перевіряти текст всередині компоненту "Step content ..."на кожному кроці. 
// Тобто вам треба перевірити текст, після чого натиснути кнопку NEXT. Потім знову перевірити текст.
// Повторювати до останнього степу.

/// <reference types="cypress" />

import { url } from '../testData/testData';
import { navigateTo } from '../modules/navigation';
import { checkStepperText } from '../modules/stepper';

describe('Stepper functionality', () => {
    it('Check text', () => {
        navigateTo(url.stepper);
        checkStepperText()
    })
})


