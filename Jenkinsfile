pipeline {

    agent {
        docker {
            image 'node:18'
        }
    }
    
    environment {
        MONGO_URI = credentials('mongo-uri')
    }

    stages {

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