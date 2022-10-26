export const submitProject = (
  projectForm,
  projectInput,
  projectArray,
  projectOptions
) => {
  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Find the element in the array that has the same ID as the DOM project element.
    const findElement = projectArray.find(
      (element) => element.id === projectForm.id
    );
    // Set the array element title to the DOM input title value
    findElement.title = projectInput.value;

    projectInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        if (projectOptions.children.length === 1) {
          return projectInput.blur();
        }
        if (projectForm.nextElementSibling === null) {
          projectOptions.firstElementChild.querySelector("input").focus();
          return;
        }
        const nextInput = projectForm.nextElementSibling;
        nextInput.querySelector("input").focus();
      }
      if (e.key === "Escape") {
        projectInput.blur();
      }
    });
  });
};
