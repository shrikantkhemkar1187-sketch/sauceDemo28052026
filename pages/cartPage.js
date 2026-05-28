
const BasePage = require('./basePage');

class CartPage extends BasePage {

    constructor(page) {

        super(page);

        this.checkoutButton = '#checkout';
    }

    async clickCheckoutButton() {

        await this.clickElement(this.checkoutButton);
    }
}

module.exports = CartPage;
