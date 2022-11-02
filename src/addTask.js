import { v4 as uuidv4 } from "uuid";
import {
  wrapper,
  nav,
  calendarHeader,
  calendarHeaderTitle,
  contentSeparator,
  calendarOptions,
  calendarToday,
  calendarWeek,
  calendarTitle,
  projects,
  projectsHeader,
  projectsTopLine,
  projectsTitle,
  editProjects,
  contentSeparator2,
  addProject,
  projectOptions,
  projectForm,
  projectDelete,
  projectInput,
  content,
  header,
  headerTitleWrapper,
  headerTitleForm,
  headerTitle,
  headerTitleEdit,
  headerDescription,
  headerDescriptionInput,
  contentSeparator3,
  addTask,
  tasks,
} from "./initialDom.js";

import { addProjectDom } from "./addProjectDom.js";
import { addTaskDom } from "./addTaskDom.js";
import { focusSelector } from "./focusSelector.js";
import { deleteProject } from "./deleteProject.js";
import { findElement } from "./findElement.js";
import { submitProject } from "./submitProject.js";
import { updateColour } from "./updateColour.js";
import { removeAllChildNodes } from "./removeAllChildNodes.js";
import { taskSubmit } from "./taskSubmit.js";
import { taskDelete } from "./taskDelete.js";
import { projectAdd } from "./addProject.js";

export function addTaskName() {
  class CreateProject {
    constructor(id, title, taskLink, headerTitle, headerDescription) {
      this.id = id;
      this.title = title;
      this.taskLink = taskLink;
      this.headerTitle = headerTitle;
      this.headerDescription = headerDescription;
    }
  }
  class CreateTask {
    constructor(id, title, colour, done, projectLink) {
      this.id = id;
      this.title = title;
      this.colour = colour;
      this.done = done;
      this.projectLink = projectLink;
    }
  }

  // Declare the array that holds all the tasks/todos.
  let taskArray = [];
  // Declares array that holds all the projects.
  let projectArray = [];

  const showTasks = (arrayItem) => {
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
      taskCheckClicked(taskCheck, taskBox, taskArray);
    });

    taskText.focus();

    // Set taskBox DOM element id to match its corresponding taskArray id.
    taskBox.setAttribute("id", arrayItem.id);
    // Set taskBox DOM element background colour to match its corresponding taskArray colour.
    taskBox.style.backgroundColor = arrayItem.colour;
    // Listen for colour updates
    colour.addEventListener("input", (e) => {
      updateColour(colour, taskBox, taskArray);
    });

    // Updates the task's title in the array.
    task.addEventListener("submit", (e) => {
      taskSubmit(e, taskArray, taskBox, taskText, tasks);
    });

    // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
    deleteTask.addEventListener("click", (e) => {
      taskDelete(taskArray, taskBox, tasks);
    });

    task.addEventListener("keydown", (e) => {
      findElement(taskArray, taskBox).title = taskText.value;
    });
  };

  headerTitleEdit.addEventListener("click", (e) => {
    headerTitle.select();
  });

  headerTitleForm.addEventListener("keyup", (e) => {
    for (let i = 0; i < projectOptions.children.length; i++) {
      if (projectOptions.childNodes[i].id === activeProjectElement.id) {
        projectOptions.childNodes[i].querySelector("input").value = headerTitle.value;
      }
    }
  });

  headerTitleForm.addEventListener("submit", (e) => {
    e.preventDefault();
    headerTitle.blur();
    findElement(projectArray, activeProjectElement).title = headerTitle.value;
    for (let i = 0; i < projectOptions.children.length; i++) {
      if (projectOptions.childNodes[i].id === activeProjectElement.id) {
        projectOptions.childNodes[i].querySelector("input").value = headerTitle.value;
      }
    }
  });

  projectDelete.addEventListener("click", (e) => {
    deleteProject(e, projectArray, taskArray, activeProject, activeProjectElement, projectForm, projectOptions);
  });

  let projectHeaderTitle = "bruh";

  headerDescription.addEventListener("submit", (e) => {
    e.preventDefault();
    headerDescriptionInput.blur();
    console.table(projectArray);
    // 99 push this value into the projectArray and update array on keydown and submit.
    findElement(projectArray, activeProjectElement).headerDescription = headerDescriptionInput.value;
    console.table(projectArray);
  });

  headerDescription.addEventListener("keydown", (e) => {
    findElement(projectArray, activeProjectElement).headerDescription = headerDescriptionInput.value;
  });

  // Creates the initial example project from the CreateProject class.
  const createProject = new CreateProject(
    projectForm.id,
    projectInput.value,
    uuidv4(),
    projectHeaderTitle,
    headerDescriptionInput.value
  );

  // Adds the first project to the project array.
  projectArray = [...projectArray, createProject];

  // activeProject is the projectForm's id element.
  let activeProject = projectForm.id;
  // activeProjectElement is the arrayItem with a matching id of activeProject.
  let activeProjectElement = projectOptions.childNodes[0];

  submitProject(
    projectForm,
    projectInput,
    projectArray,
    projectOptions,
    headerTitle,
    headerDescription,
    headerDescriptionInput,
    activeProject,
    activeProjectElement,
    taskArray
  );

  projectForm.addEventListener("click", (e) => {
    for (let i = 0; i < projectOptions.childNodes.length; i++) {
      projectOptions.childNodes[i].classList.remove("focused");
    }
    projectForm.classList.add("focused");

    activeProject = e.currentTarget.id;
    projectForm.classList.add("focused");

    removeAllChildNodes(tasks);

    headerTitle.value = projectInput.value;

    projectArray.forEach((arrayItem) => {
      if (arrayItem.id === activeProject) {
        activeProjectElement = arrayItem;
      }
    });
    taskArray.forEach((arrayItem) => {
      if (arrayItem.projectLink === activeProjectElement.taskLink) {
        // Rebuild and append all the tasks/todos using the properties stored in the taskArray.
        showTasks(arrayItem);
      }
    });
    projectInput.focus();
  });

  addProject.addEventListener("click", (e) => {
    const addProjectDomReturn = addProjectDom();
    const projectForm = addProjectDomReturn[0];
    const projectDelete = addProjectDomReturn[1];
    const projectInput = addProjectDomReturn[2];
    projectInput.focus();

    const createProject = new CreateProject(
      projectForm.id,
      projectInput.value,
      uuidv4(),
      projectHeaderTitle,
      headerDescriptionInput.value
    );

    projectArray = [...projectArray, createProject];

    // Ensures that new tasks are added to the new project that's just been added.
    activeProject = findElement(projectArray, createProject).id;
    // Set activeProjectElement to the new project.
    activeProjectElement = findElement(projectArray, createProject);

    submitProject(
      projectForm,
      projectInput,
      projectArray,
      projectOptions,
      headerTitle,
      headerDescription,
      headerDescriptionInput,
      activeProject,
      activeProjectElement,
      taskArray
    );

    projectDelete.addEventListener("click", (e) => {
      deleteProject(e, projectArray, taskArray, activeProject, activeProjectElement, projectForm, projectOptions);
    });

    // Removes all the tasks from the display to show the new and empty project.
    removeAllChildNodes(tasks);

    projectForm.addEventListener("click", (e) => {
      for (let i = 0; i < projectOptions.childNodes.length; i++) {
        projectOptions.childNodes[i].classList.remove("focused");
      }
      projectForm.classList.add("focused");

      activeProject = e.currentTarget.id;

      removeAllChildNodes(tasks);

      headerTitle.value = projectInput.value;

      console.log(activeProject);
      projectArray.forEach((arrayItem) => {
        if (arrayItem.id === activeProject) {
          activeProjectElement = arrayItem;
        }
      });

      taskArray.forEach((arrayItem) => {
        if (arrayItem.projectLink === activeProjectElement.taskLink) {
          // console.log("lol");
          // Rebuild and append all the tasks/todos using the properties stored in the taskArray.
          showTasks(arrayItem);
        }
      });
      projectInput.focus();
    });
  });

  const taskCheckClicked = (taskCheck, taskBox, taskArray) => {
    if (taskCheck.classList.contains("checked")) {
      taskCheck.classList.remove("checked");
      taskBox.classList.remove("opacity");
      findElement(taskArray, taskBox).done = false;
    } else {
      taskCheck.classList.add("checked");
      taskBox.classList.add("opacity");
      findElement(taskArray, taskBox).done = true;
    }
  };

  addTask.addEventListener("click", (e) => {
    if (projectArray.length === 0) {
      return alert("Make a project first");
    }
    const addTaskDomReturn = addTaskDom();
    const taskBox = addTaskDomReturn[0];
    const taskCheck = addTaskDomReturn[1];
    const task = addTaskDomReturn[2];
    const colour = addTaskDomReturn[3];
    const deleteTask = addTaskDomReturn[4];
    const taskText = addTaskDomReturn[5];

    let taskId = uuidv4();
    taskBox.setAttribute("id", taskId);

    // Sets activeProject based on which project contains the class "focused"
    for (let i = 0; i < projectOptions.childNodes.length; i++) {
      if (projectOptions.childNodes[i].classList.contains("focused")) {
        activeProject = projectOptions.childNodes[i].id;
      }
    }
    // Find the first project from projectArray matching with activeProject.
    const match = projectArray.find((element) => element.id === activeProject);
    // The line below sets the projectLink to match the projectArray's taskLink.

    let projectLink = match.taskLink;
    console.log(activeProject);
    const createTask = new CreateTask(taskBox.id, taskText.value, taskBox.style.backgroundColor, false, projectLink);
    taskArray = [...taskArray, createTask];
    taskText.focus();

    taskCheck.addEventListener("click", (e) => {
      taskCheckClicked(taskCheck, taskBox, taskArray);
    });

    colour.addEventListener("input", (e) => {
      updateColour(colour, taskBox, taskArray);
    });

    task.addEventListener("keydown", (e) => {
      findElement(taskArray, taskBox).title = taskText.value;
    });

    // Updates the task's properties in the array.
    task.addEventListener("submit", (e) => {
      taskSubmit(e, taskArray, taskBox, taskText, tasks);
    });

    // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
    deleteTask.addEventListener("click", (e) => {
      taskDelete(taskArray, taskBox, tasks);
    });
  });
}
