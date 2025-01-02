- Tracks the Function calls
```
function npxCoding() {
	console.log("inside npxCoding function");
	console.log("the creator is sanat");
}

function youTube() {
	console.log("calling youTube function");
	npxCoding();
}

console.log("calling youtube function");
youTube();
console.log("Task Completed");
```

# Break Points

- Used for debugging (Goto inspect > check console and sources)

# JS is Single Threaded

```
setTimeout(() => {
	console.log("npxcoding");
}, 2000);

setTimeout(() => {
	console.log("YouTube");
}, 2000);

console.loh("hello");
```

- You will think that if JS is single threaded then it will execute the code statements one by one like first wait for 2 sec then it will go for "npxcoding" and then "hello".
- But when you will actually execute it, it will first print the "hello" then it will print the "npxcoding" after 2 seconds.
- In JS it will not wait for any code, JS gives the waiting task to window browser and it continues executing rest of the code, when the browser will notify to JS that it's the time for execution of that particular code then it will execute that code.

# Callback Hell

```
h1= document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
	setTìmeout( () => {
	hl.style.color = color;
	if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor ("red", 1000, () => {
	changeColor ("orange", 1000, () => {
	 changeColor ("green", 1000, () => {
	  changeColor("yellow", 1000, () => {
	   changeColor ("blue", 1000);
	   });
	 });
   });
});

```

- The above code is an example of callback hell.
- *To prevent this we use "promises", "async" & "awake".

# Promises

- The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.