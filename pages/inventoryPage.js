const BasePage = require('./basePage');

class InventoryPage extends BasePage {

    constructor(page) {

        super(page);

        this.inventoryContainer = '.inventory_list';
    }

    async inventoryPageDisplayed() {

        return await this.isDisplayed(this.inventoryContainer);
    }
}

module.exports = InventoryPage;
