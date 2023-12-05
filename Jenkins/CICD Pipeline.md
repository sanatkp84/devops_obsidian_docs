# Important Steps for CICD Pipeline

#### 1. Github integration with SSH key 
#### 2. Use of Webhook for automatic Deployment

# For Jenkins

#### Step-1 : Go to the Shell inside Jenkins.
#### Step-2 : Write those steps by using which you created the docker image & run the container.
#### Step-3 : Run these commands in the shell

```
docker build . -t app-name
docker run -d --name app-name -p 8000:8000 container-name
```

#### Step-4 : If permission denied error will come after build now then run the command in terminal.

```
sudo usermod -aG docker jenkins
```

