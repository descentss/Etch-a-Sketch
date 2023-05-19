"use strict";

// Overview: Using Flexbox to create a grid canvas

const gridContainer = document.querySelector(".grid-container");
const gridText = document.querySelector("#grid-size");
const applyButton = document.getElementById("Apply");
const resetButton = document.getElementById("Reset");
const inputGridNumber = document.getElementById("grid-number");
let inputValue = inputGridNumber.textContent;

let squareSize = 16;

createGrid(squareSize);

// Creates the square divs
function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("square");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

// Creates the Grid and appends it
function createGrid(gridSize) {
  for (let i = 0; i < gridSize ** 2; i++) {
    gridContainer.appendChild(createDiv(gridContainer.clientWidth / gridSize));
  }
}

// Removes Grid and Creates another one
function reset() {
  // While there is an existing child for gridContainer, delete
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  createGrid(squareSize);
}

// Applying Event Listeners
gridContainer.addEventListener("mouseover", function (e) {
  if (e.target.matches(".square")) {
    e.target.classList.add("active");
  }
});

inputGridNumber.addEventListener("input", function (e) {
  squareSize = e.target.value;
  gridText.textContent = `${squareSize}x${squareSize} Grid Size`;
});

applyButton.addEventListener("click", function () {
  reset();
});

resetButton.addEventListener("click", function () {
  reset();
});
