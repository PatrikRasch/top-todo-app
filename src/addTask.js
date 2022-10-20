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

// import { projectForm, projectDelete, projectInput } from "./addProjectDom.js";

export function addTaskName() {
  class CreateProject {
    constructor(id, title, taskLink) {
      this.id = id;
      this.title = title;
      this.taskLink = taskLink;
    }
  }
  class CreateTask {
    constructor(id, title, done, projectLink) {
      this.id = id;
      this.title = title;
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

  const submitProject = (projectForm, projectInput) => {
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Find the element in the array that has the same ID as the DOM project element and set its title to the array input title.
      findElement(projectArray, projectForm).title = projectInput.value;

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
    const projectIndex = projectArray.indexOf(
      findElement(projectArray, projectForm)
    );
    console.log(projectIndex);
    // Removes the respective element in the array using the DOM elements' id.
    projectArray.splice(projectIndex, 1);
    //   Removes the entire project(form) from the DOM.
    projectOptions.removeChild(projectForm);
  });

  // Creates the initial example project from the CreateProject class.
  const createProject = new CreateProject(
    projectForm.id,
    projectInput.value,
    uuidv4()
  );
  // Adds the first project to the project array.
  projectArray = [...projectArray, createProject];

  let activeProject = projectForm.id;

  projectForm.addEventListener("click", (e) => {
    activeProject = e.currentTarget.id;
  });

  addProject.addEventListener("click", (e) => {
    const projectOptions = document.querySelector(".projectOptions");

    const projectForm = document.createElement("form");
    projectForm.classList.add("projectForm");
    projectOptions.appendChild(projectForm);

    const projectDelete = document.createElement("div");
    projectDelete.classList.add("projectDelete");
    projectDelete.textContent = "x";
    projectForm.appendChild(projectDelete);

    projectForm.setAttribute("id", uuidv4());

    const projectInput = document.createElement("input");
    projectInput.classList.add("projectInput");
    projectInput.setAttribute("placeholder", "Project name");
    projectForm.appendChild(projectInput);

    projectInput.focus();

    const createProject = new CreateProject(
      projectForm.id,
      projectInput.value,
      uuidv4()
    );
    projectArray = [...projectArray, createProject];

    submitProject(projectForm, projectInput);
    projectDelete.addEventListener("click", (e) => {
      // Find the index of the project in projectArray that has the same ID as the DOM project element.
      const projectIndex = projectArray.indexOf(
        findElement(projectArray, projectForm)
      );
      console.log(projectIndex);
      // Removes the respective element in the array using the DOM elements' id.
      projectArray.splice(projectIndex, 1);
      //   Removes the entire project(form) from the DOM.
      projectOptions.removeChild(projectForm);
    });

    let activeProjectElement;

    const showTasks = (arrayItem) => {
      const tasks = document.querySelector(".tasks");
      const taskBox = document.createElement("div");
      taskBox.classList.add("taskBox");
      const taskCheck = document.createElement("div");
      taskCheck.classList.add("taskCheck");
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

      taskText.value = arrayItem.title;
      if (arrayItem.done === true) {
        taskCheck.classList.add("checked");
        taskBox.classList.add("opacity");
      }
      taskCheck.addEventListener("click", (e) => {
        taskCheckClicked(taskCheck, taskBox, taskArray);
      });

      // Appending
      tasks.appendChild(taskBox);
      taskBox.appendChild(taskCheck);
      taskBox.appendChild(task);
      taskBox.appendChild(colour);
      taskBox.appendChild(deleteTask);
      task.appendChild(taskText);
    };

    projectForm.addEventListener("click", (e) => {
      activeProject = e.currentTarget.id;
      projectArray.forEach((arrayItem) => {
        if (arrayItem.id === activeProject) {
          activeProjectElement = arrayItem;
        }
      });
      taskArray.forEach((arrayItem) => {
        if (arrayItem.projectLink === activeProjectElement.taskLink) {
          // Show all the dom elements with the matching id
          // Rebuild and append all the tasks/todos using the properties stored in the taskArray. 99
          console.log(arrayItem.title);
          console.log(arrayItem.done);

          showTasks(arrayItem);
        }
      });
      // Further, loop through taskArray and find all elements that match this taskLink.
      // Finally, only append the elements that fulfills this requirement.
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
    const tasks = document.querySelector(".tasks");
    const taskBox = document.createElement("div");
    taskBox.classList.add("taskBox");
    const taskCheck = document.createElement("div");
    taskCheck.classList.add("taskCheck");
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
    tasks.appendChild(taskBox);
    taskBox.appendChild(taskCheck);
    taskBox.appendChild(task);
    taskBox.appendChild(colour);
    taskBox.appendChild(deleteTask);
    task.appendChild(taskText);

    submitProject(projectForm, projectInput);

    let taskId = uuidv4();
    taskBox.setAttribute("id", taskId);
    // Find the first project from projectArray matching with activeProject.
    const match = projectArray.find((element) => element.id === activeProject);
    // The line below is sets the projectLink to match the projectArray's taskLink.
    let projectLink = match.taskLink;
    const createTask = new CreateTask(
      taskBox.id,
      taskText.value,
      false,
      projectLink
    );
    taskArray = [...taskArray, createTask];
    console.log(activeProject);
    console.table(projectArray);
    console.table(taskArray);

    taskText.focus();

    taskCheck.addEventListener("click", (e) => {
      taskCheckClicked(taskCheck, taskBox, taskArray);
    });
    colour.style.backgroundColor = colour.value;
    colour.addEventListener("input", (e) => {
      taskBox.style.backgroundColor = colour.value;
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
      const taskIndex = taskArray.indexOf(findElement(taskArray, taskBox));
      // Removes the respective element in the array using the DOM elements' id.
      taskArray.splice(taskIndex, 1);
      //   Removes the entire task(box) from the DOM.
      tasks.removeChild(taskBox);
    });
  });
}
