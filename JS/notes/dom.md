DOM
- another built in object called document object

The document object represents / models the webpage

document.title - gets or changes the title of the webpage

document.body - gets the body of the html

document.body.innerHTML - gets the html code inside the body, you can modify it entirely

document.querySelector()
- Lets use get ANY ELEMENT from the page and put it inside JavaScript




What is the DOM?
- Document Object Model
- Use it to manipulate content, style and structure
- Is one of the most unique and useful tools of JavaScript 

How to select nodes/elements in the DOM tree

//getElementbyId()

const title = document.getElementbyId('main-heading');
console.log(title);



//getElementbyClassName()
const listItems = document.getElementbyClassName('list-items');
console.log(listItems);


