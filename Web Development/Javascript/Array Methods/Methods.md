### forEach
```
let arr = [1,2,3,4,5];

let print = function (el){
	console.log(el);
}
arr.forEach(print);
```
- In the above code it will print the elements one by one that means the function will run for each elements.

### Map
```
let num = [1,2,3,4];

let double = num.map((el)=>{
	return el * 2;
});
```
- Here the returned value will be stored in an array named "double".

### Filter
```
let nums = [1,2,3,4,5,6,7,8,10,12,15,16]
let ans = nums.filter((el) => {
	return el % 2 == 0;
});
```
- Here all the even numbers will be stored in "ans" array. because in filter method if the return will be true it will store the elements in the array, if it is false then it will be rejected.

### Every
- Returns true if every element of array gives true for some function. Else returns false.
```
[2,4,6].every((el) => el%2 == 0);
Output will be true

[2,4,6,3].every((el) => el%2 == 0);
Output will be false
```

### Some
- Returns true if some element of array gives true for some function. Else returns false.
### Reduce
- Reduces the array to a single value
- Syntax : *arr.reduce(reducer function with 2 variables for(accumulator,element));
```
[1,2,3,4].reduce( (res, el) => (res+el) );

Output : 10
```

### Find the Minimum Number in an array (Practice Q)

```
let nums = [10,30,20,40,5];

let min = nums.reduce( (min, el) => {
	if (min<el){
		return min;
	}else {
		retun el;
	}
});

console.log(min);
```



