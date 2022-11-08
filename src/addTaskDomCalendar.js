import { format, startOfToday } from "date-fns";

export const addTaskDomCalendar = () => {
  const tasks = document.querySelector(".tasks");

  const taskBox = document.createElement("div");
  taskBox.classList.add("taskBoxDue");

  const taskCheck = document.createElement("div");
  taskCheck.classList.add("taskCheck");

  const task = document.createElement("form");
  task.setAttribute("type", "text");
  task.setAttribute("method", "post");
  task.setAttribute("name", "taskForm");
  task.dataset.form;
  task.classList.add("task");

  const taskText = document.createElement("input");
  const dueForm = document.createElement("form");
  const dueInput = document.createElement("input");
  dueInput.setAttribute("type", "date");
  dueInput.valueAsDate = new Date();

  dueForm.classList.add("due");
  dueInput.classList.add("dueInput");
  dueForm.appendChild(dueInput);

  const colour = document.createElement("input");
  colour.setAttribute("type", "color");
  colour.classList.add("colour");

  const deleteTask = document.createElement("img");
  deleteTask.src = "../dist/xIcon.png";
  deleteTask.classList.add("deleteTask");
  taskText.setAttribute("placeholder", "What's your task?");

  tasks.appendChild(taskBox);
  taskBox.appendChild(taskCheck);
  taskBox.appendChild(task);
  taskBox.appendChild(dueForm);
  taskBox.appendChild(colour);
  taskBox.appendChild(deleteTask);
  task.appendChild(taskText);

  return [taskBox, taskCheck, task, dueForm, dueInput, colour, deleteTask, taskText];
};
