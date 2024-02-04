```
mkdir terraform-aws
```

```
vim terraform.tf
```
- Inside the terraform.tf file copy the aws provider from official docs.

```
terraform init
```
- Here it will install all the required plugins according to the version.

### Now IAM Users & Access Keys, then aws configure command and provide the access keys and secret access keys in the terminal.

```
vim main.tf
```
- Provide below code inside the main.tf
```
provider "aws" {
	region = "us-east-1"
}
```
```
resouce "aws_s3_bucket" "demo-s3" {
	bucket = "guy-terra-bucket"
}
```

```
terraform plan
terraform apply
```

### How to Create an EC2 Instance with using Variables.tf

```
resouce "aws_instance" "demo-ec2" {
	ami = var.ec2-ubuntu-ami
	instance_type = "t2.micro"
	tags = {
		Name = "terra-auto-instance"
	}
}
```

```
vim variables.tf
```
```
variable "ec2-ubuntu-ami" {
	default = "(ami-id)"
}

variable "ec2-amazon-linux" {
	default = "(ami-id)"
}
```

- The above instance will not run because of no keypairs and security group. So that we need to create the instance with some different configuration.
### How to create VPC, SGs, Key Pairs

```
vim ec2_vpc.tf
```
```
resource "aws_key_pair" "guy-key" {
	key_name = "terra-key" 
	public_key = file("/home/ubuntu/.ssh/terra-key.pub")
}

resource "aws_instance" "my-vpc-instance" {
	key = aws_key_pair.guy-key.key_name
	ami = var.ec2-ubuntu-ami
	instance_type = "t2.micro"
	security_groups = [aws_security_group.allow_ssh.name]
	tags = {
		Name = "terra-auto-instance"
	}
	
}

resource "aws_default_vpc" "default_vpc" {
	
}

resource "aws_security_group" "allow_ssh" {
  name        = "allow_ssh"
  description = "Allow ssh inbound traffic"

  # using default VPC
  vpc_id      = aws_default_vpc.default_vpc.id
  ingress {
    description = "TLS from VPC"

    # we should allow incoming and outoging
    # TCP packets
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"

    # allow all traffic
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_ssh"
  }
}
```

### Create Docker Container

```
resouce "docker_img" "nginx-img" {
	name = "nginx:latest"
	keep_locally = false
}

resouce "docker_container" "nginx-ctr" {
	name = "my-nginx-container"
	image = docker_image.nginx-img.name

	ports {
	internal = 80
	external = 80
	}
}

```