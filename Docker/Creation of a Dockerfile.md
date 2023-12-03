# How to create a Dockerfile

1. Find the base image of application ( nodejs / Python flask app / django.....)
	Suppose the app is here on node-12 then the command :
	```
	FROM node:12.2.0-alpine
	```
2. Make a working directory
	```
	WORKDIR app
	```
3. Copy the code present in that directory inside the container (from source to destination)
	```
	COPY . .
	```
4. Install dependencies
	```
	RUN npm install
	```
5. Open the port for the app
	```
	EXPOSE 8000
	```
6. Run the server by using this command
	```
	CMD ["node","app.js"]
	```

# Create Docker image from Dockerfile

Run
```
docker build . -t app-name
```

If "docker ps" gives permission denied then run the command

```
sudo chown $USER /var/run/docker.sock
```

To Run the container

```
docker run -d --name app-name -p 8000:8000 container-name
```