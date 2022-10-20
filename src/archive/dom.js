export function dom() {
  const contentDiv = document.querySelector("#content");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  contentDiv.appendChild(wrapper);

  const nav = document.createElement("div");
  nav.classList.add("nav");
  wrapper.appendChild(nav);

  const calendar = document.createElement("div");
  calendar.classList.add("calendar");
  nav.appendChild(calendar);

  const calendarHeader = document.createElement("div");
  calendarHeader.classList.add("calendarHeader");
  calendar.appendChild(calendarHeader);

  const calendarHeaderTitle = document.createElement("div");
  calendarHeaderTitle.classList.add("calendarHeaderTitle");
  calendarHeaderTitle.textContent = "Plan";
  calendarHeader.appendChild(calendarHeaderTitle);

  const contentSeparator = document.createElement("div");
  contentSeparator.classList.add("contentSeparator");
  calendarHeader.appendChild(contentSeparator);

  const calendarOptions = document.createElement("div");
  calendarOptions.classList.add("calendarOptions");
  calendar.appendChild(calendarOptions);

  const calendarToday = document.createElement("div");
  calendarToday.classList.add("calendarToday");
  calendarToday.textContent = "Today";
  calendarOptions.appendChild(calendarToday);

  const calendarWeek = document.createElement("div");
  calendarWeek.classList.add("calendarWeek");
  calendarWeek.textContent = "This Week";
  calendarOptions.appendChild(calendarWeek);

  const calendarTitle = document.createElement("div");
  calendarTitle.classList.add("calendarTitle");
  calendarTitle.textContent = "Calendar";
  calendarOptions.appendChild(calendarTitle);

  const projects = document.createElement("div");
  projects.classList.add("projects");
  nav.appendChild(projects);

  const projectsHeader = document.createElement("div");
  projectsHeader.classList.add("projectsHeader");
  projects.appendChild(projectsHeader);

  const projectsTopLine = document.createElement("div");
  projectsTopLine.classList.add("projectsTopLine");
  projectsHeader.appendChild(projectsTopLine);

  const projectsTitle = document.createElement("div");
  projectsTitle.classList.add("projectsTitle");
  projectsTitle.textContent = "Projects";
  projectsTopLine.appendChild(projectsTitle);

  const editProjects = document.createElement("div");
  editProjects.classList.add("editProjects");
  editProjects.textContent = "Edit";
  projectsTopLine.appendChild(editProjects);

  const contentSeparator2 = document.createElement("div");
  contentSeparator2.classList.add("contentSeparator");
  projectsHeader.appendChild(contentSeparator2);

  const addProject = document.createElement("div");
  addProject.classList.add("addProject");
  addProject.textContent = "+ Add Project";
  projectsHeader.appendChild(addProject);

  const projectOptions = document.createElement("div");
  projectOptions.classList.add("projectOptions");
  projects.appendChild(projectOptions);

  const project = document.createElement("div");
  project.classList.add("project");
  project.textContent = "Project X";
  projectOptions.appendChild(project);

  const content = document.createElement("div");
  content.classList.add("content");
  wrapper.appendChild(content);

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  const headerTitle = document.createElement("div");
  headerTitle.classList.add("headerTitle");
  headerTitle.textContent = "Header Title";
  header.appendChild(headerTitle);

  const headerDescription = document.createElement("div");
  headerDescription.classList.add("headerDescription");
  headerDescription.textContent =
    "Header Description which describes our project in great detail.";
  header.appendChild(headerDescription);

  const contentSeparator3 = document.createElement("div");
  contentSeparator3.classList.add("contentSeparator");
  content.appendChild(contentSeparator3);

  const addTask = document.createElement("div");
  addTask.classList.add("addTask");
  addTask.textContent = "+ Add Task";
  content.appendChild(addTask);

  const tasks = document.createElement("div");
  tasks.classList.add("tasks");
  tasks.dataset.lists;
  content.appendChild(tasks);

  // const taskBox = document.createElement("div");
  // taskBox.classList.add("taskBox");
  // tasks.appendChild(taskBox);

  // const taskCheck = document.createElement("div");
  // taskCheck.classList.add("taskCheck");
  // taskBox.appendChild(taskCheck);

  // const task = document.createElement("input");
  // task.classList.add("task");
  // // task.classList.add("taskBlack");
  // taskBox.appendChild(task);

  // const taskTitle = document.createElement("div");
  // taskTitle.classList.add("taskTitle");
  // taskTitle.textContent = "Task X";
  // task.appendChild(taskTitle);
}
