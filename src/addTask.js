import { projects } from "./projects.js";

export function addTask() {
  const addTask = document.querySelector(".addTask");
  const tasks = document.querySelector(".tasks");

  const createTask = (id, checked, title, desc, colour) => {
    return {
      id: id,
      checked: checked,
      title: title,
      desc: desc,
      colour: colour,
    };
  };

  addTask.addEventListener("click", (e) => {
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
    taskText.setAttribute("placeholder", "What's your task?");

    taskBox.appendChild(task);
    task.appendChild(taskText);

    // <input type="hidden" value={todo.id} name="todoId" />

    task.addEventListener("submit", (e) => {
      e.preventDefault();
      newTask.title = taskText.value;
      console.log(newTask);
      console.log(projects);
    });
  });
}
