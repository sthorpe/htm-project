pipeline {
    agent any
    stages {
        stage('Docker Image'){
            when {
                expression {
                    sh(returnStdout: true, script: 'docker ps -a -q -f "name=htm-project"').tri() == ''
                }
            }
            steps {
                withEnv(["GITDESCRIBE=${sh(returnStdout: true, script: 'git describe | tr -d \'\n\'')}"]) {
                    sh 'docker build -t htm-project .'
                    sh 'docker run -d --name htm-project -p 8080:8080 htm-project'
                }
            }
        }
        stage('Docker container start') {
            steps {
                sh 'docker start htm-project'
            }
        }
        stage('Test') {
            steps {
                sh 'docker exec htm-project npm test'
            }
        }
    }
    post {
        always {
            sh 'docker stop htm-project'
        }
    }
}