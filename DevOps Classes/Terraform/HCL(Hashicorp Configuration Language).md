- we have to create resources through terraform to create and build any service of aws.

<block> <parameter> {
	arguments = 
}

- ex:
resource "local-file" "my-file" {
	file-name = "demo.txt"
	content = "hello dosto"
}
- terraform init ---> plan ----> Apply





