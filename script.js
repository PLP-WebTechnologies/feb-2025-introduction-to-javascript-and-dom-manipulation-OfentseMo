// Change Text Content
const dynamicText = document.getElementById("dynamic-text");
const changeTextBtn = document.getElementById("change-text-btn");

changeTextBtn.addEventListener("click", () => {
  dynamicText.textContent = "The text has been changed!";
});

// Modify CSS Styles
const styledDiv = document.getElementById("styled-div");
const changeStyleBtn = document.getElementById("change-style-btn");

changeStyleBtn.addEventListener("click", () => {
  styledDiv.style.backgroundColor = "#ffcc00";
  styledDiv.style.color = "#000";
  styledDiv.style.border = "2px solid #000";
});

// Add or Remove Elements
const elementContainer = document.getElementById("element-container");
const addElementBtn = document.getElementById("add-element-btn");
const removeElementBtn = document.getElementById("remove-element-btn");

addElementBtn.addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.textContent = "This is a new dynamically added element!";
  elementContainer.appendChild(newElement);
});

removeElementBtn.addEventListener("click", () => {
  const lastElement = elementContainer.lastElementChild;
  if (lastElement) {
    elementContainer.removeChild(lastElement);
  }
});