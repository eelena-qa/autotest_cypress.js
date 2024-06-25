describe('Проверка покупки нового аватара для тренера', function () {
        it('Проверка покупки нового аватара для тренера', function () {
             cy.visit('https://pokemonbattle.ru/'); //зайти на сайт
             cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //найти поле email и заполнить
             cy.get('#password').type('USER_PASSWORD'); //найти поле пароль и заполнить
             cy.get('.auth__button').click(); //нажать на кнопку войти
             cy.get('.header__btns > :nth-child(4)').click(); //нажать на кнопку магазин
             cy.get('.available > button').first().click(); //нажать на кнопку купить у первого доступного аватара
             cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); //найти поле номер и ввести
             cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25'); //найти поле срок и ввести
             cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //найти поле код и ввести
             cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Elena Elenova'); //найти поле имя и ввести
             cy.get('.pay-btn').click(); //нажать кнопку оплатить
             cy.get('#cardnumber').type('56456'); //найти поле код и пуш и ввести
             cy.get('.payment__submit-button').click(); //нажать на кнопку отправить
             cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //проверить текст
             cy.get('.payment__font-for-success').should('be.visible'); //проверить видимость текста
         })

     })