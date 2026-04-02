## Function keyword can't be used in memeber function of class
- inside class js expect **function declaration** not **function defination**
- ## In JavaScript:
    A class method is just a function stored inside the class’s prototype.

    So this:

    class Person {
    greet() {
        console.log("Hello");
    }
    }


    Internally behaves like:

    Person.prototype.greet = function () {
    console.log("Hello");
    };


    👉 **That’s why JS does not need the function keyword inside a class.**
-  ## Are class methods normal functions?

    Yes ✅

    const p = new Person("Ayush");
    p.greet();


   **But internally:**

    **They live in Person.prototype**

    **They are not hoisted**

    **They run in strict mode by default**



***In JavaScript, class methods are implicitly functions.
The class syntax is just syntactic sugar over prototype-based functions.
Therefore, writing the function keyword inside a class is unnecessary and invalid, because the JavaScript parser already treats class members as methods (functions).***


## Type of any class in java is ***Function***