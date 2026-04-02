# Arrow function
***Arrow function have no binding such as this, arguments or super***

### What do you mean by not binding arguments?
* arguments can be passed to an arrow function like
```js 
a = (x) => console.log(x);
```
* in this eg the argument can be used for arrow function but
```js
a = (x) => console.log(arguments);
```
* this will not work b/c arguments are not binded to arrow funciton. But this will work for normal function
