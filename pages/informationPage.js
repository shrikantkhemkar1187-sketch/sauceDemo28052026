const BasePage = require('./basePage');

class InformationPage extends BasePage {

    constructor(page) {

        super(page);

        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';
        this.continueButton = '#continue';
    }

    async enterCheckoutInformation() {

        await this.fillText(this.firstName, 'Srikanth');

        await this.fillText(this.lastName, 'QA');

        await this.fillText(this.postalCode, '500001');
    }

    async clickContinueButton() {

        await this.clickElement(this.continueButton);
    }
}

module.exports = InformationPage;
