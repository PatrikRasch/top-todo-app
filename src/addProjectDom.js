import { v4 as uuidv4 } from "uuid";

const projectOptions = document.querySelector(".projectOptions");

export const projectForm = document.createElement("form");
projectForm.classList.add("projectForm");
projectOptions.appendChild(projectForm);

export const projectDelete = document.createElement("div");
projectDelete.classList.add("projectDelete");
projectDelete.textContent = "x";
projectForm.appendChild(projectDelete);

projectForm.setAttribute("id", uuidv4());

export const projectInput = document.createElement("input");
projectInput.classList.add("projectInput");
projectInput.setAttribute("placeholder", "Project name");
projectForm.appendChild(projectInput);
