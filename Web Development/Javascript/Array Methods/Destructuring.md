- Storing values of array into multiple variables
```
let names = ["sanat","samiran","suraj","saphal","peter","shyam","bhaskhar"]
// let winner = names[1];
// let runnerup = namae[3];

let [winner,unnerup,secondRunnerup, ...others] = names;

CONSOLE:

winner
> 'sanat'
secondRunnerup
> 'suraj'
others
> ['saphal', 'peter', 'shyam', 'bhaskhar']
```

- Here *...others* represents other names.

# DESTRUCTURING Objects

```
const student = {
	name: "karan";
	age: 14,
	class: 9,
	subjects: ["hindi","odia","english"],
	username: "karan@123",
	password: "xyz"
};

# suppose we want to find only username and password

let {username, password} = student;

# Otherwise we can store the value in a variable

let {username:user, password:secret} = student;
```