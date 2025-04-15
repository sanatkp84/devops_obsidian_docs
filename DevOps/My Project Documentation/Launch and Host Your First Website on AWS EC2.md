## ✨ Objective:

To help beginners learn how to launch an EC2 instance, install Apache, and host a simple HTML website using AWS.

---

## 📚 Prerequisites:

- AWS account (Free Tier eligible)
    
- Basic understanding of cloud & terminal (optional)
    
- Any system with internet & browser
    

---

## ⚖️ Tools & Services Used:

- AWS EC2 (Ubuntu 22.04)
    
- IAM (for user and permissions)
    
- Apache Web Server
    
- Terminal / SSH
    

---

## ✍️ Step-by-Step Instructions:

### ✅ Step 1: Create an IAM User (Programmatic Access)

1. Go to AWS Console > IAM
    
2. Click **Users** > **Add user**
    
3. Enter username: `ec2-admin`
    
4. Select **Programmatic access** checkbox
    
5. Click **Next** and attach existing policies:
    
    - `AmazonEC2FullAccess`
        
    - `AmazonS3FullAccess` (optional for future use)
        
6. Click **Create user**
    
7. Save the **Access Key ID** and **Secret Access Key**
    

---

### ✅ Step 2: Launch an EC2 Instance

1. Go to AWS Console > EC2 > Instances > **Launch instance**
    
2. Name: `MyWebServer`
    
3. Select Amazon Machine Image: **Ubuntu Server 22.04 LTS (Free tier eligible)**
    
4. Instance type: `t2.micro`
    
5. Create a new key pair:
    
    - Name: `my-key`
        
    - Type: RSA, Format: `.pem`
        
6. Network Settings:
    
    - Create new security group
        
    - Allow **SSH (22)**, **HTTP (80)**, and **HTTPS (443)** from **Anywhere**
        
7. Click **Launch Instance**
    

---

### ✅ Step 3: Connect to EC2 via SSH

1. Go to **Instances > MyWebServer** > Click **Connect**
    
2. Choose **SSH client** tab
    
3. Copy the connection command:
    

```bash
ssh -i "my-key.pem" ubuntu@<your-ec2-public-ip>
```

4. Open terminal, go to .pem file directory:
    

```bash
chmod 400 my-key.pem
ssh -i "my-key.pem" ubuntu@<your-ec2-public-ip>
```

---

### ✅ Step 4: Install Apache Web Server

Run the following commands in your EC2 terminal:

```bash
sudo apt update
sudo apt install apache2 -y
```

Check if Apache is working:

- Open browser and paste your EC2 public IP
    
- You should see **Apache2 Ubuntu Default Page**
    

---

### ✅ Step 5: Upload Your Custom HTML Page

1. Create an HTML file locally:
    

```html
<!-- index.html -->
<html>
  <head><title>Welcome to My Website</title></head>
  <body><h1>Hello from AWS EC2!</h1></body>
</html>
```

2. Use `scp` to upload the file:
    

```bash
scp -i "my-key.pem" index.html ubuntu@<your-ec2-public-ip>:/tmp
```

3. Move file to Apache root directory:
    

```bash
sudo mv /tmp/index.html /var/www/html/
```

4. Refresh browser — Your custom webpage will be live!
    

---
