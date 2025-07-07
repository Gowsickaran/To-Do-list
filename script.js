const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (!text) {
    taskInput.classList.add('error');
    setTimeout(() => taskInput.classList.remove('error'), 500);
    return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  span.addEventListener('click', () => li.classList.toggle('completed'));

  const del = document.createElement('button');
  del.textContent = '✖';
  del.addEventListener('click', () => {
    li.style.transform = 'translateX(100%)';
    li.style.opacity = '0';
    setTimeout(() => li.remove(), 300);
  });

  li.append(span, del);
  taskList.appendChild(li);
  taskInput.value = '';
}
