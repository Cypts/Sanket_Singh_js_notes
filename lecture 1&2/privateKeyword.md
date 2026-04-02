### Use of private


```JS
class temp{

    #var//here we declare variable private
    constructor(val){
        this.#var = val
    }

}

let obj = new temp("old")
obj.#var = "newVal"
```
- Here ` obj.#var = "newVal" ` should not update the value of var. As var is private but in some browser it does. 

**Reason:** this is beacuse of the accesibility of browser. Some browser support private but some do not. Therefore in some updates the value in some not

### IF we 
```js
class temp{

    #var//here we declare variable private
    constructor(val){
        this.#var = val
    }

}

let obj = new temp("old")
obj.var = "newVal" // it will create a new key namme var inside temp. this doesnt means thant #var val is updates
```

## Getter and Setter :
This helps to write validation logic inside the class show that it is access with proper logic and validation. It ensures no random values are allocated to the data member inside a class.

## When to use constructor and when to use getter and setter?
**What if we don't use constructor?**\
In case where we need to vaildate before creation of object. If want to make something in connection string and if I first create an object then connect then there is issue.\
**What if use only constructor?**\
If there are 20 parameters then need to memorize the order of each parameter. Hard to rember and code. ***One way to solve the problem is passing object as a parameter and then accecss data of the object.*** Eg: insted of 
```js
constructor(name, id , pass) 
```
we can do
```js
constructor(obj){
    this.#name = obj.name;
}
``` 

## get and set

```js
class newClass{
    #val
    constructor(val){
        this.#val= val;
    }
    get val(){
        return this.#val;
    }
    set val(val){
        this.#val = val
    }  
    display(){
        console.log(this.#val);
    } 
}

let obj = new obj(10);
obj.display(); // consoles 10;

obj.val = 20 ; // calls setter function set val() and update value

console.log(obj.val);  // calls getter function and display 20

```
## Function constructor
In previous versions of js there was no concept of class. Therefore function were used. Such as:
```js
function f(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.display = function () {
        console.log(a);
        console.log(b);
        console.log(c);
    };
}

let obj = new f(10, 20, 30);

console.log(obj);
```
The above funciton is called function constructor. It takes parameter and uses `this` to assign them.


**Here we are calling function constructor with new keyword. The new keyword does:**/
1. Create an empty object
2. Assign `this` to the object and call the constructor
3. Do prototyping
4. If constructor returns something return same from the constructor. If nothing is returned or non object values is returned then return  `this` from the consturctor.

*If function is called without new keyword then nothing will be alloocated.*

## Static members:
These are those members which are assosiated to class not object.
```js
class f{
    static x = 10;
    constructor(a){
        this.a = a;
    }
}
let obj = new f(20);
console.log(obj.x);
console.log(f.x);
```
here obj.x consoles undefined but f.x consoles 10. This is because 'x' is `static` , 'x' is associated to 'f' which is a class not to an object 'obj'. 