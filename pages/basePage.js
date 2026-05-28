const logger = require('../utils/logger');

class BasePage {

    constructor(page) {
        this.page = page;
    }

    async launchURL(url) {

        logger.info(`Launching URL: ${url}`);

        await this.page.goto(url);
    }

    async fillText(locator, text) {

        logger.info(`Entering Text: ${text}`);

        await this.page.fill(locator, text);
    }

    async clickElement(locator) {

        logger.info(`Clicking Element: ${locator}`);

        await this.page.click(locator);
    }

    async isDisplayed(locator) {

        logger.info(`Checking Display Status: ${locator}`);

        return await this.page.isVisible(locator);
    }

    async isEnabled(locator) {

        logger.info(`Checking Enabled Status: ${locator}`);

        return await this.page.isEnabled(locator);
    }

    async waitForElement(locator) {

        await this.page.waitForSelector(locator);
    }

    async takeScreenshot(message) {

        const date = new Date();

        const timestamp =
            `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_` +
            `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

        const screenshotName =
            `screenshots/${message}_${timestamp}.png`;

        await this.page.screenshot({
            path: screenshotName,
            fullPage: true
        });

        logger.error(`Screenshot Captured: ${screenshotName}`);
    }
}

module.exports = BasePage;
