- Used to iterate a piece of code
```
# To Print 1 to 5 using For loop

for (let i=1; i<=5; i++){
	console.log(i);
}
```

- Print all odd Numbers (1 to 15)
```
for(let i=1; i<=15; i++){
    if(i%2!=0){
        console.log(i);
    }
}
```

- Print all even numbers (2 to 10)
```
for(let i=2; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}
```

- Multiplication Table
```
let n = prompt("enter the number you want to create multiplication table");

for(let i=1; i<=10; i++){
    console.log(i*n);
}
```
---------------------------------
- Nested for loop
```
for (let i=1; i<=3; i++){
	for (let j=1; j<=3; j++){
		console.log(j);
	}
}

Output:
1
2
3
1
2
3
1
2
3

Note:
1. First it will check the outer loop condition and if it is true, then it will go to the inner loop and will execute the inner loop completely. Then it will come out to the outer loop.
2. Again it will check the condition of outer loop, if it satisfies then it will go to the inner loop again, it will reinitialize the 'j' variable & will execute it completely.
```

- While Loop
```
let i=1;
while(i<=5){
	console.log(i);
	i++;
}

Output:
1
2
3
4
5
```

### Guess My Movie Game

```
const favmovie="kgf";

let guess = prompt("Guess my Favourite movie");

while((guess != favmovie) && (guess != "quit")){
    console.log("Wrong Answer! Please Guess Again");
    guess = prompt("Give Another Guess");
}

if(guess == favmovie){
    console.log("Congratulation! You guessed it right");
}else{
    console.log("Game Ended");
}
```
-------------------------
### Loops with Arrays

```
let fruits = ["mango","banana","apple","litchi","orange"];

for(let i=0; i<fruits.length; i++){
	console.log(i, fruits[i]);
}
```
- For even number fruits
```
let fruits = ["mango","banana","apple","litchi","orange"];

for(let i=0; i<fruits.length; i=i+2){
	console.log(i, fruits[i]);
}
```
- Reverse the array
```
let fruits = ["mango","banana","apple","litchi","orange"];

for(let i=fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
}
```
-----------
### Nested Loops with Nested Arrays

```
let heroes = [
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
]

for (let i=0; i<heroes.length; i++){
    console.log(i, heroes[i]);
    for(let j=0; j<heroes[i].length; j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

Output:
0 (3) ['ironman', 'spiderman', 'thor']
 j=0, ironman
 j=1, spiderman
 j=2, thor
 
 1 (3) ['superman', 'wonder woman', 'flash']
 j=0, superman
 j=1, wonder woman
 j=2, flash
```
-----------
### For of Loop

```
let fruits = ["mango","banana","apple","litchi","orange"];

for(fruit of fruits){
    console.log(fruit);
}
```

# ToDo App

```
let todo = [];          //Created empty array to store tasks

let request = prompt("Please Enter Your request");

while(true){
    if(request == "quit"){
        console.log("Quitting app");
        break;
    }
    
    if(request == "list"){
        console.log("________");
        for (let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("________");
        
    } else if(request == "add"){
        let task = prompt("Enter Your Pending Task");
        todo.push(task);
        console.log("task added");

    } else if(request == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");

    } else {
        console.log("wrong request");
    }

    request = prompt("Please Enter Your request");
}
```