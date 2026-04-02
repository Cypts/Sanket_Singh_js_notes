# `this` in JavaScript

## What is `this`?

- `this` is a **keyword** in JavaScript
- It refers to the **execution context**
- The value of `this` is decided **at runtime**
- `this` depends on **how a function is called**, not where it is written

---

## `this` is NOT

- ❌ Not always the current object
- ❌ Not fixed
- ❌ Not decided at compile time

---

## `this` in Different Situations

### 1. Global Scope

```js
console.log(this);

```

# `this` in Java – Complete Notes

## Is `this` bound to the object in Java?

**Yes — in Java, `this` *is* bound to the object** ✅  
The important point is **how and how strongly** it is bound.

---

## `this` in Java (Exact Truth)

- `this` is **always bound to the current object**
- Binding happens **at object creation time**
- `this` **never changes**
- `this` is **implicitly passed** to all instance methods
- `this` **cannot be reassigned**
- `this` **cannot be `null`**
- Every instance method effectively runs like:
  ```java
  obj.method();  // obj is passed as `this`
## Java vs JavaScript (Final Clarity)

| Aspect | Java | JavaScript |
|------|------|-----------|
| Bound to object | ✅ Yes | ❌ Not always |
| When bound | Compile time | Runtime |
| Can change `this` | ❌ No | ✅ Yes |
| Depends on call style | ❌ No | ✅ Yes |
| Safe & predictable | ✅ Always | ❌ Sometimes |
