pipeline {
    agent none
    stages {
        stage('Front-end') {
            agent {
                docker { image 'htm-project' }
            }
            steps {
                sh 'node --version'
            }
        }
    }
}