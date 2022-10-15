import { projects } from "./projects.js";
import { addTaskDom } from "./addTaskDom.js";
import { dom } from "./dom.js";

export function addTask() {
  const submitProject = (projectForm, projectInput) => {
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      projectInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          if (projectForm.nextElementSibling === null) {
            projectOptions.firstElementChild.querySelector("input").focus();
            return;
          }
          const nextInput = projectForm.nextElementSibling;
          nextInput.querySelector("input").focus();
        }
        if (e.key === "Escape") {
          projectInput.blur();
        }
      });
    });
  };

  //   const taskBox = document.querySelector(".taskBox");
  //   const tasks = document.querySelector(".tasks");
  //   const task = document.querySelector(".task");

  const lists = document.querySelector("[data-lists]");
  const input = document.querySelector("[data-input]");

  const contentDiv = document.querySelector("#content");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  contentDiv.appendChild(wrapper);

  const nav = document.createElement("div");
  nav.classList.add("nav");
  wrapper.appendChild(nav);

  const calendar = document.createElement("div");
  calendar.classList.add("calendar");
  nav.appendChild(calendar);

  const calendarHeader = document.createElement("div");
  calendarHeader.classList.add("calendarHeader");
  calendar.appendChild(calendarHeader);

  const calendarHeaderTitle = document.createElement("div");
  calendarHeaderTitle.classList.add("calendarHeaderTitle");
  calendarHeaderTitle.textContent = "Plan";
  calendarHeader.appendChild(calendarHeaderTitle);

  const contentSeparator = document.createElement("div");
  contentSeparator.classList.add("contentSeparator");
  calendarHeader.appendChild(contentSeparator);

  const calendarOptions = document.createElement("div");
  calendarOptions.classList.add("calendarOptions");
  calendar.appendChild(calendarOptions);

  const calendarToday = document.createElement("div");
  calendarToday.classList.add("calendarToday");
  calendarToday.textContent = "Today";
  calendarOptions.appendChild(calendarToday);

  const calendarWeek = document.createElement("div");
  calendarWeek.classList.add("calendarWeek");
  calendarWeek.textContent = "This Week";
  calendarOptions.appendChild(calendarWeek);

  const calendarTitle = document.createElement("div");
  calendarTitle.classList.add("calendarTitle");
  calendarTitle.textContent = "Calendar";
  calendarOptions.appendChild(calendarTitle);

  const projects = document.createElement("div");
  projects.classList.add("projects");
  nav.appendChild(projects);

  const projectsHeader = document.createElement("div");
  projectsHeader.classList.add("projectsHeader");
  projects.appendChild(projectsHeader);

  const projectsTopLine = document.createElement("div");
  projectsTopLine.classList.add("projectsTopLine");
  projectsHeader.appendChild(projectsTopLine);

  const projectsTitle = document.createElement("div");
  projectsTitle.classList.add("projectsTitle");
  projectsTitle.textContent = "Projects";
  projectsTopLine.appendChild(projectsTitle);

  const editProjects = document.createElement("div");
  editProjects.classList.add("editProjects");
  editProjects.textContent = "Edit";
  projectsTopLine.appendChild(editProjects);

  const contentSeparator2 = document.createElement("div");
  contentSeparator2.classList.add("contentSeparator");
  projectsHeader.appendChild(contentSeparator2);

  const addProject = document.createElement("div");
  addProject.classList.add("addProject");
  addProject.textContent = "+ Add Project";
  projectsHeader.appendChild(addProject);

  const projectOptions = document.createElement("div");
  projectOptions.classList.add("projectOptions");
  projects.appendChild(projectOptions);

  const projectForm = document.createElement("form");
  projectForm.classList.add("projectForm");
  projectOptions.appendChild(projectForm);

  const projectInput = document.createElement("input");
  projectInput.classList.add("projectInput");
  projectInput.setAttribute("placeholder", "Project name");
  projectForm.appendChild(projectInput);

  const content = document.createElement("div");
  content.classList.add("content");
  wrapper.appendChild(content);

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  const headerTitleWrapper = document.createElement("div");
  headerTitleWrapper.classList.add("headerTitleWrapper");
  header.appendChild(headerTitleWrapper);

  const headerTitleForm = document.createElement("form");
  headerTitleForm.classList.add("headerTitleForm");
  headerTitleWrapper.appendChild(headerTitleForm);

  const headerTitle = document.createElement("input");
  headerTitle.classList.add("headerTitle");
  headerTitle.setAttribute("placeholder", "Header Title");
  headerTitleForm.appendChild(headerTitle);

  const headerTitleEdit = document.createElement("div");
  headerTitleEdit.classList.add("headerTitleEdit");
  headerTitleEdit.textContent = "Edit";
  headerTitleWrapper.appendChild(headerTitleEdit);

  const headerDescription = document.createElement("div");
  headerDescription.classList.add("headerDescription");
  headerDescription.textContent =
    "Header Description which describes our project in great detail.";
  header.appendChild(headerDescription);

  const contentSeparator3 = document.createElement("div");
  contentSeparator3.classList.add("contentSeparator");
  content.appendChild(contentSeparator3);

  const addTask = document.createElement("div");
  addTask.classList.add("addTask");
  addTask.textContent = "+ Add Task";
  content.appendChild(addTask);

  const tasks = document.createElement("div");
  tasks.classList.add("tasks");
  tasks.dataset.lists;
  content.appendChild(tasks);

  submitProject(projectForm, projectInput);
  addProject.addEventListener("click", (e) => {
    const projectForm = document.createElement("form");
    projectForm.classList.add("projectForm");
    projectOptions.appendChild(projectForm);

    const projectInput = document.createElement("input");
    projectInput.classList.add("projectInput");
    projectInput.setAttribute("placeholder", "Project name");
    projectForm.appendChild(projectInput);
    projectInput.focus();

    submitProject(projectForm, projectInput);
  });

  headerTitleEdit.addEventListener("click", (e) => {
    headerTitle.removeAttribute("disabled", "");
    headerTitle.select();
  });

  headerTitleForm.addEventListener("submit", (e) => {
    e.preventDefault();
    headerTitle.blur();
    headerTitle.setAttribute("disabled", "");
  });

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
    const colour = document.createElement("input");
    colour.setAttribute("type", "color");
    colour.classList.add("colour");
    const deleteTask = document.createElement("img");
    deleteTask.src = "../dist/xIcon.png";
    deleteTask.classList.add("deleteTask");
    taskText.setAttribute("placeholder", "What's your task?");
    taskBox.appendChild(task);
    taskBox.appendChild(colour);
    taskBox.appendChild(deleteTask);
    task.appendChild(taskText);
    submitProject(projectForm, projectInput);
    function setId() {
      let children = tasks.children;
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.setAttribute("id", i);
      }
    }
    setId();
    let id = taskArray.length;
    const createTask = new CreateTask(id, taskText.value, false);
    taskArray = [...taskArray, createTask];

    taskCheck.addEventListener("click", (e) => {
      if (taskCheck.classList.contains("checked")) {
        taskCheck.classList.remove("checked");
        taskBox.classList.remove("opacity");
        taskArray[taskBox.id].done = false;
      } else {
        taskCheck.classList.add("checked");
        taskBox.classList.add("opacity");
        taskArray[taskBox.id].done = true;
      }
      console.table(taskArray);
    });
    colour.style.backgroundColor = colour.value;
    // taskBox.style.backgroundColor = colour.value;
    colour.addEventListener("input", (e) => {
      taskBox.style.backgroundColor = colour.value;
    });

    // Updates the task's properties in the array.
    task.addEventListener("submit", (e) => {
      e.preventDefault();
      taskText.blur();
      //   Sets/updates the title to the array item.
      //   Bit unsure how this works since <id = taskArray.length>, but it does work.
      taskArray[id].title = taskText.value;

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
    constructor(id, title, done) {
      this.id = id;
      this.title = title;
      this.done = done;
    }
  }
}
