const colors = ["green", "red", "rgba(133, 122, 200)", "#f1f025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  //get ran num between 0-3
  const randomNumer = getRandomNum();
  document.body.style.backgroundColor = colors[randomNumer];
  color.textContent = colors[randomNumer];
});

function getRandomNum(){
  return Math.floor(Math.random() * colors.length);
}
