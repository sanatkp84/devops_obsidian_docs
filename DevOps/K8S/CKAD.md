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
----------------------------------------------------
### ContainerD
- `ctl` command comes with container-d.
- Mainly used for debugging
- Pull the image : ```ctl pull <image-address>```
- Run the container : ```ctl run <image-address>```
- Not user friendly
- Better alternatives are nerdctl & crictl (Everything is same as docker just need to use `nerdctl` or `crictl` instead of `docker`.
#### Example :
```nerdctl run --name webserver -p 80:80 -d nginx```
```crictl ps -a```
```crictl pull <image-name>```
- One exceptional thing which docker is not aware of but crictl does, "THAT IS POD"
- ```crictl pods```
----------------------------------------------------

### Node Controller Working :
- The Node controller checks the status of nodes every 5 seconds, if any node is not working then it will wait for 40 seconds, if even after that the node's status is "NOT WORKING", then it will flag it as unreachable. Then it will give the node 5 minutes to comeback, if it will not come to the working state then it will replace it with a healthier one if the pods are part of a replica set.
