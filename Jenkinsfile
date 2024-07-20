pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/LorenTrindade/atividade-pratica-jenkins/branches', branch: 'main'
      }
    }

    stage('Build') {
      steps {
        script {
          def nodeHome = tool name: 'NodeJS', type: 'NodeJSInstallation'
          env.PATH = "${nodeHome}/bin:${env.PATH}"
          bat 'npm install'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          def nodeHome = tool name: 'NodeJS', type: 'NodeJSInstallation'
          env.PATH = "${nodeHome}/bin:${env.PATH}"
          bat 'npm test'
        }
      }
    }
  }

  post {
    always {
      junit 'reports/**/*.xml'
    }
    success {
      echo 'Build succeeded!'
    }
    unstable {
      echo 'Build is unstable.'
    }
    failure {
      echo 'Build failed.'
    }
  }
}
