function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const buttons = document.createElement('div');
  buttons.className = 'task-buttons';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.onclick = () => {
    li.remove();
  };

  buttons.appendChild(completeBtn);
  buttons.appendChild(deleteBtn);
  li.appendChild(buttons);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
