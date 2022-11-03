import { updateColour } from "./updateColour";
import { taskSubmit } from "./taskSubmit";
import { taskDelete } from "./taskDelete";
import { findElement } from "./findElement";
import { addTaskDom } from "./addTaskDom";

export const showTasks = (arrayItem, taskCheckClicked, taskArray, tasks) => {
  const addTaskDomReturn = addTaskDom();
  const taskBox = addTaskDomReturn[0];
  const taskCheck = addTaskDomReturn[1];
  const task = addTaskDomReturn[2];
  const colour = addTaskDomReturn[3];
  const deleteTask = addTaskDomReturn[4];
  const taskText = addTaskDomReturn[5];

  taskText.value = arrayItem.title;
  if (arrayItem.done === true) {
    taskCheck.classList.add("checked");
    taskBox.classList.add("opacity");
  }
  taskCheck.addEventListener("click", (e) => {
    taskCheckClicked(taskCheck, taskBox, taskArray);
  });

  taskText.focus();

  // Set taskBox DOM element id to match its corresponding taskArray id.
  taskBox.setAttribute("id", arrayItem.id);
  // Set taskBox DOM element background colour to match its corresponding taskArray colour.
  taskBox.style.backgroundColor = arrayItem.colour;
  // Listen for colour updates
  colour.addEventListener("input", (e) => {
    updateColour(colour, taskBox, taskArray);
  });

  // Updates the task's title in the array.
  task.addEventListener("submit", (e) => {
    e.preventDefault();
    taskSubmit(e, taskArray, taskBox, taskText, tasks);
  });

  // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
  deleteTask.addEventListener("click", (e) => {
    taskDelete(taskArray, taskBox, tasks);
  });

  task.addEventListener("keydown", (e) => {
    findElement(taskArray, taskBox).title = taskText.value;
  });
};
