import { findElement } from "./findElement";
import { focusSelector } from "./focusSelector";
import { header } from "./initialDom";

export const submitProject = (
  projectForm,
  projectInput,
  projectArray,
  projectOptions,
  headerTitle,
  headerDescription,
  headerDescriptionInput,
  activeProject,
  activeProjectElement
) => {
  // Actively updates the projectArray and the headerTitle on keyup.
  projectForm.addEventListener("keyup", (e) => {
    // This if check avoids making this eventListener be activated if the form is submitted.
    if (e.key !== "Enter") {
      findElement(projectArray, projectForm).title = projectInput.value;
      // Updates the headerTitle to match the projectInput name.
      headerTitle.value = projectInput.value;
    }
  });

  headerDescription.addEventListener("keyup", (e) => {
    findElement(projectArray, headerDescriptionInput).headerDescription = headerDescriptionInput.value;
    // Updates the headerTitle to match the projectInput name.
    headerDescription.value = "LOL";
  });

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Find the element in the array that has the same ID as the DOM project element and set its title to the array input title.
    findElement(projectArray, projectForm).title = projectInput.value;

    projectInput.addEventListener("keyup", (e) => {
      focusSelector(e, projectOptions, projectInput, projectForm);
    });

    for (let i = 0; i < projectOptions.children.length; i++) {
      if (projectOptions.childNodes[i].id === activeProjectElement.id && i + 1 !== projectOptions.children.length) {
        return (headerTitle.value = projectOptions.childNodes[i + 1].querySelector("input").value);
      }
      if (i + 1 === projectOptions.children.length) {
        headerTitle.value = projectOptions.childNodes[0].querySelector("input").value;
      }
    }
  });
};
