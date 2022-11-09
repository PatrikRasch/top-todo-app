import xImage from "../dist/xIcon.png";

export const addTaskDom = () => {
  const tasks = document.querySelector(".tasks");

  const taskBox = document.createElement("div");
  taskBox.classList.add("taskBox");

  const taskCheck = document.createElement("div");
  taskCheck.classList.add("taskCheck");

  const task = document.createElement("form");
  task.setAttribute("type", "text");
  task.setAttribute("method", "post");
  task.setAttribute("name", "taskForm");
  task.dataset.form;
  task.classList.add("task");

  const taskText = document.createElement("input");
  taskText.dataset.input;

  const colour = document.createElement("input");
  colour.setAttribute("type", "color");
  colour.classList.add("colour");

  const deleteTask = document.createElement("img");
  deleteTask.src = xImage;
  deleteTask.classList.add("deleteTask");
  taskText.setAttribute("placeholder", "What's your task?");

  tasks.appendChild(taskBox);
  taskBox.appendChild(taskCheck);
  taskBox.appendChild(task);
  taskBox.appendChild(colour);
  taskBox.appendChild(deleteTask);
  task.appendChild(taskText);

  return [taskBox, taskCheck, task, colour, deleteTask, taskText];
};
