- Linear collection of things
- No need to create multiple variables to store multiple data, Using array we can store multiple data in single variable.
- Syntax : `let Students = ["aman","sanat","yash","samiran"]`
- Real life example ( In INSTAGRAM for our following and followers list there will be an array of followers/following with username )
- Example:
```
let Students = ["aman","sanat","samiran"];
Students[2];         //samiran

# Creation of an array

let info = ["aman",25,6.1];         //Mixed array
info[0][0]                          // 'a'

# For empty array creation

let newArr = [];
```

- To find length of an array we can do `arrName.length`
-------------------
## Arrays are Mutable

```
let name = "rohit";
name[0] = 'm';
name           // rohit (because strings are mutable)

# But in case of array

let fruits = ["mango","apple","litchi"]
fruits[0] = "banana"
fruits         //["banana","apple","litchi"]
```
-----------
## Array Methods

- Push : add to end
- Unshift : add to start
- Pop : delete from end & returns it
- Shift : delete from start & returns it

```
let cars = ["audi","bmw","xuv"];
cars
> ['audi', 'bmw', 'xuv']
-------------------------------------
cars.push("toyota");
> 4
cars
> (4) ['audi', 'bmw', 'xuv', 'toyota']
--------------------------------------
cars.push("ferrari");
> 5
cars
> (5) ['audi', 'bmw', 'xuv', 'toyota', 'ferrari']
------------------------------------------
cars.pop();
> 'ferrari'
cars
> (4) ['audi', 'bmw', 'xuv', 'toyota']
---------------------------------------
cars.unshift("maruti");
> 5
cars
> (5) ['maruti', 'audi', 'bmw', 'xuv', 'toyota']
-------------------------------------------
cars.shift();
> 'maruti'
```

- indexOf : returns index of something
- includes : search for a value
- concat : merge 2 arrays
- reverse : reverse an array

```
# Concatenation

let pri = ["sanat","red","shyam"]
let sec = [45,"vast","course"]

pri
> (3) ['sanat', 'red', 'shyam']
sec
> (3) [45, 'vast', 'course']

pri.concat(sec)
> (6) ['sanat', 'red', 'shyam', 45, 'vast', 'course']
```

##### NOTE : Concat doesn't do changes in original array but reverse function do in original array

- slice : copies a portion of an array
- splice : removes/replaces/add elements in place

```
# Splice  (It changes the original array)
# Syntax : splice(start, deleteCount, item0....itemN)

let colors = ["red","yellow","blue","orange","pink","white"];

colors
> (6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']
colors.splice(4);
> (2) ['pink', 'white']
colors.splice(0,1);
> ['red']
colors
> (3) ['yellow', 'blue', 'orange']
colors.splice(0,1,"black","grey");
> ['yellow']
colors
> (4) ['black', 'grey', 'blue', 'orange']

```
