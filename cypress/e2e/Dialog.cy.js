// Сторінка /pages/modal-overlays/dialog

// Натисніть на кнопку показану на скріні
// Має бути показане модальне вікно. Треба перевірити що воно показане.
// Після чого перевірити що в цьому модальному вікні є заголовок(перевірити його текст), інпут та 2 кнопки Submit та Cancel

/// <reference types="cypress" />

import { url } from '../testData/testData';
import { navigateTo } from '../modules/navigation';
import { checkItemsOnTheDialogModal } from '../modules/dialog';

describe('Modal-overlays', () => {
    it('Check items on the dialog modal window', () => {
        navigateTo(url.dialog);
        checkItemsOnTheDialogModal()
    })

})