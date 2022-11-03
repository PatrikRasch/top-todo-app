import { v4 as uuidv4 } from "uuid";

const contentDiv = document.querySelector("#content");

export const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
contentDiv.appendChild(wrapper);

export const nav = document.createElement("div");
nav.classList.add("nav");
wrapper.appendChild(nav);

export const calendar = document.createElement("div");
calendar.classList.add("calendar");
nav.appendChild(calendar);

export const calendarHeader = document.createElement("div");
calendarHeader.classList.add("calendarHeader");
calendar.appendChild(calendarHeader);

export const calendarHeaderTitle = document.createElement("div");
calendarHeaderTitle.classList.add("calendarHeaderTitle");
calendarHeaderTitle.textContent = "Plan";
calendarHeader.appendChild(calendarHeaderTitle);

export const contentSeparator = document.createElement("div");
contentSeparator.classList.add("contentSeparator");
calendarHeader.appendChild(contentSeparator);

export const calendarOptions = document.createElement("div");
calendarOptions.classList.add("calendarOptions");
calendar.appendChild(calendarOptions);

export const calendarToday = document.createElement("div");
calendarToday.classList.add("calendarToday");
calendarToday.textContent = "Today";
calendarOptions.appendChild(calendarToday);

export const calendarWeek = document.createElement("div");
calendarWeek.classList.add("calendarWeek");
calendarWeek.textContent = "This Week";
calendarOptions.appendChild(calendarWeek);

export const calendarTitle = document.createElement("div");
calendarTitle.classList.add("calendarTitle");
calendarTitle.textContent = "Calendar";
calendarOptions.appendChild(calendarTitle);

export const projects = document.createElement("div");
projects.classList.add("projects");
nav.appendChild(projects);

export const projectsHeader = document.createElement("div");
projectsHeader.classList.add("projectsHeader");
projects.appendChild(projectsHeader);

export const projectsTopLine = document.createElement("div");
projectsTopLine.classList.add("projectsTopLine");
projectsHeader.appendChild(projectsTopLine);

export const projectsTitle = document.createElement("div");
projectsTitle.classList.add("projectsTitle");
projectsTitle.textContent = "Projects";
projectsTopLine.appendChild(projectsTitle);

export const editProjects = document.createElement("div");
editProjects.classList.add("editProjects");
// editProjects.textContent = "Edit";
projectsTopLine.appendChild(editProjects);

export const contentSeparator2 = document.createElement("div");
contentSeparator2.classList.add("contentSeparator");
projectsHeader.appendChild(contentSeparator2);

export const addProject = document.createElement("div");
addProject.classList.add("addProject");
addProject.textContent = "+ Add Project";
projectsHeader.appendChild(addProject);

export const projectOptions = document.createElement("div");
projectOptions.classList.add("projectOptions");
projects.appendChild(projectOptions);

export const projectForm = document.createElement("form");
projectForm.classList.add("projectForm");
projectForm.setAttribute("id", uuidv4());
projectOptions.appendChild(projectForm);

export const projectDelete = document.createElement("div");
projectDelete.classList.add("projectDelete");
projectDelete.textContent = "x";
projectForm.appendChild(projectDelete);

export const projectInput = document.createElement("input");
projectInput.classList.add("projectInput");
projectInput.value = "Example Project";
projectInput.setAttribute("placeholder", "Project name");
projectForm.appendChild(projectInput);

export const content = document.createElement("div");
content.classList.add("content");
wrapper.appendChild(content);

export const header = document.createElement("div");
header.classList.add("header");
content.appendChild(header);

export const headerTitleWrapper = document.createElement("div");
headerTitleWrapper.classList.add("headerTitleWrapper");
header.appendChild(headerTitleWrapper);

export const headerTitleForm = document.createElement("form");
headerTitleForm.classList.add("headerTitleForm");
headerTitleWrapper.appendChild(headerTitleForm);

export const headerTitle = document.createElement("input");
headerTitle.classList.add("headerTitle");
headerTitle.value = projectInput.value;
headerTitle.setAttribute("placeholder", "Header Title");
headerTitleForm.appendChild(headerTitle);

export const headerTitleEdit = document.createElement("div");
headerTitleEdit.classList.add("headerTitleEdit");
headerTitleEdit.textContent = "Edit";
headerTitleWrapper.appendChild(headerTitleEdit);

export const headerDescriptionForm = document.createElement("form");
headerDescriptionForm.classList.add("headerDescription");
header.appendChild(headerDescriptionForm);

export const headerDescriptionInput = document.createElement("input");
headerDescriptionInput.classList.add("headerDescriptionInput");
headerDescriptionInput.setAttribute("placeholder", "Project Description");
headerDescriptionForm.appendChild(headerDescriptionInput);

export const contentSeparator3 = document.createElement("div");
contentSeparator3.classList.add("contentSeparator");
content.appendChild(contentSeparator3);

export const addTask = document.createElement("div");
addTask.classList.add("addTask");
addTask.textContent = "+ Add Task";
content.appendChild(addTask);

export const tasks = document.createElement("div");
tasks.classList.add("tasks");
tasks.dataset.lists;
content.appendChild(tasks);
