export function addTaskDom() {
  const tasks = document.querySelector(".tasks");

  const taskBox = document.createElement("div");
  taskBox.classList.add("taskBox");
  tasks.appendChild(taskBox);

  const taskCheck = document.createElement("div");
  taskCheck.classList.add("taskCheck");
  taskBox.appendChild(taskCheck);

  const task = document.createElement("form");

  task.setAttribute("type", "text");
  task.setAttribute("method", "post");
  task.setAttribute("name", "taskForm");
  task.dataset.form;
  task.classList.add("task");

  const taskText = document.createElement("input");
  taskText.dataset.input;

  const xIcon = document.createElement("img");
  xIcon.src = "../dist/xIcon.png";
  xIcon.classList.add("deleteTask");

  taskText.setAttribute("placeholder", "What's your task?");

  taskBox.appendChild(task);
  taskBox.appendChild(xIcon);
  task.appendChild(taskText);
}
