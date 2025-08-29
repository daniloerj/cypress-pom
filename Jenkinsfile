pipeline {
    agent any
    environment {
        NODE_ENV = 'test'
    }
    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Cypress tests') {
            steps {
                bat 'npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=true,json=true'
            }
        }
        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/*.html', allowEmptyArchive: true
            }
        }
    }
    post {
        always {
            junit 'cypress/reports/*.xml'
        }
    }
}
