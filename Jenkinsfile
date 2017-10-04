  node("master") {
    checkout scm

    stage("Production") {
      try {
        sh "docker rm -f localhost:5000/htm-project || true"
        sh "docker run -d -p 8080:9090 --name=htm-project localhost:5000/htm-project"

      } catch(e) {
        error "Staging failed"
      } finally {
        sh "docker rm -f cd-demo || true"
        sh "docker ps -aq | xargs docker rm || true"
        sh "docker images -aq -f dangling=true | xargs docker rmi || true"
      }
    }
  }