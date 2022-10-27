import { findElement } from "./findElement";
import { focusSelector } from "./focusSelector";

export const taskSubmit = (e, taskArray, taskBox, taskText, tasks) => {
  e.preventDefault();
  //   Sets/updates the title to the array item.
  findElement(taskArray, taskBox).title = taskText.value;
  if (tasks.children.length === 1) {
    return taskText.blur();
  }
  //   Moves onto the next input field whenever enter is clicked
  taskText.addEventListener("keyup", (e) => {
    focusSelector(e, tasks, taskText, taskBox);
  });
};
