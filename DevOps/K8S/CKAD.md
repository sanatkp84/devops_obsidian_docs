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
  1. imagespec - how an image should be built
  2. runtimespec - how any runtime container should developed
### ContainerD
- `ctl` command comes with container-d.
- Mainly used for debugging
- Pull the image : ```ctl pull <image-address>```
- Run the container : ```ctl run <image-address>```
- Not user friendly
- Better alternatives are nerdctl & crictl (Everything is same as docker just need to use `nerdctl` or `crictl` instead of Docker.
- 
