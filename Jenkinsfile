pipeline {

agent any

tools {
    nodejs 'NodeJS_24'
    jdk 'JDK25'
}

stages {

    stage('Checkout Code') {

        steps {

            git branch: 'main',
            url: 'https://github.com/shrikantkhemkar1187-sketch/sauceDemo28052026.git'
        }
    }

    stage('Install Dependencies') {

        steps {

            bat 'npm install'
            bat 'npx playwright install'
        }
    }

    stage('Run Playwright Tests') {

        steps {

            bat 'npm run chrome'
        }
    }

    stage('Generate Allure Report') {

        steps {

            bat 'allure generate reports/allure-results --clean -o reports/allure-report'
        }
    }
}

post {

    always {

        archiveArtifacts artifacts: 'screenshots/*.png',
        allowEmptyArchive: true

        publishHTML(target: [
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'reports',
            reportFiles: 'cucumber-report.html',
            reportName: 'Cucumber HTML Report'
        ])
        allure([ includeProperties: false, jdk: '', results: [[path: 'reports/allure-results']] ])
    }

    success {

        echo 'Pipeline Executed Successfully'
    }

    failure {

        echo 'Pipeline Failed'
    }
}

}
