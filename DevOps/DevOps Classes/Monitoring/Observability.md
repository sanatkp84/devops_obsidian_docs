#### Application:
- Logging
- Monitoring
- Alerting
- Visualization
------------------

- Grafana will provide you a dashboard to display logs, errors. It will give Logging, Monitoring, Alerting, Visualization.
#### Loki : Log Aggregator (collect the logs)
#### Prometheus : Time series metrics
#### Promtail : It will gather data from all resources and provide it to the Loki. Loki the give it to grafana.

- What we will do?
- make an app which will give logs... promtail will listen to it... and it will give the data to loki then loki will give it to grafana.... grafana will create a dashboard and display the logs to us.


## After installation of Grafana we need to integrate Loki and Promtail by install it from CLI

- Start Grafana server using the command
```
sudo /bin/systemctl start grafana-server
```

- Grafana runs on 3000 port.

```
mkdir grafana-configs
```

```
cd grafana-configs
```

- Inside the Grafana config Install Loki
- Why we are using the docker container here to install loki and Promtail? : Because they can communicate with each other through docker network. otherwise we can also install them manually like Grafana.
- Loki runs on 3100 port so we have to open it. 
- Then download the promtail. 
-  promtail runs on 9080 port.
- 