const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GmailLogin extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmailField () { return $('#identifierId') };
    get buttonNext () { return $('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b') };
    get inputPasswordField () { return $('input[type="password"]') };
    get passwordNextButton () { return $('#passwordNext') };
    get emailConf () { return $('.bog span.bqe') };

    get link () {return $$('a[href*=restore]')[1]};
}
module.exports = new GmailLogin();
