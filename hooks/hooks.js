
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');

const BrowserManager = require('../utils/browserManager');

const logger = require('../utils/logger');

setDefaultTimeout(60 * 1000);

Before(async function () {

    const browserName = process.env.BROWSER || 'chrome';

    logger.info(`Launching Browser: ${browserName}`);

    this.browser = await BrowserManager.getBrowser(browserName);

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();
});

After(async function (scenario) {

    if (scenario.result.status === 'FAILED') {

        const date = new Date();

        const timestamp =
            `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_` +
            `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

        const screenshotName =
            `screenshots/${scenario.pickle.name}_${timestamp}.png`;

        await this.page.screenshot({
            path: screenshotName,
            fullPage: true
        });

        logger.error(`Scenario Failed: ${scenario.pickle.name}`);

        logger.error(`Screenshot Captured: ${screenshotName}`);
    }

    await this.browser.close();
});
