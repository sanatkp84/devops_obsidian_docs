- The try statement allows you to define a block of code to be tested for errors while it is being executed.
- The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

```
try {
	console.log(a);
} catch(err) {
	console.log("variable doesn't exist");
	console.log(err); //print the error
}
```

