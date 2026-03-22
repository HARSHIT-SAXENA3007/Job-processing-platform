pipeline {

    agent any

    stages {

        stage('Clone repo') {

            steps {

                git 'https://github.com/YOUR_USERNAME/ai-job-processing-platform.git'

            }

        }


        stage('Install dependencies') {

            steps {

                sh 'npm install'

            }

        }


        stage('Run tests') {

            steps {

                sh 'npm test'

            }

        }


        stage('Build docker image') {

            steps {

                sh 'docker build -t job-platform .'

            }

        }

    }

}