pipeline {

    agent any

    environment {
        MONGO_URI = credentials('mongo-uri')
    }

    stages {

        stage('Install dependencies') {
            agent {
                docker {
                    image 'node:20'
                }
            }
            steps {
                sh 'npm install'
            }
        }


        stage('Run tests') {
            agent {
                docker {
                    image 'node:20'
                }
            }
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