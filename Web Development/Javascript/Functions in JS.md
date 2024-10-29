##### Syntax
```
function funcName(){
	//do something
}

function Calling (Using the function)
	funcName();
```

```
function printName() {
    console.log("Sanat");
    console.log("Jay Shri Krishna");
    console.log("Jay Siya Ram");
}

printName();
```

- We use functions to reduce the line of codes. No need to write the code multiple times, simply call the function name.
#### Roll a Dice
```
function rollDice() {
	let ran = Math.floor(Math.random()*6)+1;
	console.log(ran);
}

rollDice();
```

### Function with Arguments

- Values we pass to the function
```
function funcName(arg1,arg2) {
	//do something
}
```

```
function printInfo(name,age) {
	console.log(`${name}'s age is ${age}.`);
}
printInfo("sanat",21);
```
- Here the arguments act as variables which store values. In function the order is important because in above example javascript can't recognize that "sanat" is name's value and 21 is a number which is value of age.
- If we will pass a single value like `printInfo(21)` , then 21 will be taken as the value of name. The output will be `21's age is undefined.` If we will take `printInfo("sanat")` , then output will be `sanat's age is undefined.`
- 

