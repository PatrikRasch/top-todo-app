import { findElement } from "./findElement";

export const taskDelete = (taskArray, taskBox, tasks) => {
  const taskIndex = taskArray.indexOf(findElement(taskArray, taskBox));
  // Removes the respective element in the array using the DOM elements' id.
  taskArray.splice(taskIndex, 1);
  //   Removes the entire task(box) from the DOM.
  tasks.removeChild(taskBox);
};
