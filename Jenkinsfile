pipeline {
    agent {
        docker { image 'localhost:5000/htm-project' }
    }
    stages {
        stage('Docker container start') {
            steps {
                docker start htm-project
            }
        }
        stage('Test') {
            steps {
                docker exec htm-project npm test
            }
        }
    }
    post {
        always {
            docker stop htm-project
        }
    }
}