pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerPass')
    }

    stages {
        stage('Checkout') {
            steps {
                // Replace 'https://github.com/Bhagathclubits/HRMS-deployment.git' with your GitHub repository URL
                checkout scm
            }
        }

        stage('Install Node.js and npm') {
            steps {
                script {
                    sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash'
                    sh 'source ~/.nvm/nvm.sh && nvm install 14.17.6'
                    sh 'source ~/.nvm/nvm.sh && nvm use 14.17.6'
                }
            }
        }

        stage('Install AWS CLI') {
            steps {
                sh 'pip install awscli'
            }
        }

        stage('Install Yarn and Build') {
            steps {
                sh 'npm install -g yarn' // Install Yarn globally

                sh 'yarn install'
                sh 'yarn workspace client unsafe:build'
                sh 'rm -r apis/server/public'
                sh 'mkdir apis/server/public'
                sh 'cp -r apps/client/dist/ apis/server/public/'
                sh 'yarn workspace server build:ts'
            }
        }

        stage('Docker Build and Push') {
            steps {
                script {
                    def customImageTag = "myapp:${env.BUILD_NUMBER}"
                    
                    // Authenticate with Docker Hub
                    withCredentials([usernamePassword(credentialsId: 'dockerPass', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                        sh "docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}"
                    }

                    // Build and tag Docker image
                    sh "docker build -t ${customImageTag} ."
                    
                    // Push Docker image to Docker Hub
                    sh "docker push ${customImageTag}"
                }
            }
        }

        stage('Deploy') {
            steps {
                // Replace 'successful ' with your actual deployment command
                sh 'successful'
            }
        }
    }

    post {
        success {
            // This block is executed if the pipeline is successful
            // You can add post-build actions or notifications here
        }
        failure {
            // This block is executed if the pipeline fails
            // You can add failure notifications or cleanup steps here
        }
    }
}
