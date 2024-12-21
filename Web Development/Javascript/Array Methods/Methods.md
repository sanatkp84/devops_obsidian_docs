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