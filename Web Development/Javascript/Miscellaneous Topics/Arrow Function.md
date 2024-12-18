```
const sum = (a,b) => {
	console.log(a+b);
}
```

### Implicit Return
- If it returns a single value or a particular value
```
const mul = (a,b) => (
	a * b
);
```

### Set TimeOut Function
```
console.log("Hii There!!!");

setTimeout( () => {
    console.log("Apna college");
}, 4000);

console.log("Welcome to");
```
- After 4 seconds "Apna college" will be printed.
- Used for api calls & requests or responses.

### Set Interval
```
setInterval( () => {
	console.log("Sanat Kumar");
}, 2000);
```
- It will print "Sanat Kumar" after every 2 seconds.
##### How to stop it?

- Create an id for each setInterval
```
let id = setInterval( () => {
	console.log("Sanat Kumar");
}, 2000);

console.log(id);


let id2 = setInterval( () => {
	console.log("Hello Earth");
}, 3000);

console.log(id2);
```

- To stop it use `clearInterval(id);`
- Then it will stop printing "Sanat Kumar" but it will keep printing "Hello Earth".