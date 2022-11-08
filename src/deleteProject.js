import { findElement } from "./findElement";

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

  const activeProjectBefore = activeProject;
  // Sets activeProject to the delete-clicked form's id and activeProjectElement to the matching arrayItem.
  // Identifies which projectDelete DOM form was clicked compared to the projectArray.
  activeProject = e.currentTarget.parentNode.id;
  projectArray.forEach((arrayItem) => {
    if (arrayItem.id === activeProject) {
      activeProjectElement = arrayItem;
    }
  });
  // Loops over taskArray and checks if the arrayItem's match the activeProjectElement's taskLink.
  taskArray.forEach((arrayItem) => {
    if (arrayItem.projectLink === activeProjectElement.taskLink) {
      const taskIndex = taskArray.indexOf(arrayItem);
      removeArray.push(taskIndex);
    }
  });

  if (activeProjectBefore === e.currentTarget.parentNode.id) {
    const parent = e.currentTarget.parentNode;
    // This focuses the next project below the deleted one. Commented out because it causes issues when deleting the bottom project.
    // cba to fix, not an important feature. Additionally, it would require a lot of extra work for loading correct tasks without user click.
    // if (projectOptions.children.length > 1) {
    //   const nextInput = parent.nextElementSibling.querySelector("input");
    //   nextInput.focus();
    // }
  } else {
    const currentActiveProject = projectArray.find((arrayItem) => {
      if (arrayItem.id === activeProjectBefore) {
        return arrayItem;
      }
    });
    // Error when keep on deleting projects after having done the first one. Look into this. 99
    const projectOptionsChildren = [...projectOptions.children];
    // currentActiveProject is not set on the second time around.
    const focusThis = projectOptionsChildren.find((element) => element.id === currentActiveProject.id);
    focusThis.querySelector("input").focus();
  }

  for (let i = removeArray.length - 1; i >= 0; i--) {
    taskArray.splice(removeArray[i], 1);
  }
  // Find the index of the project in projectArray that has the same ID as the DOM project element.
  const projectIndex = projectArray.indexOf(findElement(projectArray, projectForm));
  // Removes the respective element in the array using the DOM elements' id.
  projectArray.splice(projectIndex, 1);
  //   Removes the entire project(form) from the DOM.
  projectOptions.removeChild(projectForm);
  activeProject = projectArray[projectIndex].id;
  return [activeProject];
};
