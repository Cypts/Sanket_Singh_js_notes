# Lexical scope

**Lexical:** anything related to word, expression etc.
**Scope:** Area.

**Lexical Scope:** area of defination of expression.

```js
    const myName = "Oluwatobi";
    function getName() {
    return myName;
    } 
```
Here the Lexical scope of myName is *global*. Since the myName function is defined globally. It is called inside the *getName()* but its lexical scope is still global.
