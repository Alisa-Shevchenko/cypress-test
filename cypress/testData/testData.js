const url = Object.freeze({
    register: '/auth/register',
    table: '/pages/tables/smart-table',
    stepper: '/pages/layout/stepper',
    layouts: '/pages/forms/layouts',
    dialog: '/pages/modal-overlays/dialog',
    pages: '/pages'
});

const validUserData = Object.freeze({
    userName: 'Alisa',
    userLastName: 'Shevchenko',
    userEmail: 'alisa.shevchenko747@gmail.com',
    userPassword: '123456',
    userId: '70',
    userUserName: '@alisa',
    userAge: '28',

})

const invalidUserData = Object.freeze({
    invalidUserEmail: 'r@',
    invalidUserPassword: '12',
    invalidUserRePassword: '1234567',
})

export { url, validUserData, invalidUserData };