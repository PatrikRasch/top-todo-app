import { projects } from "./projects.js";
import { addTaskDom } from "./addTaskDom.js";
export function addTask() {
  const addTask = document.querySelector(".addTask");
  const tasks = document.querySelector(".tasks");
  const task = document.querySelector(".task");

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
      let child = children[i];
      child.setAttribute("id", i);
    }
  }

  addTask.addEventListener("click", () => {
    addTodo();

    setId();
  });

  function addTodo() {
    const newTask = createTask(Date.now(), false);
    projects.push(newTask);
    addTaskDom();
    updateTask();
  }

  function updateTask(newTask) {
    task.addEventListener("submit", (e) => {
      e.preventDefault();
      newTask.title = taskText.value;
    });
  }

  //     tasks.removeChild(taskBox);
  //     setId();
  //     projects.splice(taskBox.id, 1);
}
