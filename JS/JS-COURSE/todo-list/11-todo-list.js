const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'   
  }];


renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>

    <button class= "btn btn-delete" onclick= "
      todoList.splice(${i}, 1);
      renderTodoList();
    ">Delete</button> 
 
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



function addToArray(){
  const inputElement = document.querySelector('.input-val');
  const dateElement = document.querySelector('.date-val');
  const name = inputElement.value;
  const date = dateElement.value;

  todoList.push({
    name: name,
    dueDate: date
  });

  inputElement.value = '';
  renderTodoList();

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}