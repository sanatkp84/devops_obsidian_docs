- "this" keyword refers to an object that is executing the current piece of code

```
const student = {
    name: "sanat",
    age: 21,
    eng: 80,
    math: 93,
    phy: 81,
    
    getAvg() {
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
    }
}

student.getAvg();               //84.66666
```
- Here the getAvg() can't access the parameters directly with in the object "student". It will show error. So to get access of these parameters with in objects we have to use this keyword.