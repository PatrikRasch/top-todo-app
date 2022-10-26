import { findElement } from "./findElement";
import { focusSelector } from "./focusSelector";

export const submitProject = (projectForm, projectInput, projectArray, projectOptions) => {
  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Find the element in the array that has the same ID as the DOM project element and set its title to the array input title.
    findElement(projectArray, projectForm).title = projectInput.value;

    projectInput.addEventListener("keyup", (e) => {
      focusSelector(e, projectOptions, projectInput, projectForm);
    });
  });
};
