
const BasePage = require('./basePage');

class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = 'h3[data-test="error"]';
    }

    async login(username, password) {

        await this.fillText(this.usernameInput, username);

        await this.fillText(this.passwordInput, password);

        await this.clickElement(this.loginButton);
    }

    async getErrorMessage() {

        return await this.page.textContent(this.errorMessage);
    }
}

module.exports = LoginPage;


