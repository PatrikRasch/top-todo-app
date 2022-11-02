import { removeAllChildNodes } from "./removeAllChildNodes";

const findElement = (targetArray, targetMatch) => {
  return targetArray.find((arrayItem) => {
    if (arrayItem.id === targetMatch.id) {
      return arrayItem;
    }
  });
};

export const deleteProject = (
  e,
  projectArray,
  taskArray,
  activeProject,
  activeProjectElement,
  projectForm,
  projectOptions
) => {
  let removeArray = [];

  console.log(activeProject);
  const activeProjectBefore = activeProject;
  // Sets activeProject to the delete-clicked form's id and activeProjectElement to the matching arrayItem.
  // Identifies which projectDelete DOM form was clicked compared to the projectArray.
  activeProject = e.currentTarget.parentNode.id;
  projectArray.forEach((arrayItem) => {
    if (arrayItem.id === activeProject) {
      activeProjectElement = arrayItem;
    }
  });
  //   Use activeProject and find the matching element taskBox and focus that one

  // Loops over taskArray and checks if the arrayItem's match the activeProjectElement's taskLink.
  taskArray.forEach((arrayItem) => {
    if (arrayItem.projectLink === activeProjectElement.taskLink) {
      const taskIndex = taskArray.indexOf(arrayItem);
      removeArray.push(taskIndex);
    }
  });

  // if (projectArray.length === 1) {
  //   removeAllChildNodes(projectArray);
  //   removeAllChildNodes(taskArray);
  //   console.log("lol");
  // }

  if (activeProjectBefore === e.currentTarget.parentNode.id) {
    const parent = e.currentTarget.parentNode;
    if (projectOptions.children.length > 1) {
      const nextInput = parent.nextElementSibling.querySelector("input");
      nextInput.focus();
    }
  } else {
    const currentActiveProject = projectArray.find((arrayItem) => {
      if (arrayItem.id === activeProjectBefore) {
        return arrayItem;
      }
    });
    // Error when keep on deleting projects after having done the first one. Look into this. 99
    const projectOptionsChildren = [...projectOptions.children];
    // currentActiveProject is not set on the second time around.
    console.log(currentActiveProject);
    const focusThis = projectOptionsChildren.find((element) => element.id === currentActiveProject.id);
    console.log(focusThis);
    focusThis.querySelector("input").focus();
  }

  //   console.table(removeArray);
  for (let i = removeArray.length - 1; i >= 0; i--) {
    taskArray.splice(removeArray[i], 1);
  }
  // Find the index of the project in projectArray that has the same ID as the DOM project element.
  const projectIndex = projectArray.indexOf(findElement(projectArray, projectForm));
  // Removes the respective element in the array using the DOM elements' id.
  projectArray.splice(projectIndex, 1);
  //   Removes the entire project(form) from the DOM.
  projectOptions.removeChild(projectForm);

  //   console.log("Project Array:");
  console.table(projectArray);
  //   console.log("Task Array:");
  console.table(taskArray);
  console.log(activeProject);

  //   console.log(activeProject);
  //   console.log(activeProjectElement);
};
