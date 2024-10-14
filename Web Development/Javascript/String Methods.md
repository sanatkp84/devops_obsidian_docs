- Methods - actions that can be performed on objects
- Format :
```
stringName.method()
```
- For example `console.log()` prints something on screen.
- We use methods to do some work like print, alert and giving prompt.
-----------------------------
### Use of trim()
- trims whitespaces from both ends of string and return a new one.
```
> let msg = "  Hello  ";
> msg.trim();

Output : "Hello"
```
- NOTE : It will not remove the middle spaces of that string.
#### Example:
- In password we generally don't use any spaces, so in this case we can use trim method
```
let password = prompt("set your password");
let newPass = console.log(password.trim());
console.log("newPass");

Output: It will take only the string without whitespaces
```
---------------
### Strings are Immutable

- No changes can be made to string.
- whenever we will try to change the string, a new one will be created  and old one remains same.
-------------
### Methods for Case Change (Upper & Lower Case)
```
let str = "Sanat Panda";
str.toUpperCase();           // "SANAT PANDA"
str.toLowerCase();           // "sanat panda"
```
------------
### String Method with Arguments
- Format : `stringName.method(arg)`
```
let name = "sanatpanda";
name.indexOf("p");        //5
name.indexOf("nat");      //2 --> returns the first index of the word
name.indexOf("l");        //-1 (not found)
```
-----------
### Method Chaining

- In method chaining we can apply multiple methods on one string in *ONE LINE*
```
let newMsg = msg.trim().toUpperCase();
console.log("newMsg");         
```
----------
### Slice Method

```
let str = "Ilovecoding"
str.slice(5);        //coding
str.slice(1,4);      //lov
str.slice(-2);     //It will assume that(string.length-1), which is 11-2=9 //g
```
---------
### Replace Method

```
let str = "Ilovecoding"
str.replace("love","do");        //Idocoding
str.slice('o','x');              //Ilxvecoding
```

### Repeat Method

```
let str = "Ilovecoding"
str.repeat(2);        //IlovecodingIlovecoding
```