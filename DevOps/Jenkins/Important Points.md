- We need to use docker-compose instead of dockerfile because dockerfile allocates a port and when we will run the pipeline again, then the pipeline will be failed because already that port is allocated to an application and that application is up. But in case of docker-compose it will down and up the container when we will rebuild the pipeline

#### Environment Variables
- Go to Dashboard > Manage jenkins > credentials > global > add credentials >