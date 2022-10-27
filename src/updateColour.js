import { findElement } from "./findElement";

export const updateColour = (colour, domElement, taskArray) => {
  domElement.style.backgroundColor = colour.value;
  findElement(taskArray, domElement).colour = colour.value;
};
