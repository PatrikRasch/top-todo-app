import { findElement } from "./findElement";

const taskCheckClicked = (taskCheck, taskBox, taskArray) => {
  if (taskCheck.classList.contains("checked")) {
    taskCheck.classList.remove("checked");
    taskBox.classList.remove("opacity");
    findElement(taskArray, taskBox).done = false;
  } else {
    taskCheck.classList.add("checked");
    taskBox.classList.add("opacity");
    findElement(taskArray, taskBox).done = true;
  }
};

export const taskFunctionality = (taskCheck, colour, task, deleteTask, taskBox, taskArray, taskText) => {
  taskCheck.addEventListener("click", (e) => {
    taskCheckClicked(taskCheck, taskBox, taskArray);
  });

  colour.addEventListener("input", (e) => {
    updateColour(colour, taskBox, taskArray);
  });

  task.addEventListener("keydown", (e) => {
    findElement(taskArray, taskBox).title = taskText.value;
  });

  // Updates the task's properties in the array.
  task.addEventListener("submit", (e) => {
    taskSubmit(e, taskArray, taskBox, taskText, tasks);
  });

  // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
  deleteTask.addEventListener("click", (e) => {
    taskDelete(taskArray, taskBox, tasks);
  });
  console.table(taskArray);
};
