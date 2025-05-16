# CKAD Exam Notes
### Commands for Kubernetes
- To deploy Application
`kubectl run hello-minicube`
- Info about the Cluster
`kubectl cluster-info`
- List Nodes
`kubectl get nodes`
---------------------------
###### First K8S used to work ONLY WITH DOCKER. Then K8S introduced CRI(Container run time interface) to work with other runtime containers, but they must adhere to the OCI standards (Open Container Initiative).
- OCI :
  1. imagespec
  2. runtimespec 
