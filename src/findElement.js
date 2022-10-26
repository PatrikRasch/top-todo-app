// Loops through the targetArray and returns the first match.
export const findElement = (targetArray, targetMatch) => {
  return targetArray.find((arrayItem) => {
    if (arrayItem.id === targetMatch.id) {
      return arrayItem;
    }
  });
};
