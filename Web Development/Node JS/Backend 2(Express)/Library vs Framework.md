#### Library : Alibrary is a collection of pre-written code that can be used to perform specific tasks. || eg - axios

#### Framework : A framework is a set of pre-written code that provides a structure for developing software applications. || eg - expresss

# Express

- A node.js web application framework that helps us to make web applications.
- It is used for server side programmig.
# Getting started with Express

```
const express = require("express");
const app = express();
console.dir(app);

let port = 3000;

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
});

app.use((req,res) => {
    console.log("Request Received");
});
```
- ### Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

# Sending a Response

- when the request comes, it is a text based "http" request but EXPRESS convert the text based request into a object. (Parsing of request)
- Suppose someone has made the server in other langauges like python, then in that case the JS can understand it.

# Routing

- It is the process of selectng a path for traffic in a network or between or across multiple networks.
```
app.get("/search", (req,res)=>{
	res.send("You contacted search path");
});
```

# Nodemon

- To automatically restart server with code changes
- 