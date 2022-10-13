import { projects } from "./projects.js";
import { addTaskDom } from "./addTaskDom.js";
import { dom } from "./dom.js";

export function addTask2() {
  const addTask = document.querySelector(".addTask");
  const taskBox = document.querySelector(".taskBox");
  //   const tasks = document.querySelector(".tasks");
  //   const task = document.querySelector(".task");

  const lists = document.querySelector("[data-lists]");
  const input = document.querySelector("[data-input]");

  let taskArray = [];

  addTask.addEventListener("click", (e) => {
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
    const deleteTask = document.createElement("img");
    deleteTask.src = "../dist/xIcon.png";
    deleteTask.classList.add("deleteTask");
    taskText.setAttribute("placeholder", "What's your task?");
    taskBox.appendChild(task);
    taskBox.appendChild(deleteTask);
    task.appendChild(taskText);

    function setId() {
      let children = tasks.children;
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.setAttribute("id", i);
      }
    }
    setId();
    let id = taskArray.length;
    const createTask = new CreateTask(id, taskText.value);
    taskArray = [...taskArray, createTask];

    // Updates the task's properties in the array.
    task.addEventListener("submit", (e) => {
      e.preventDefault();
      //   Sets/updates the title to the array item.
      //   Bit unsure how this works since <id = taskArray.length>, but it does work.
      taskArray[id].title = taskText.value;
      console.table(taskArray);

      //   Moves onto the next input field whenever enter is clicked
      taskText.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          // Checks if selection is at the final element and goes back to the first taskBox input field.
          if (taskBox.nextElementSibling === null) {
            tasks.firstElementChild.querySelector("input").focus();
            return;
          }
          // Goes to the next taskBox element.
          const nextBox = taskBox.nextElementSibling;
          // Goes to the next taskBox children element and chooses the form child.
          const nextBoxChildren = nextBox.children[1];
          //   Query selects the input element of the form and focuses it.
          nextBoxChildren.querySelector("input").focus();
        }
      });
    });

    // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
    deleteTask.addEventListener("click", (e) => {
      // Removes the respective element in the array using the DOM elements' id.
      taskArray.splice(taskBox.id, 1);
      //   Reassigns id's to all array elements to keep it sequential.
      taskArray.forEach((element, index) => (element.id = index));
      //   Removes the entire task(box) from the DOM.
      tasks.removeChild(taskBox);
      //   Sets new sequential ID's for all DOM elements.
      setId();
    });
  });

  class CreateTask {
    constructor(id, title) {
      this.id = id;
      this.title = title;
    }
  }

  // Display the tasks in the DOM.
  //   class UI {
  //     static displayData() {
  //       let displayData = todoArr.map((item) => {
  //         return `
  //             `;
  //       });
  //     }
  //   }

  // const createTask = (id, checked, title, desc, colour) => {
  //   return {
  //     id: id,
  //     checked: checked,
  //     title: title,
  //     desc: desc,
  //     colour: colour,
  //   };
  // };
}
