const names = ['jessica', 'patrick', 'nicole'];
const product = 
[
   {name: 'iphone', price: 1099.99, releaseDate: '12/25/2026'},
   {name: 'basketball', price: 25.99, releaseDate: '1/4/2027'}
];

function addToArray() {
    const nameElement = document.querySelector('.name');
    const name = nameElement.value;

    names.push(name);

    nameElement.value = '';

    console.log(names);
}

console.log(product);

names.push('lebron');

names.pop();

console.log(names);

