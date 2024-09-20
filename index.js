const tasklist = [];

function callone() {
  const taskinput = document.getElementById("task-input"); 
  const task = taskinput.value;

  if (task !== '') {
    tasklist.push(task);
    taskinput.value = ''; 
    updatetasklist();
  }
}

function updatetasklist() {
  const ul = document.getElementById("task-list");
  ul.innerHTML = '';

  tasklist.forEach((task, index) => {
    const listitem = document.createElement("li");
    listitem.textContent = `${index +1}. ${task}`;
    ul.appendChild(listitem);
  });
}

function calltwo(){

  tasklist.pop()

  updatetasklist()

}
