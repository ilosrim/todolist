const taskList = document.getElementById('task-list');
const checkList = document.getElementById('checked-list');

eventListeners();

function eventListeners() {
  document.querySelector('#form').addEventListener('submit', newTask);
  taskList.addEventListener('click', completeTask);
  taskList.addEventListener('click', removeTask);
  document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

function newTask(e) {
  e.preventDefault();
  const task = document.getElementById('addtask').value;
  const checkBtn = document.createElement('a');
  checkBtn.classList = 'checked-task';
  checkBtn.textContent = '✓';
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-task';
  removeBtn.textContent = 'X';
  const li = document.createElement('li');
  li.textContent = task;
  li.appendChild(removeBtn);
  li.appendChild(checkBtn);
  taskList.appendChild(li);
  addTaskLocalStorage(task);
  alert('Task added!');
  this.reset();
}


function removeTask(e) {
  if (e.target.classList.contains('remove-task')) {
    e.target.parentElement.remove();
  }

}

function completeTask(e) {
  if (e.target.classList.contains('checked-task')) {
    let taskText = e.target.parentElement.textContent;
    let taskDone = taskText.substring(0, taskText.length - 2);
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-task';
    removeBtn.textContent = 'X';
    const li = document.createElement('li');
    li.textContent = taskDone;
    li.appendChild(removeBtn);
    checkList.appendChild(li);
    checkList.classList ='complete-task';
    e.target.parentElement.remove();
  }
}