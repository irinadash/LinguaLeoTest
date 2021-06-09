module.exports = class Page {

    open (path) {
        return browser.url(`https://lingualeo.com/en/${path}`)
    }
}
