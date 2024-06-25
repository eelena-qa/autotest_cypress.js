describe('Проверка авторизации', function () {
// #1
    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зайти на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //найти поле email и заполнить
         cy.get('#pass').type('iLoveqastudio1'); //найти поле пароль и заполнить
         cy.get('#loginButton').click(); //нажать на кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить наличие текста
         cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что крестик есть и он виден
     })
// #2
     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт
        cy.get('#forgotEmailButton').click(); //нажать на кнопку забыли пароль
        cy.get('#mailForgot').type('kelam29155@fna6.com'); //найти поле email и заполнить
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //проверить наличие текста
        cy.get('#forgotForm > .header').should('be.visible'); //проверить, что текст виден
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //проверить, что крестик есть и он виден
        cy.get('#restoreEmailButton').click(); //нажать на кнопку отправить
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверить наличие текста
        cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что крестик есть и он виден
    })
// #3
    it('Верный логин и неверный пароль ', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //найти поле email и заполнить
        cy.get('#pass').type('iLoveqastudio12'); //найти поле пароль и заполнить (неверный пароль)
        cy.get('#loginButton').click(); //нажать на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить наличие текста
        cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что крестик есть и он виден
    })
// #4
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт
        cy.get('#mail').type('germannn@dolnikov.ru'); //найти поле email и заполнить (неверный логин)
        cy.get('#pass').type('iLoveqastudio1'); //найти поле пароль и заполнить
        cy.get('#loginButton').click(); //нажать на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить наличие текста
        cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что крестик есть и он виден
    })
// #5
    it('Проверка валидации логина без @', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); //найти поле email и заполнить (логин без @)
        cy.get('#pass').type('iLoveqastudio1'); //найти поле пароль и заполнить
        cy.get('#loginButton').click(); //нажать на кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверить наличие текста
        cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что крестик есть и он виден
    })
// #6
    it('Проверка регистра логина (приведение к строчным буквам)', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //найти поле email и заполнить (регистр)
        cy.get('#pass').type('iLoveqastudio1'); //найти поле пароль и заполнить
        cy.get('#loginButton').click(); //нажать на кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить наличие текста
        cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что крестик есть и он виден
    })
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 