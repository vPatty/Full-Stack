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



const obj1 = {
  name: 'Patrick',
  age: 25,
  func: function () {
    return 'Hello';
  },
  birthdate: '12/25/2025',
  hobbies: ['basketball', 'guitar', 'video games'],
  career: [
    {company: 'Amazon',
    role: 'CEO',
    salary: 25000}
  ]
};

console.log(obj1.career[0].role);



const vehicle = {
  wheels: 4,
  engine: function() {
    return 'Vroom!!'
  }
};

const car = Object.create(vehicle);

car.doors = 4;
car.engine = () => {return 'Whoosh!!!'};

console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.engine());

tesla.engine = () => {return 'Shoooooooooshhhh'};
console.log(tesla.engine());


const band = {
  vocals: 'Robert Plant',
  guitar: 'Jimmy Page',
  bass: 'John Paul Jones',
  drums: 'John Bonham'
};

delete band.drums;
console.log(band.hasOwnProperty('drums'))

console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band) {
  console.log(`On ${job}, it's ${band[job]}!`);
}

const band = {
  vocals: 'Robert Plant',
  guitar: 'Jimmy Page',
  bass: 'John Paul Jones',
  drums: 'John Bonham'
};
//destructuring

//assigning myVariable to guitar in bad which is Jimmy Page
const {guitar: myVariable, bass: myBass} = band;
const {vocals, guitar, bass, drums} = band;
console.log(myVariable); // outputs Jimmy Page
console.log(myBass);
console.log(vocals);

