const { chromium, firefox, webkit } = require('playwright');

class BrowserManager {

    static async getBrowser(browserName) {

        switch (browserName.toLowerCase()) {

            case 'firefox':
                return await firefox.launch({ headless: false });

            case 'webkit':
                return await webkit.launch({ headless: false });

            case 'chrome':
            case 'chromium':
            default:
                return await chromium.launch({ headless: false });
        }
    }
}

module.exports = BrowserManager;

