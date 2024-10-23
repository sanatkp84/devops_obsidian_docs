- Object literals are used to store keyed collections & complex entities. 
- Property => (key, value) pair
- Objects are a collection of properties
##### Syntax
```
const student = {
	name: "sanat",
	age: "21",
	marks: 94.4,
	city: "Bhubaneswar",
	interest: ["youtube","insta","linkedin"]
};

# In case of "const" student, the "const" ensures that the student object will remain constant. But we can change the value of that student object. Here constant means the memory address of the student object will remain same. 
```
### Creation of object literal for a Thread/Tweet

```
const post = {
    username: "sanatkp_",
    content: "My first post",
    likes: 178,
    reposts: 9,
    tags: ["youtubeindia","elonmusk"]
};
```

- To access the values of object we can use dot ( . ) operator with they keyname `post.likes` otherwise we can use square bracket `post["reposts"]`
- If we want to use a variable for this then we have to use the square bracket because dot operator will not allow this. 
```
let share = "reposts";
post[share];
```
---------------------------------
### Add / Update the value of the Object Values

```
> student
<> 1. {name: 'sanat', age: '21', marks: 94.4, city: 'Bhubaneswar', interest: Array(3)}

> student.city = "pune";
<> 'pune'

> student
<> 1. {name: 'sanat', age: '21', marks: 94.4, city: 'pune', interest: Array(3)}

> student.gender = "Male";
<> 'Male'

> student
<> 1. {name: 'sanat', age: '21', marks: 94.4, city: 'pune', interest: Array(3), …}

1. age: "21"
2. city: "pune"
3. gender: "Male"
4. interest: (3) ['youtube', 'insta', 'linkedin']
5. marks: 94.4
6. name: "sanat"
7. [[Prototype]]: Object

> delete student.marks;
<> true

> student
<> {name: 'sanat', age: '21', city: 'pune', interest: Array(3), gender: 'Male'}
```
-------------
### Nested Objects

```
const classInfo = {
    aman: {
        grade: "A",
        City: "Mumbai"
    },
    sanat: {
        grade: "B",
        City: "Pune"
    },
    karan: {
        grade: "C",
        City: "Dubai"
    }
};

# To Access it
> classInfo
<> {aman: {…}, sanat: {…}, karan: {…}}
	aman: {grade: 'A', City: 'Mumbai'}
	karan: {grade: 'C', City: 'Dubai'}
	sanat: {grade: 'B', City: 'Pune'}
	[[Prototype]]: Object
	
> classInfo.sanat
<> {grade: 'B', City: 'Pune'}
```