![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 3

======================================================================

## What is Prototype and What is Prototype chain ?

**_Prototype:_**

🎯 In JavaScript, every object has an internal property called _Prototype_ . This property is a reference to another object, which is called the object's _prototype_ . _Prototype_ in JavaScript is a means of implementing _Inheritance_ . It is a mechanism where objects can inherit properties and methods from other objects. Every JavaScript object has a _prototype_ (except for the base object, Object.prototype, which is the top of the prototype chain).

**_Prototype Chain:_**

🎯 The _prototype chain_ is the series of links between objects and their _prototypes_ . It's how JavaScript implements inheritance. When you try to access a property or method on an object, JavaScript will:

- Look for the property on the object itself
- If not found, it looks on the object's _prototype_
- If still not found, it looks on the prototype's _prototype_
- This continues until it either finds the property or reaches an object with a null _prototype_ (usually Object.prototype)
