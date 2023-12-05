Deploying a To-Do App on AWS with Jenkins CI/CD Setup :

1. AWS EC2 instance
2. Install Java (Jenkins witten in Java)
3. Install Jenkins, Enable and start jenkins
4. Open the 8080 port for jenkins in security Group to run the Jenkins interface.
5. Integrate Github with Jenkins using SSH Public and private key.
6. Clone the code from Github to the ec2 instance
7. First install Docker & then Dockerize the app by creating a Dockerfile
8. To solve the permission denied issue of "docker ps" command, add the user in to Docker Group by using this command :
```
udo usermod -aG docker $USER
```
9. Then go to the jenkins job
10. In execute shell run the docker build and run command.
11. For continuous deployment add github webhook to jenkins.
12. For using github webhook we need to first install the "github integration" plugin in jenkins
13. In Github give jenkins URL as payload URL & add "/github-webhook/" in front of that URL.
14. Save changes then build now.