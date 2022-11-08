import { updateColour } from "./updateColour";
import { taskSubmit } from "./taskSubmit";
import { taskDelete } from "./taskDelete";
import { findElement } from "./findElement";
import { addTaskDom } from "./addTaskDom";
import { addTaskDomCalendar } from "./addTaskDomCalendar";

export const showTasks = (arrayItem, taskCheckClicked, targetArray, tasks, setAddTask) => {
  if (setAddTask === true) {
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
      taskCheckClicked(taskCheck, taskBox, targetArray);
    });

    taskText.focus();

    // Set taskBox DOM element id to match its corresponding taskArray id.
    taskBox.setAttribute("id", arrayItem.id);
    // Set taskBox DOM element background colour to match its corresponding taskArray colour.
    taskBox.style.backgroundColor = arrayItem.colour;
    // Listen for colour updates
    colour.addEventListener("input", (e) => {
      updateColour(colour, taskBox, targetArray);
    });

    // Updates the task's title in the array.
    task.addEventListener("submit", (e) => {
      e.preventDefault();
      taskSubmit(e, targetArray, taskBox, taskText, tasks);
    });

    task.addEventListener("keydown", (e) => {
      findElement(targetArray, taskBox).title = taskText.value;
    });
    // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
    deleteTask.addEventListener("click", (e) => {
      taskDelete(targetArray, taskBox, tasks);
    });
  }

  if (setAddTask === false) {
    const addTaskDomCalendarReturn = addTaskDomCalendar();
    const taskBox = addTaskDomCalendarReturn[0];
    const taskCheck = addTaskDomCalendarReturn[1];
    const task = addTaskDomCalendarReturn[2];
    const dueForm = addTaskDomCalendarReturn[3];
    const dueInput = addTaskDomCalendarReturn[4];
    const colour = addTaskDomCalendarReturn[5];
    const deleteTask = addTaskDomCalendarReturn[6];
    const taskText = addTaskDomCalendarReturn[7];

    taskText.value = arrayItem.title;
    if (arrayItem.done === true) {
      taskCheck.classList.add("checked");
      taskBox.classList.add("opacity");
    }
    taskCheck.addEventListener("click", (e) => {
      taskCheckClicked(taskCheck, taskBox, targetArray);
    });

    taskText.focus();

    // Set taskBox DOM element id to match its corresponding taskArray id.
    taskBox.setAttribute("id", arrayItem.id);
    // Set taskBox DOM element background colour to match its corresponding taskArray colour.
    taskBox.style.backgroundColor = arrayItem.colour;
    // Sets the dueDate based on its corresponding dueArray dueDate
    dueInput.value = arrayItem.dueDate;

    // Listen for colour updates
    colour.addEventListener("input", (e) => {
      updateColour(colour, taskBox, targetArray);
    });

    // Updates the task's title in the array.
    task.addEventListener("submit", (e) => {
      e.preventDefault();
      taskSubmit(e, targetArray, taskBox, taskText, tasks);
    });

    task.addEventListener("keydown", (e) => {
      findElement(targetArray, taskBox).title = taskText.value;
    });
    // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
    deleteTask.addEventListener("click", (e) => {
      taskDelete(targetArray, taskBox, tasks);
    });
    dueForm.addEventListener("click", (e) => {
      dueInput.select();
      dueInput.addEventListener("keyup", (e) => {
        const clickedForm = e.currentTarget.parentElement;
        const clickedDate = clickedForm.parentElement;
        findElement(targetArray, clickedDate).dueDate = dueInput.value;
        if (e.key === "Enter") {
          dueInput.blur();
        }
      });
    });
  }
};
