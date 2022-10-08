import { projects } from "./projects.js";

export function addTask() {
  const addTask = document.querySelector(".addTask");
  const tasks = document.querySelector(".tasks");
  const task = document.querySelector(".task");

  const setTaskId = () => {
    for (let i = 0; i < projects.length; i++) {
      task.setAttribute("id", i);
    }
  };

  const createTask = (id, checked, title, desc, colour) => {
    return {
      id: id,
      checked: checked,
      title: title,
      desc: desc,
      colour: colour,
    };
  };

  function setId() {
    let children = tasks.children;
    for (let i = 0; i < children.length; i++) {
      // let child = children[i];
      children[i].setAttribute("id", i);
    }
  }

  addTask.addEventListener("click", () => {
    todoAdd();
    setId();
  });
  function todoAdd() {
    const newTask = createTask(Date.now(), false);
    projects.push(newTask);

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
    task.classList.add("task");

    const taskText = document.createElement("input");

    const xIcon = document.createElement("img");
    xIcon.src = "../dist/xIcon.png";
    xIcon.classList.add("deleteTask");

    taskText.setAttribute("placeholder", "What's your task?");

    taskBox.appendChild(task);
    taskBox.appendChild(xIcon);
    task.appendChild(taskText);

    task.addEventListener("submit", (e) => {
      e.preventDefault();
      newTask.title = taskText.value;
      console.log(projects);
    });

    xIcon.addEventListener("click", (e) => {
      tasks.removeChild(taskBox);
      setId();
      projects.splice(taskBox.id, 1);
    });
  }
  // Loop over taskBox's and give all tasks an ID from 1 and upwards.
  // If ID X is clicked, splice number X in the array
}
