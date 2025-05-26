

### In Your Wanderlust Project:

With ArgoCD (your current setup):

• ArgoCD continuously monitors your Kubernetes cluster

• It compares the live state with the Git repository manifests

• When it detects differences, it highlights them in the UI

• It can automatically sync to correct drift (self-healing)

  

If you were using Jenkins instead:

• You'd need to implement custom scripts to check for drift

• These scripts would need to run periodically to compare Git configs with cluster state

• You'd need to build your own reporting and alerting for drift

• Remediation would typically be a manual process or require additional automation


sudo curl --silent --location -o /usr/local/bin/argocd https://github.com/argoproj/argo-cd/releases/download/v2.4.7/argocd-linux-amd64