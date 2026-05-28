const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pages/loginPage');

const InventoryPage = require('../pages/inventoryPage');

const users = require('../testdata/users.json');

const logger = require('../utils/logger');

let loginPage;
let inventoryPage;

Given('user launches sauce demo application', async function () {

    loginPage = new LoginPage(this.page);

    inventoryPage = new InventoryPage(this.page);

    console.log('Valid User:', users.validUser);

    console.log('Invalid User:', users.invalidUser);

    await loginPage.launchURL('https://www.saucedemo.com/');
});

When('user enters valid username and password', async function () {

    logger.info('Entering Valid User Credentials');

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );
});

When('user enters invalid username and password', async function () {

    logger.info('Entering Invalid User Credentials');

    await loginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
    );
});

When('user clicks on login button', async function () {

    logger.info('Login Button Already Clicked Inside Login Method');
});

Then('user should navigate to products page', async function () {

    const isDisplayed =
        await inventoryPage.inventoryPageDisplayed();

    if (!isDisplayed) {

        await loginPage.takeScreenshot('ProductsPageNotDisplayed');

        throw new Error('Products Page Not Displayed');
    }

    logger.info('Products Page Displayed Successfully');
});

Then('user should see login error message', async function () {

    const errorMessage =
        await loginPage.getErrorMessage();

    console.log('Login Error Message:', errorMessage);

    await loginPage.takeScreenshot('InvalidLogin');

    logger.error('Invalid Login Performed');
});

