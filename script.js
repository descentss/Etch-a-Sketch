"use strict";

const container = document.querySelector(".grid-container");

function creatediv(number) {
  for (let i = 0; i < number ** 2; i++) {
    const divElement = document.createElement("div");
    // Creates a new div element

    divElement.classList.add("grid-item");
    // adds the grid-item style in the element

    divElement.addEventListener("mouseover", showHover);
    divElement.addEventListener("mouseout", hideHover);

    container.appendChild(divElement);
    // Appends the div at the container
  }
}

function showHover(e) {
  e.target.style.backgroundColor = "lightblue";
}

function hideHover(e) {
  e.target.style.backgroundColor = "initial";
}

creatediv(16);
