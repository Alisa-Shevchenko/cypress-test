// Сторінка /pages/forms/layouts

// Введіть емейл та пасворд, перед тим зітріть текст який вже є в автозаповненні
// Чекніть чекбокс показаний на скріні
// Натисніть кнопку Sign In

/// <reference types="cypress" />

import { url } from '../testData/testData';
import { navigateTo } from '../modules/navigation';
import { performLogin } from '../modules/login';

describe('Login Form', () => {
    it('Log in with valid user data', () => {
        navigateTo(url.layouts);
        performLogin();

    })

})