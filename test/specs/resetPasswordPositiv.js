const LoginPage = require('../pageobjects/login.page');
const GmailLogin = require('../pageobjects/gmail.login');

describe('Reset password', () => {
    before('Open App', function (){
        browser.url(`https://lingualeo.com/en`);
    });

    describe('Reset password', () => {
        afterEach(() => {
            browser.execute('window.localStorage.clear()');
        });
        it('Verify that the RESET PASSWORD button is present in modal window and has  text "RESET PASSWORD"', async () => {
            await ( await LoginPage.btnLogin).click();
            await ( await LoginPage.btnHaveAccount).click();
            await expect(LoginPage.btnResetPassword).toBeExisting();
            await expect(LoginPage.btnResetPassword).toHaveTextContaining('RESET PASSWORD');
        });

        it('Verify that the clicking on the RESET PASSWORD button opens the Reset password modal window', async () => {
            await ( await LoginPage.btnResetPassword).click();
            await expect(LoginPage.resPassvModalWindow).toBeExisting();

        });

        it('Verify that the instruction for reseting password is present and has text ' +
            '"An email with a link to reset the password will be sent to the specified e-mail address"', async () => {
            await expect(LoginPage.resPassvModalWindow).toHaveTextContaining('An email with a link to reset the ' +
                'password will be sent to the specified e-mail address')
        });

        it('Verify that the E-mail input field is present ', async () => {
            await expect(LoginPage.inputFieldEmail).toBeExisting();
        });

        it('Verify that the submit button  is present and has text "CONTINUE"', async () => {
            await expect(LoginPage.btnContinue).toBeExisting();
            await expect(LoginPage.btnContinue).toHaveTextContaining('CONTINUE');
        });

        it('Verify that the button "BACK" is present with text "BACK" ', async () => {
            await expect(LoginPage.btnBack).toBeExisting();
            await expect(LoginPage.btnBack).toHaveTextContaining('BACK')
        });

        it('Verify that the exit button is present [X]" ', async () => {
            await expect(LoginPage.exitButton).toBeExisting();
        });

        it('Verify that Submit button becomes clickable when user enters correct email ', async () => {
            await ( await LoginPage.inputFieldEmail).click();
            await (await LoginPage.inputFieldEmail).setValue('linguatest123456@gmail.com');
            await expect(LoginPage.btnContinue).toBeClickable();
        });

        it('Verify that The new window with text "The email has been sent. Please verify your email." appears \n' +
            'after entering correct email and clicking CONTINUE button"', async () => {
            await ( await LoginPage.inputFieldEmail).setValue('linguatest123456@gmail.com');
            await ( await LoginPage.btnContinue).click();
            await expect(LoginPage.textVerifyEm).toHaveTextContaining('The email has been sent. Please verify your email.');
            await expect(LoginPage.subModWindows).toBeExisting();
        });

    });

});

describe('Receive "Reset link" from e-mail', () => {
    before('Open App', function (){
        browser.url(`https://mail.google.com/mail`);
    });

    it('Verify that you get an email which has been provided with \n' +
        ' PASSWORD RECOVERY UPON YOUR REQUEST', async () => {
        await ( await GmailLogin.inputEmailField).setValue('linguatest123456@gmail.com');
        await ( await GmailLogin.buttonNext).click();
        await ( await GmailLogin.inputPasswordField).waitForDisplayed();
        await ( await GmailLogin.inputPasswordField).setValue('testlingua');
        await ( await GmailLogin.passwordNextButton).click();
        await (await GmailLogin.emailConf).waitForDisplayed();
        await expect(GmailLogin.emailConf).toHaveTextContaining('Password recovery upon your request');
    });

    it('Verify that the link "GET A NEW PASSWORD" is present in the email', async () => {
        await browser.maximizeWindow();
        await (await GmailLogin.emailConf).waitForDisplayed();
        await ( await GmailLogin.emailConf).click();
        //await (await GmailLogin.link).waitForDisplayed();
        // await expect (GmailLogin.link).toBeExisting();
        // let valueAttribute = await( await GmailLogin.link).getAttribute('href');
        // await browser.newWindow(valueAttribute);
    });

    it('The modal window with "UPDATE YOUR PASSWORD AND LOGIN" opens', async () => {
    });

    it('Verify that  button "Update your password and login"  is active ' +
        'when user enters credential in field "Password" and "Repeat password" ', async () => {
    });

    it('Verify that user can login with new password', async () => {
    });

});
