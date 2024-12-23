- Giving a default value to the arguments
```
function sum(a,b=2){
	return sum(a+b);
}

CONSOLE :

sum(7,8);
15
sum(10);
12
```

# Spread

- Expand an iterable into multiple values.
```
Math.min(1,2,3,4,5,6);
> 1
let arr = [2,4,7,85,89,0,34];
Math.min(arr[0],arr[1]..... like this);
```

- Here it is not possible to pass each array element individually in that math function. So we need *spread.

```
let arr = [2,4,7,85,89,0,34];
Math.min(...arr);
> 0
```

- Here "*...arr*" pass the array elements separately.
- Spread can also be applied for strings.

### Spread with Object Literals

```
let data = {
	email: "sanatkp00@gmail.com",
	password: "abcd"
};

const dataCopy = {...data}
```