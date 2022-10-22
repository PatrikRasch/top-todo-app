import { v4 as uuidv4 } from "uuid";

export const addProjectDom = () => {
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

  return [projectForm, projectDelete, projectInput];
};
