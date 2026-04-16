What is an object?
- An object groups multiple values together


Syntax const name = {
  name: '',
  name: ''
};


Why do we use objects?
- It makes our code more organized



JSON Built in Object
JavaScript Object Notation

Why use JSON?
- When we send data between computers
- When we sotre data


Convert javascript objects into JSON by using 

JSON.stringify(name);

TO convert JSON to JavaScript Object you use 
JSON.parse(name);



Next built-in Object
localStorage
- used to save values more permanently

to use 
localStorage.setItem('message', 'hello');

to retrieve the value in the localStorage
localStorage.getItem('message'); -- This will print out hello

localStorage ONLY supports Strings!!

null vs undefined
null = intentionally want something to be empty



Objects are references