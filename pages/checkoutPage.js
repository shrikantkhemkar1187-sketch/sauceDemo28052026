
const BasePage = require('./basePage');

class CheckoutPage extends BasePage {

    constructor(page) {

        super(page);

        this.finishButton = '#finish';
        this.successMessage = '.complete-header';
    }

    async clickFinishButton() {

        await this.clickElement(this.finishButton);
    }

    async getSuccessMessage() {

        return await this.page.textContent(this.successMessage);
    }
}

module.exports = CheckoutPage;

