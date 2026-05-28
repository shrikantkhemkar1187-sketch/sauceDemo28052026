const BasePage = require('./basePage');

class ProductsPage extends BasePage {

    constructor(page) {

        super(page);

        this.addToCartButton = '#add-to-cart-sauce-labs-backpack';
        this.cartButton = '.shopping_cart_link';
    }

    async addProductToCart() {

        await this.clickElement(this.addToCartButton);
    }

    async clickCartButton() {

        await this.clickElement(this.cartButton);
    }
}

module.exports = ProductsPage;
