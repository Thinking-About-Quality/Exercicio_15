pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/Thinking-About-Quality/Exercicio_15.git'
            }
        }
         stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
         stage('Executar testes') {
            steps {
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}
