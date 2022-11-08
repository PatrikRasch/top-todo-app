import { findElement } from "./findElement";

export const taskDelete = (targetArray, taskBox, tasks) => {
  const taskIndex = targetArray.indexOf(findElement(targetArray, taskBox));
  // Removes the respective element in the array using the DOM elements' id.
  targetArray.splice(taskIndex, 1);
  //   Removes the entire task(box) from the DOM.
  tasks.removeChild(taskBox);
};
