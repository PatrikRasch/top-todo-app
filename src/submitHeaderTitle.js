import { findElement } from "./findElement";

export const submitHeaderTitle = (headerTitleForm, headerTitle, projectArray, activeProjectElement, projectOptions) => {
  headerTitleForm.addEventListener("submit", (e) => {
    e.preventDefault();
    headerTitle.blur();
    findElement(projectArray, activeProjectElement).title = headerTitle.value;
    // for (let i = 0; i < projectOptions.children.length; i++) {
    //   if (projectOptions.childNodes[i].id === activeProjectElement.id) {
    //     projectOptions.childNodes[i].querySelector("input").value = headerTitle.value;
    //   }
    // }
  });
};
