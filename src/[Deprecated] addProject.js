// import { submitProject } from "./submitProject";
// import { deleteProject } from "./deleteProject";
// import { addProjectDom } from "./addProjectDom";
// import { removeAllChildNodes } from "./removeAllChildNodes";
// import { v4 as uuidv4 } from "uuid";
// import { findElement } from "./findElement";

// export const projectAdd = (
//   projectArray,
//   projectOptions,
//   headerTitle,
//   projectHeaderTitle,
//   headerDescription,
//   headerDescriptionInput,
//   activeProject,
//   activeProjectElement,
//   taskArray,
//   tasks,
//   CreateProject
// ) => {
//   const addProjectDomReturn = addProjectDom();
//   const projectForm = addProjectDomReturn[0];
//   const projectDelete = addProjectDomReturn[1];
//   const projectInput = addProjectDomReturn[2];
//   projectInput.focus();

//   const createProject = new CreateProject(
//     projectForm.id,
//     projectInput.value,
//     uuidv4(),
//     projectHeaderTitle,
//     headerDescriptionInput.value
//   );

//   projectArray = [...projectArray, createProject];

//   // Ensures that new tasks are added to the new project that's just been added.
//   activeProject = findElement(projectArray, createProject).id;
//   // Set activeProjectElement to the new project.
//   activeProjectElement = findElement(projectArray, createProject);

//   submitProject(
//     projectForm,
//     projectInput,
//     projectArray,
//     projectOptions,
//     headerTitle,
//     headerDescription,
//     headerDescriptionInput
//     // activeProject,
//     // activeProjectElement
//   );

//   projectDelete.addEventListener("click", (e) => {
//     deleteProject(e, projectArray, taskArray, activeProject, activeProjectElement, projectForm, projectOptions);
//   });

//   // Removes all the tasks from the display to show the new and empty project.
//   removeAllChildNodes(tasks);

//   projectForm.addEventListener("click", (e) => {
//     console.table(projectArray);
//     console.table(taskArray);

//     activeProject = e.currentTarget.id;

//     removeAllChildNodes(tasks);

//     headerTitle.value = projectInput.value;

//     console.log(activeProject);
//     projectArray.forEach((arrayItem) => {
//       if (arrayItem.id === activeProject) {
//         activeProjectElement = arrayItem;
//       }
//     });
//     // console.table(taskArray);
//     // console.table(projectArray);
//     taskArray.forEach((arrayItem) => {
//       if (arrayItem.projectLink === activeProjectElement.taskLink) {
//         // console.log("lol");
//         // Rebuild and append all the tasks/todos using the properties stored in the taskArray.
//         showTasks(arrayItem);
//       }
//     });
//     projectInput.focus();
//   });

//   return [projectArray, activeProject, activeProjectElement];
// };
