# To run two-tier application using Docker Network (Without Docker-compose)

- 1st create a docker image from Dockerfile
```
docker build -t flaskapp .
```
- Now, make sure that you have created a network using following command
```
docker network create twotier
```
- Attach both the containers in the same network, so that they can communicate with each other
- i) MySQL container
```
docker run -d --name mysql -v mysql-data:/var/lib/mysql -v ./message.sql:/docker-entrypoint-initdb.d/message.sql --network=twotier -e MYSQL_DATABASE=mydb -e MYSQL_USER=root -e MYSQL_ROOT_PASSWORD="admin" -p 3360:3360 mysql:5.7
```
- ii) Backend container
```
docker run -d --name flaskapp -v mysql-data:/var/lib/mysql -v ./message.sql:/docker-entrypoint-initdb.d/message.sql --network=twotier -e MYSQL_HOST=mysql -e MYSQL_USER=root -e MYSQL_PASSWORD=admin -e MYSQL_DB=mydb -p 5000:5000 flaskapp:latest
```
