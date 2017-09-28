pipeline {
    agent {
        docker { image 'localhost:5000/htm-project' }
    }
    stages {
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