let count = 0;

localStorage.getItem('count');

function addCount(){
  count >= 25 ? alert('Count can not be higher than 25!!') : count++;
  localStorage.setItem('count', JSON.stringify(count));
  console.log(count);  
}

function subCount(quantity){
  count <= 0 ?  alert('Count can not be less than 0!!') : count--;
  console.log(count);
}

const prodcut = {
  name: 'manga',
  price: 1199
}

const jsObj = prodcut;
console.log(jsObj);

function convertToJSON(object){
  return console.log(JSON.stringify(object));
}



function convertToJSObj(){

}

const cart = {
  prodcut : {
    name: 'one-piece',
    price: 1199
  }
}


console.log(cart.prodcut.name);

convertToJSON(cart);



//console.log(JSON.stringify(prodcut));
//console.log(JSON.parse(JSON.stringify(prodcut)));
