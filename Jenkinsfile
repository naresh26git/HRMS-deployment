pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerPass')
        EMAIL_RECIPIENT = 'bhagath.sr@gmail.com'
        NVM_DIR = '/var/lib/jenkins/.nvm' // Set the correct NVM_DIR
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from your version control system (e.g., Git)
                checkout scm
            }
        }

        stage('Set up Node.js') {
            steps {
                // Install NVM
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash'
                sh "export NVM_DIR=${NVM_DIR} && [ -s \"$NVM_DIR/nvm.sh\" ] && \\. \"$NVM_DIR/nvm.sh\""

                // Install Node.js
                sh "export NVM_DIR=${NVM_DIR} && nvm install 14.17.6"
                sh "export NVM_DIR=${NVM_DIR} && nvm use 14.17.6"
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build
                sh 'npm install -g yarn'
                sh 'yarn install'
                sh 'yarn workspace client unsafe:build'
                sh 'rm -r apis/server/public'
                sh 'mkdir apis/server/public'
                sh 'cp -r apps/client/dist/ apis/server/public/'
                sh 'yarn workspace server build:ts'

                // You can run tests or linters here if necessary
                // sh 'yarn lint'
                // sh 'yarn test'
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
                // Replace '<YOUR_DEPLOYMENT_COMMAND>' with your actual deployment command
                sh 'echo "Deploying your application"' // Example deployment command
            }
        }
    }

    post {
        success {
            // This block is executed if the pipeline is successful
            emailext to: "${EMAIL_RECIPIENT}",
                    subject: "Pipeline Success: ${currentBuild.fullDisplayName}",
                    body: "The Jenkins pipeline was successful."
            // You can add other post-build actions here
        }
        failure {
            // This block is executed if the pipeline fails
            emailext to: "${EMAIL_RECIPIENT}",
                    subject: "Pipeline Failure: ${currentBuild.fullDisplayName}",
                    body: "The Jenkins pipeline has failed."
            // You can add other post-build actions here
        }
    }
}
