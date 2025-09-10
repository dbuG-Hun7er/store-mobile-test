export default class Page {
    async waitForElement (element) {
        await element.waitForDisplayed({ timeout: 1000 })
    }
}

