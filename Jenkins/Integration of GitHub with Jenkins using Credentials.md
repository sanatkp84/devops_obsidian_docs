# How to connect GitHub and Jenkins using Credentials 

Step - 1 : Paste your project URL of github in jenkins.

Step - 2 : Go to your terminal (local or ec2 instance)
Create SSH key ( Private & Public Key) by using below commands.
```
ssh-keygen
```
It will show you the directory where the keys are available.

Step - 4 : Go to " .ssh " directory
```
cd .ssh
``` &
```ls```
id_rsa (private)
id_rsa.pub (public)
###### We can see the keys by using cat command. (both public and private)

###### Step - 5 : Go to GitHub > Settings > SSH and GPG Keys > Give the public key as ssh key.
###### Step - 6 : Give the Private key inside the jenkins credential.