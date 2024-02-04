- Create 2 yml files in K8S.
- One named blue and another one green.
- Run both files using the command
```
kubectl apply -f blue.yml
```
```
kubectl apply -f green.yml
```

- Now both deployment files are running.
- We can change the traffic from blue to green or vice-versa by changing the service names and label , matchlabel names.