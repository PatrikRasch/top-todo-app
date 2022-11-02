// Focuses and blurs the input boxes as the user navigates them.
// The formElement parameter is poorly named, as it depends on the DOM structure, but in most cases it will be a form element.
export const focusSelector = (e, parentElement, currentElement, formElement) => {
  if (e.key === "Enter") {
    // If there's only one child element, blur the selection.
    if (parentElement.children.length === 1) {
      return currentElement.blur();
    }
    // If the selection is at the final DOM element of the list, go back to the first DOM element.
    if (formElement.nextElementSibling === null) {
      parentElement.firstElementChild.querySelector("input").focus();
      parentElement.lastElementChild.classList.remove("focused");
      parentElement.firstElementChild.classList.add("focused");

      return;
    }
    // Focus on the next DOM element
    const nextInput = formElement.nextElementSibling;
    nextInput.querySelector("input").focus();
    formElement.classList.remove("focused");
    nextInput.classList.add("focused");
    console.log("focused");
  }
  if (e.key === "Escape") {
    formElement.classList.remove("focused");
    currentElement.blur();
  }
};
