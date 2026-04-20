function changeClick(){
  const buttonElement = document.querySelector('.not-toggled');

  if(!buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}
