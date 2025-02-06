pipeline {
    agent any
    stages {      
        stage("Copy file to Docker server"){
            steps {
                sh "scp -r /var/lib/jenkins/workspace/66023096-next/* root@43.208.241.236:~/66023096-next"
            }
        }
        
        stage("Build Docker Image") {
            steps {
                ansiblePlaybook playbook: '/var/lib/jenkins/workspace/66023096-next/playbooks/build.yaml'
            }    
        }
        
        stage("Create Docker Container") {
            steps {
                ansiblePlaybook playbook: '/var/lib/jenkins/workspace/66023096-next/playbooks/deploy.yaml'
            }    
        }
    }
}
