pipeline {
    agent {
        docker { image 'localhost:5000/htm-project' }
    }
    stages {
        stage('Docker Image'){
            when {
                expression {
                    sh(returnStdout: true, script: 'docker ps -a -q -f "name=htm-project"').trim() == ''
                }
            }
            steps {
                withEnv(["GITDESCRIBE=${sh(returnStdout: true, script: 'git describe | tr -d \'\n\'')}"]) {
                    sh 'docker build -t htm-project .'
                    sh 'docker run -d --name htm-project -p 9090:8080 htm-project'
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