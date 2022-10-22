// import { projects } from "./projects.js";
import { v4 as uuidv4 } from "uuid";
// import { 'submit'Project } from "./submitProject.js";
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
  contentSeparator3,
  addTask,
  tasks,
} from "./initialDom.js";

import { addProjectDom } from "./addProjectDom.js";
import { addTaskDom } from "./addTaskDom.js";

export function addTaskName() {
  class CreateProject {
    constructor(id, title, taskLink) {
      this.id = id;
      this.title = title;
      this.taskLink = taskLink;
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

  // Loops through the targetArray and returns the first match.
  const findElement = (targetArray, targetMatch) => {
    return targetArray.find((arrayItem) => {
      if (arrayItem.id === targetMatch.id) {
        return arrayItem;
      }
    });
  };

  // Focuses and blurs the input boxes as the user navigates them.
  // The formElement parameter is poorly named, as it depends on the DOM structure, but in most cases it will be a form element.
  const focusSelector = (e, parentElement, currentElement, formElement) => {
    if (e.key === "Enter") {
      // If there's only one child element, blur the selection.
      if (parentElement.children.length === 1) {
        return currentElement.blur();
      }
      // If the selection is at the final DOM element of the list, go back to the first DOM element.
      if (formElement.nextElementSibling === null) {
        parentElement.firstElementChild.querySelector("input").focus();
        return;
      }
      // Focus on the next DOM element
      const nextInput = formElement.nextElementSibling;
      nextInput.querySelector("input").focus();
    }
    if (e.key === "Escape") {
      currentElement.blur();
    }
  };

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  const submitProject = (projectForm, projectInput) => {
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Find the element in the array that has the same ID as the DOM project element and set its title to the array input title.
      findElement(projectArray, projectForm).title = projectInput.value;

      projectInput.addEventListener("keyup", (e) => {
        focusSelector(e, projectOptions, projectInput, projectForm);
      });
    });
  };

  const updateColour = (colour, domElement) => {
    domElement.style.backgroundColor = colour.value;
    findElement(taskArray, domElement).colour = colour.value;
  };

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
      updateColour(colour, taskBox);
    });

    // Updates the task's title in the array.
    task.addEventListener("submit", (e) => {
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
    });

    // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
    deleteTask.addEventListener("click", (e) => {
      const taskIndex = taskArray.indexOf(findElement(taskArray, taskBox));
      // Removes the respective element in the array using the DOM elements' id.
      taskArray.splice(taskIndex, 1);
      //   Removes the entire task(box) from the DOM.
      tasks.removeChild(taskBox);
    });
  };

  headerTitleEdit.addEventListener("click", (e) => {
    headerTitle.removeAttribute("disabled", "");
    headerTitle.select();
  });

  headerTitleForm.addEventListener("submit", (e) => {
    e.preventDefault();
    headerTitle.blur();
    headerTitle.setAttribute("disabled", "");
  });

  submitProject(projectForm, projectInput);

  projectDelete.addEventListener("click", (e) => {
    // Find the index of the project in projectArray that has the same ID as the DOM project element.
    const projectIndex = projectArray.indexOf(findElement(projectArray, projectForm));
    // Removes the respective element in the array using the DOM elements' id.
    projectArray.splice(projectIndex, 1);
    //   Removes the entire project(form) from the DOM.
    projectOptions.removeChild(projectForm);
  });

  // Creates the initial example project from the CreateProject class.
  const createProject = new CreateProject(projectForm.id, projectInput.value, uuidv4());
  // Adds the first project to the project array.
  projectArray = [...projectArray, createProject];

  let activeProject = projectForm.id;
  let activeProjectElement;

  projectForm.addEventListener("click", (e) => {
    activeProject = e.currentTarget.id;
    removeAllChildNodes(tasks);

    activeProject = e.currentTarget.id;
    projectArray.forEach((arrayItem) => {
      if (arrayItem.id === activeProject) {
        activeProjectElement = arrayItem;
      }
    });
    taskArray.forEach((arrayItem) => {
      if (arrayItem.projectLink === activeProjectElement.taskLink) {
        console.log(arrayItem.done);
        // Rebuild and append all the tasks/todos using the properties stored in the taskArray.
        showTasks(arrayItem);
      }
    });
  });

  addProject.addEventListener("click", (e) => {
    const addProjectDomReturn = addProjectDom();
    const projectForm = addProjectDomReturn[0];
    const projectDelete = addProjectDomReturn[1];
    const projectInput = addProjectDomReturn[2];
    projectInput.focus();

    const createProject = new CreateProject(projectForm.id, projectInput.value, uuidv4());
    projectArray = [...projectArray, createProject];

    submitProject(projectForm, projectInput);
    projectDelete.addEventListener("click", (e) => {
      // Find the index of the project in projectArray that has the same ID as the DOM project element.
      const projectIndex = projectArray.indexOf(findElement(projectArray, projectForm));
      // Removes the respective element in the array using the DOM elements' id.
      projectArray.splice(projectIndex, 1);
      //   Removes the entire project(form) from the DOM.
      projectOptions.removeChild(projectForm);
    });

    projectForm.addEventListener("click", (e) => {
      removeAllChildNodes(tasks);

      activeProject = e.currentTarget.id;
      projectArray.forEach((arrayItem) => {
        if (arrayItem.id === activeProject) {
          activeProjectElement = arrayItem;
        }
      });
      taskArray.forEach((arrayItem) => {
        if (arrayItem.projectLink === activeProjectElement.taskLink) {
          console.log(arrayItem.done);
          // Rebuild and append all the tasks/todos using the properties stored in the taskArray.
          showTasks(arrayItem);
        }
      });
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
    const addTaskDomReturn = addTaskDom();
    const taskBox = addTaskDomReturn[0];
    const taskCheck = addTaskDomReturn[1];
    const task = addTaskDomReturn[2];
    const colour = addTaskDomReturn[3];
    const deleteTask = addTaskDomReturn[4];
    const taskText = addTaskDomReturn[5];

    submitProject(projectForm, projectInput);

    let taskId = uuidv4();
    taskBox.setAttribute("id", taskId);
    // Find the first project from projectArray matching with activeProject.
    const match = projectArray.find((element) => element.id === activeProject);
    // The line below is sets the projectLink to match the projectArray's taskLink.
    let projectLink = match.taskLink;
    const createTask = new CreateTask(taskBox.id, taskText.value, taskBox.style.backgroundColor, false, projectLink);
    taskArray = [...taskArray, createTask];
    console.log(activeProject);
    console.table(projectArray);
    console.table(taskArray);

    taskText.focus();

    taskCheck.addEventListener("click", (e) => {
      taskCheckClicked(taskCheck, taskBox, taskArray);
    });

    colour.addEventListener("input", (e) => {
      updateColour(colour, taskBox);
    });

    // Updates the task's properties in the array.
    task.addEventListener("submit", (e) => {
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
    });

    // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
    deleteTask.addEventListener("click", (e) => {
      const taskIndex = taskArray.indexOf(findElement(taskArray, taskBox));
      // Removes the respective element in the array using the DOM elements' id.
      taskArray.splice(taskIndex, 1);
      //   Removes the entire task(box) from the DOM.
      tasks.removeChild(taskBox);
    });
  });
}
