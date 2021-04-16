//Selectors
const todoInput = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-add');
const todoList = document.querySelector('.todo-list ');

//Event Listeners
 
todoAdd.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodoItem);


//Functions

function addTodo(event){
    event.preventDefault();
   

    // create ToDo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    console.log(newTodo);

    //append newTodo in todoDiv
    todoDiv.appendChild(newTodo);
    
   //button complete
   const completebtn = document.createElement('button');
         completebtn.innerHTML = '<i class ="fas fa-check"> </i>';
          completebtn.classList.add("complete-btn");
       //append todoDiv
       todoDiv.appendChild(completebtn);   

    //button delete
    const deletebtn = document.createElement('button');
    deletebtn.innerHTML = '<i class ="fas fa-trash"> </i>';
     deletebtn.classList.add("delete-btn");
  //append todoDiv
   todoDiv.appendChild(deletebtn);  

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}


function deleteTodoItem(event){
    const item = event.target;
    
    //delete todo
    if(item.classList[0] === "delete-btn"){
       const todoItem = item.parentElement;
       todoItem.remove();
    }

    //check completed
    if(item.classList[0] === "complete-btn"){
        const toDoItem  = item.parentElement;
        toDoItem.classList.toggle('completed');
    }
}








