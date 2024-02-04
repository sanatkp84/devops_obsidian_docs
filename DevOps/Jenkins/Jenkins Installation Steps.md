# Installation of Jenkins in Ubunutu

1. Jenkins is written in JAVA. So first install java.
	```
	sudo apt update
	sudo apt install fontconfig openjdk-17-jre
	java -version
	```
2. Then install Jenkins.
	
```
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
```
```
sudo apt-get update
sudo apt-get install jenkins
```

If facing any error during installation then copy the above installation code from official documentation of jenkins.

3. Start Jenkins :

You can enable the Jenkins service to start at boot with the command:

```
sudo systemctl enable jenkins
```

You can start the Jenkins service with the command:

```
sudo systemctl start jenkins
```

You can check the status of the Jenkins service using the command:

```
sudo systemctl status jenkins
```


