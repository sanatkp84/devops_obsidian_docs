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

const dataCopy = {...data, id: 123, country: "India"};

CONSOLE:

dataCopy;
{email: 'sanatkp00@gmail.com', password: 'abcd', id: 123, country: 'India'}
```

```
let arr = [1,3,4,5,6];
kvp_arr = {...arr};

CONSOLE:

kvp_arr;
> {0: 1, 1: 3, 2: 4, 3: 5, 4: 6}
```
- The array value will be assigned to value & the index will become the key.

# Rest

- Allows a a function to take an indefinite number of arguments and bundle them in an array.
- Opposite of Spread
```
function sum(...args) {
	return args.reduce ((sum, el) => sum+el);
}

CONSOLE:

sum(3,4,6,7,82,345,78);
> 525

# Here "args" used as an array to store the value.
```