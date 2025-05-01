- Two ways we can create and manage your infrastructure.
- 1. Manual approach   ||   2. Through automation
# Work Requirement : Database Backup

- You are assigned a task to take database backup every day at 10 PM and the backup had to be stored in Amazon S3 Storage with appropriate timestamp.

● db-backup-01-01-2024.sql 
● db-backup-02-01-2024.sql 

- Suppose You are taking DB backup manually take at 10 PM and upload it to S3.

![](../../Jenkins/Image%20Resources/Screenshot%202024-12-28%20130952.png)

# Learning from this Work Requirement 

- If a particular task has to be done in an repeatable manner, it MUST be automated.

- Points to Note:
1. Depending on the type of task, the tools for automation will change.
2. There are wide variety of Tools & Technologies used for Automation like Ansible, CloudFormation, Terraform, Python etc.


# Example of a Single Service 

- Set of resources (Virtual Machine, Database, S3, AWS Users) must be created with exact similar configuration in Dev, Stage and Production environment.

![](../../Jenkins/Image%20Resources/Screenshot%202024-12-28%20130529.png)

# Example of a Single Service - Automated Way

![](../../Jenkins/Image%20Resources/Screenshot%202024-12-28%20131007.png)

# Basics of Infrastructure as Code 

- Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes.

![](../../Jenkins/Image%20Resources/Screenshot%202024-12-28%20131020.png)

# Benefits of Infrastructure As Code 

- There are several benefits of designing your infrastructure as code: 
● Speed of Infrastructure Management.
● Low Risk of Human Errors.
● Version Control. 
● Easy collaboration between Teams.

# Available Tools
- There are various types of tools that can allow you to deploy infrastructure as code :
● Terraform
● CloudFormation 
● Heat 
● Ansible 
● SaltStack 
● Chef, Puppet and others

- Categories of Tools are widely divided into two major categories

![](../../Jenkins/Image%20Resources/Screenshot%202024-12-28%20131046.png)

# Configuration Management 

- Configuration Management tools are primarily used to maintain desired configuration of systems (inside servers) 
- Example: ALL servers should have Antivirus installed with version 10.0.2

![](../../Jenkins/Image%20Resources/Screenshot%202024-12-28%20131055.png)

# Infrastructure Orchestration 

- Infrastructure Orchestration is primarily used to create and manage infrastructure environments.
- Example: Create 3 Servers with 4 GB RAM, 2 vCPUs. Each server should have firewall rule to allow SSH connection from Office IPs.

![](../../Jenkins/Image%20Resources/Screenshot%202024-12-28%20131106.png)

# How to choose IAC Tool?

- Is your infrastructure going to be vendor specific in longer term ? Example AWS.
- Are you planning to have multi-cloud / hybrid cloud based infrastructure ?
- How well does it integrate with configuration management tools ?
- Price and Support 

# Use-Case 1 - Requirement of Organization 1

1. Organization is going to be based on AWS for next 25 years. 
2. Official support is required in-case if team face any issue related to IAC tool or code itself.
3. They want some kind of GUI interface that supports automatic code generation.

# Use-Case 2 - Requirement of Organization 2

1. Organization is based on Hybrid Solution. They use VMware for on-premise setup; AWS, Azure and GCP for Cloud.
2. Official support is required in-case if IAC tool has any issues.