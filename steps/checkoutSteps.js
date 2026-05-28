const { When, Then } = require('@cucumber/cucumber');

const ProductsPage = require('../pages/productsPage');

const CartPage = require('../pages/cartPage');

const InformationPage = require('../pages/informationPage');

const CheckoutPage = require('../pages/checkoutPage');

const logger = require('../utils/logger');

let productsPage;
let cartPage;
let informationPage;
let checkoutPage;

When('user adds product to cart', async function () {

    productsPage = new ProductsPage(this.page);

    await productsPage.addProductToCart();

    logger.info('Product Added To Cart');
});

When('user clicks on cart button', async function () {

    await productsPage.clickCartButton();

    logger.info('Cart Button Clicked');
});

When('user clicks on checkout button', async function () {

    cartPage = new CartPage(this.page);

    await cartPage.clickCheckoutButton();

    logger.info('Checkout Button Clicked');
});

When('user enters checkout information', async function () {

    informationPage = new InformationPage(this.page);

    await informationPage.enterCheckoutInformation();

    logger.info('Checkout Information Entered');
});

When('user clicks on continue button', async function () {

    await informationPage.clickContinueButton();

    logger.info('Continue Button Clicked');
});

When('user clicks on finish button', async function () {

    checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.clickFinishButton();

    logger.info('Finish Button Clicked');
});

Then('order should be completed successfully', async function () {

    const successMessage =
        await checkoutPage.getSuccessMessage();

    console.log('Order Success Message:', successMessage);

    logger.info('Order Completed Successfully');
});
