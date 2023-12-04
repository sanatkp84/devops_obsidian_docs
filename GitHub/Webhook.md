# What is Webhook?

After continuous deployment to automate the pipeline building process we need webhooks. If there will be any activity in github then it will trigger into the jenkins. (We don't need to press the build now button manually. If someone will commit in the github then it will be automatically deployed.)
##### Step-1 :
###### First inside the jenkins install plugins that is "github integration"
##### Step-2 :
###### Go to Github > Inside your Repo > Repo Settings > Webhooks > Add webhook 
##### Step-3 :
###### Give jenkins URL as payload URL
###### And add "/github-webhook/" in front of that jenkins URL.
###### Content type> application/json > {JUST THE PUSH EVENT} > {ACTIVE}