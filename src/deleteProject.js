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
  console.table(removeArray);
  for (let i = removeArray.length - 1; i >= 0; i--) {
    taskArray.splice(removeArray[i], 1);
  }
  // Find the index of the project in projectArray that has the same ID as the DOM project element.
  const projectIndex = projectArray.indexOf(findElement(projectArray, projectForm));
  // Removes the respective element in the array using the DOM elements' id.
  projectArray.splice(projectIndex, 1);
  //   Removes the entire project(form) from the DOM.
  projectOptions.removeChild(projectForm);
  console.table(projectArray);
  console.table(taskArray);
};
