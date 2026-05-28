
module.exports = {

    default: {

        require: [
            'steps/*.js',
            'hooks/*.js'
        ],

        format: [
            'progress',
            'json:reports/cucumber-report.json',
            'html:reports/cucumber-report.html',
            'allure-cucumberjs/reporter'
        ],

        formatOptions: {
            resultsDir: 'reports/allure-results'
        },

        paths: [
            'features/*.feature'
        ],

        parallel: 1
    }
};

