


//hereafter
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const errorMsg = document.getElementById('errorMsg');

const quotes = [
  "Believe in yourself!",
  "Stay focused and never give up.",
  "Every day is a new beginning.",
  "Push harder than yesterday.",
  "Dream it. Do it."
];

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const text = taskInput.value.trim();
//dfl
const startTime = new Date();

  if (!text) {
    taskInput.classList.add('error');
    errorMsg.textContent = "Enter the task...";
    errorMsg.classList.add('show');

    setTimeout(() => {
      taskInput.classList.remove('error');
      errorMsg.classList.remove('show');
      errorMsg.textContent = "";
    }, 1500);
    return;
  }

  errorMsg.textContent = "";
  errorMsg.classList.remove('show');

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const li = document.createElement('li');

  const taskContainer = document.createElement('div');
  taskContainer.className = 'task-content';

  const mainText = document.createElement('span');
  mainText.textContent = text;

  const timestamp = document.createElement('small');
  timestamp.textContent = `${date} - ${time}`;
  timestamp.className = 'task-time';

  // mainText.addEventListener('click', () => {
  //   li.classList.toggle('completed');
  //   showPopup(text, `${date} - ${time}`);
  // });

  mainText.addEventListener('click', () => {
  li.classList.toggle('completed');

  const endTime = new Date();

  const startFormatted = startTime.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const endFormatted = endTime.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  showPopup(text, startFormatted, endFormatted);
});

  taskContainer.appendChild(mainText);
 // taskContainer.appendChild(timestamp);

  const del = document.createElement('button');
  del.textContent = '✖';
  del.className = 'delete-btn';
  del.addEventListener('click', () => {
    li.style.transform = 'translateX(100%)';
    li.style.opacity = '0';
    setTimeout(() => li.remove(), 300);
  });

  li.append(taskContainer, del);
  taskList.appendChild(li);
  taskInput.value = '';
}

function showPopup(text, dateTime) {
  const existing = document.querySelector('.popup-box');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.className = 'popup-box';

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  popup.innerHTML = `
    <h4>🕒 Task Info</h4>
    <p><strong>Task:</strong> ${text}</p>
    <p><strong>Started at:</strong> ${dateTime}</p>
    <p><em>"${randomQuote}"</em></p>
    <button class="close-btn">Close</button>
  `;

  document.body.appendChild(popup);

  document.querySelector('.close-btn').addEventListener('click', () => {
    popup.remove();
  });
}
//upadte
function showPopup(text, startTime, endTime) {
  const existing = document.querySelector('.popup-box');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.className = 'popup-box';

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  popup.innerHTML = `
    <h4>🕒 Task Info</h4>
    <p><strong>Task:</strong> ${text}</p>
    <p><strong>Started at:</strong> ${startTime}</p>
    <p><strong>Ended at:</strong> ${endTime}</p>
    <p><em>"${randomQuote}"</em></p>
    <button class="close-btn">Close</button>
  `;

  document.body.appendChild(popup);

  document.querySelector('.close-btn').addEventListener('click', () => {
    popup.remove();
  });
}


