const tasks = [
];

const list = document.getElementById('tasks');
const input = document.getElementById('task');
const form = document.getElementById('control');

form.addEventListener('submit', addTask);

function addTask(event) {
  // Do not submit the form to a server.
  event.preventDefault();

  const task = { text: input.value, checked: false };
  tasks.unshift(task);
  input.value = "";
  input.focus();
  redrawList();
}

function todoWasChecked(event) {
  const index = event.target.id;
  tasks[index].checked = !tasks[index].checked;

  redrawList();


}

function redrawList() {
  // Remove all the <li>s inside the <ul>.
  list.innerHTML = '';

  // Create an <li> for each task in the tasks.
  for (let task of tasks) {
    const listElement = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    span.innerText = task.text;
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', tasks.indexOf(task));
    checkbox.addEventListener('click', todoWasChecked );

    if (task.checked) {
      checkbox.setAttribute('checked', true);
      span.style.textDecoration = 'line-through';
    }

    // Append the <li> to the <ul>.
    listElement.appendChild(checkbox);
    listElement.appendChild(span);
    list.appendChild(listElement);

  }
  counter();
}

function counter() {
  let counter = 0;
  for (let task of tasks) {
    if (task.checked){
      counter++;
    }
  }
  let text = counter + "/" + tasks.length + " Completed";
  document.getElementById("counter").innerHTML = text;
}

// Populate the <ul> when the page loads for the first time.
redrawList();
