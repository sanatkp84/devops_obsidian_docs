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
------------
##### Example to create a multiplication table using Function
```
function mult(n) {
    for(let i=1; i<=10; i++){
        console.log(`${n} ${i}s are : ${n*i}`);
    }
}
mult(23);
```
------------
# Return

- return keyword is used to return some value from the function.
```
function sum(a,b){
	return a+b;
}
let s = sum(3,4);
console.log(s);

# After writing return statement, the remaining code after "return" statement inside the function will not be executed.
```
--------------------------

# Scope

- Scope determines the accessibility of variables, objects & functions from different parts of the code.
1. Function
2. Block
3. Lexical
4. Global
###### Function : Variables defined inside a function are not accessible(visible) from outside the function.
```
let sum = 54;          //Global Scope (sum variable)

function calSum(a,b){
	let sum = a+b;     //Function Scope (Sum variable)
	console.log(sum);
}
calSum(1,2);
```

- We can't use the function scope sum outside the function. But if the function hasn't its own sum variable, then it can use the global sum variable and returns the value of global sum variable
- WE CAN CHECK IT BY COMMENTING OUT `let sum = a+b;` STATEMENT FROM ABOVE CODE.
- 

