```
ansible servers -m ping
```

```
ansible servers -a "free -h"
```

```
ansible servers -a "sudo apt update"
```

```
ansible prd -m ping
```

### Playbook / YML File

```
mkdir playbook
```

```
vim date_play.yml
```
```
name: Dates Playbook
hosts: servers
tasks:
  - name: Show Date
	command: date
  - name: Show Date again
	command: date
```

```
ansible-playbook date_play.yml
```

- It will show the output.... "-v = verbose"
```
ansible-playbook -v date_play.yml
```

### Deploy Static Web Page

```
name: This playbook will install nginx 
hosts: servers 
become: yes 
tasks: 
	- name: install nginx 
	  apt: 
		  name: nginx 
		  state: latest 
	- name: start nginx 
	  service: 
		  name: nginx 
		  state: started 
		  enabled: yes
	- name: Deploy web page
	  copy:
		  src: index.html
		  dest: /var/www/html
```
