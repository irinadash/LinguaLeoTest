const Page = require('./page');

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnLogin () { return $('//div[(@class="ll-leokit__site-menu__header__auth-wrapper")]/p[@class="ll-leokit__site-menu__auth-btn"]') };
    get btnHaveAccount () { return $('//span[text()="I ALREADY HAVE AN ACCOUNT"]') };
    get btnResetPassword () { return $('//button[@class="ll-leokit__button ll-leokit__button__m-color-white ll-leokit__button__m-size-default ll-ModalAuthAlt__restore"]') };
    get resPassvModalWindow () {return $('//div[@class="ll-ModalAlt__body"]')};
    get inputFieldEmail () { return $('//input[@class="ll-ModalAuthAlt__credentials"]') };
    get btnContinue () { return $('.ll-leokit__button.ll-leokit__button__m-color-white.ll-leokit__button__m-size-default.ll-ModalAuthAlt__submit') };
    get exitButton () { return $('.ll-icon.ll-icon__m-size-custom')};
    get btnBack () { return $('.ll-leokit__button.ll-leokit__button__m-color-white.ll-leokit__button__m-size-default.ll-ModalAuthAlt__back') };
    get subModWindows () { return $('//div[@class="ll-ModalAlt__body"]')};
    get textVerifyEm () { return $('//div[@class="ll-ModalAuthAlt__description ll-ModalAuthAlt__description__m-emailsent"]') };

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
