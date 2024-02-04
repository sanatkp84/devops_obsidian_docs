## Kubernetes - K8S  (Google-2008)

##### Features
- Autoscaling
- Auto healing

### WHY WE USE KUBERNETES

#### Application: - Monolithic & Microservices

#### Monolithic :
With in one click it can be start and stop completely. (all the features of application. you can't just do the logout. if you will do it everything will be shut down.)

#### Microservices:
A separate service will be made for each services ( for example in instagram sometimes the story service is not working but at the same time the message service and post uploading service is working completely fine. that means each service has a separate microservice. )

### Components of K8S Architecture

- Cluster : Cluster is a group of servers. 
#### Two Nodes : Master & Worker
##### Master:
- API Server:
- Scheduler:
- Controller Manager:
- etcd:
##### Worker:
- Kubelet:
- Service Proxy: