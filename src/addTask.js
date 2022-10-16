import { projects } from "./projects.js";
import { addTaskDom } from "./addTaskDom.js";
import { dom } from "./dom.js";
import { v4 as uuidv4 } from "uuid";
// Dynamically create arrays upon clicking "Add Project".
// Each new array has a stock name at first, e.g. "Array 3".
// When user updates title of project, the array name changes to the appropriate title.
// Each array must have an ID attribute, starting at 0 and counting upwards.
// Each array has its array items as the tasks inside the project.

export function addTask() {
  class CreateProject {
    constructor(id, title) {
      this.id = id;
      this.title = title;
    }
  }
  class CreateTask {
    constructor(id, title, done, projectId) {
      this.id = id;
      this.title = title;
      this.done = done;
      this.projectId = projectId;
    }
  }

  const submitProject = (projectForm, projectInput) => {
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Find the element in the array that has the same ID as the DOM project element.
      const findElement = projectArray.find(
        (element) => element.id === projectForm.id
      );
      // Set the array element title to the DOM input title value
      findElement.title = projectInput.value;

      projectInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          if (projectOptions.children.length === 1) {
            return projectInput.blur();
          }
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
    projectDelete.addEventListener("click", (e) => {
      projectOptions.removeChild(projectForm);
    });
    // if (projectInput.matches(":hover")) {
    //   console.log("lol");
    // }
  };

  function setId(parent) {
    let children = parent.children;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      child.setAttribute("id", uuidv4());
    }
  }

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
  // editProjects.textContent = "Edit";
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
  projectForm.setAttribute("id", uuidv4());
  projectOptions.appendChild(projectForm);

  const projectDelete = document.createElement("div");
  projectDelete.classList.add("projectDelete");
  projectDelete.textContent = "x";
  projectForm.appendChild(projectDelete);

  const projectInput = document.createElement("input");
  projectInput.classList.add("projectInput");
  projectInput.value = "Example Project";
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

  // let id = taskArray.length;

  // Declares array that holds all the projects.
  let projectArray = [];
  // Creates the initial example project from the CreateProject class.
  const createProject = new CreateProject(projectForm.id, projectInput.value);
  // Adds the first project to the project array.
  projectArray = [...projectArray, createProject];
  console.table(projectArray);

  addProject.addEventListener("click", (e) => {
    const projectForm = document.createElement("form");
    projectForm.classList.add("projectForm");
    projectOptions.appendChild(projectForm);

    // setId(projectOptions);
    projectForm.setAttribute("id", uuidv4());

    const projectInput = document.createElement("input");
    projectInput.classList.add("projectInput");
    projectInput.setAttribute("placeholder", "Project name");
    projectForm.appendChild(projectInput);

    projectInput.focus();

    const createProject = new CreateProject(projectForm.id, projectInput.value);
    projectArray = [...projectArray, createProject];
    console.table(projectArray);

    submitProject(projectForm, projectInput);
  });

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

    let taskId = uuidv4();

    taskBox.setAttribute("id", taskId);

    const createTask = new CreateTask(taskBox.id, taskText.value, false, 0);
    taskArray = [...taskArray, createTask];

    console.table(taskArray);

    taskText.focus();

    taskCheck.addEventListener("click", (e) => {
      const findElement = taskArray.find(
        (element) => element.id === taskBox.id
      );
      if (taskCheck.classList.contains("checked")) {
        taskCheck.classList.remove("checked");
        taskBox.classList.remove("opacity");
        findElement.done = false;
        console.log(findElement.done);
      } else {
        taskCheck.classList.add("checked");
        taskBox.classList.add("opacity");
        findElement.done = true;
        console.log(findElement.done);
      }
      console.table(taskArray);
    });
    colour.style.backgroundColor = colour.value;
    colour.addEventListener("input", (e) => {
      taskBox.style.backgroundColor = colour.value;
    });

    // Updates the task's properties in the array.
    task.addEventListener("submit", (e) => {
      e.preventDefault();
      //   Sets/updates the title to the array item.
      const findElement = taskArray.find(
        (element) => element.id === taskBox.id
      );
      findElement.title = taskText.value;
      if (tasks.children.length === 1) {
        return taskText.blur();
      }
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
      const findElement = taskArray.find(
        (element) => element.id === taskBox.id
      );
      //
      const taskIndex = taskArray.indexOf(findElement);
      // Removes the respective element in the array using the DOM elements' id.
      taskArray.splice(taskIndex, 1);
      //   Removes the entire task(box) from the DOM.
      tasks.removeChild(taskBox);
      //   Sets new sequential ID's for all DOM elements.
      // setId(tasks);
    });
  });
}
