const nav = document.querySelector("nav");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

function onDrag({ movementX, movementY }) {
  const navStyle = window.getComputedStyle(nav);
  const navTop = parseInt(navStyle.top);
  const navLeft = parseInt(navStyle.left);

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  let newTop = navTop + movementY;
  let newLeft = navLeft + movementX;

  // Vertical movement boundaries
  if (newTop < 0) newTop = 0;
  else if (newTop > windowHeight - nav.offsetHeight)
    newTop = windowHeight - nav.offsetHeight;

  // Horizontal movement boundaries
  if (newLeft < 0) newLeft = 0;
  else if (newLeft > windowWidth - nav.offsetWidth)
    newLeft = windowWidth - nav.offsetWidth;

  // Set the new top and left values
  nav.style.top = `${newTop}px`;
  nav.style.left = `${newLeft}px`;
}

nav.addEventListener("mousedown", () => {
  nav.addEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseup", () => {
  nav.removeEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseleave", () => {
  nav.removeEventListener("mousemove", onDrag);
});

// Toggles the search container
const searchIcon = document.querySelector(".fa-magnifying-glass").parentNode;
const searchBox = document.querySelector(".search-box");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("show");
});

// Toggles the Boostlet container
const rectIcon = document.querySelector(".fa-sharp.fa-solid.fa-b").parentNode;
const rectBox = document.querySelector(".rect-box");

rectIcon.addEventListener("click", () => {
  rectBox.classList.toggle("show");
});

// Toggles the edit box container
const penIcon = document.querySelector(".fa-regular.fa-pen-to-square");
const editContainer = document.querySelector(".edit-box");

penIcon.addEventListener("click", () => {
  editContainer.classList.toggle("show");
});

// *********************** for boostlet icon ******************************
//on clicking ML
const mlBtn = document.querySelector(".rect-btn.ML");
const mlRectBox = document.querySelector(".rect-box.ML");

mlBtn.addEventListener("click", () => {
  mlRectBox.style.display = "flex";
});
const backArrowMl = document.querySelector(".back-arrow.ML");
backArrowMl.addEventListener("click", () => {
  mlRectBox.style.display = "none";
});

//on clicking LLM

const llmBtn = document.querySelector(".rect-btn.LLM");
const llmRectBox = document.querySelector(".rect-box.LLM");
llmBtn.addEventListener("click", () => {
  llmRectBox.style.display = "flex";
});
const backArrowLLM = document.querySelector(".back-arrow.LLM");
backArrowLLM.addEventListener("click", () => {
  llmRectBox.style.display = "none";
});

//on clicking Filters

const filtersBtn = document.querySelector(".rect-btn.Filters");
const filtersRectBox = document.querySelector(".rect-box.Filters");
filtersBtn.addEventListener("click", () => {
  filtersRectBox.style.display = "flex";
});
const backArrowFilters = document.querySelector(".back-arrow.Filters");
backArrowFilters.addEventListener("click", () => {
  filtersRectBox.style.display = "none";
});

//on clicking Data Viz

const DataVizBtn = document.querySelector(".rect-btn.DataViz");
const DataVizRectBox = document.querySelector(".rect-box.DataViz");
DataVizBtn.addEventListener("click", () => {
  DataVizRectBox.style.display = "flex";
});
const backArrowDataViz = document.querySelector(".back-arrow.DataViz");
backArrowDataViz.addEventListener("click", () => {
  DataVizRectBox.style.display = "none";
});

// *********************** for edit box  icon ******************************x

var editor = ace.edit("editor");
editor.setTheme("ace/theme/chaos");
editor.session.setMode("ace/mode/javascript");

function runCode() {
  const userCode = editor.getValue(); // Get the code from the editor
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear previous outputs

  // Capture console.log output
  console.log = function (message) {
    outputDiv.innerHTML += message + "<br>"; // Append new log messages to the output div
  };

  try {
    eval(userCode); // Execute the user code
  } catch (e) {
    console.log("Error: " + e.message); // Display errors in the output div
  }
}

// // Function to run the code from the input and display output
// function runCode(inputElement, labelElement) {
//   try {
//     // Since we cannot use 'eval' here for security reasons,
//     // You will need to implement a secure way to run the JavaScript code.
//     // This could be a Function constructor or other sandboxing technique.
//     const result = Function(
//       '"use strict";return (' + inputElement.value + ")"
//     )();
//     labelElement.textContent = `Result: ${result}`;
//   } catch (error) {
//     labelElement.textContent = `Error: ${error.message}`;
//   }
// }

// // Event listener for each run button
// document.querySelectorAll(".run-button").forEach((button, index) => {
//   button.addEventListener("click", () => {
//     const inputElement = document.querySelectorAll(".code-input")[index];
//     const labelElement = document.querySelectorAll(".output-label")[index];
//     runCode(inputElement, labelElement);
//   });
// });

// // Assume there is a 'Run' button that executes this function
// function runCommand() {
//   const input = document.getElementById("codeInput").value;
//   const editBox = document.querySelector(".edit-box");

//   // Create a new label element
//   let outputLabel = document.createElement("label");
//   outputLabel.textContent = `You entered: ${input}`;

//   // Append the new label to the edit box
//   editBox.appendChild(outputLabel);

//   // Adjust the edit box height if needed, but this will be handled by CSS automatically
// }

// // Optional: You might want to clear previous output before adding a new one
// function clearPreviousOutput() {
//   const labels = document.querySelectorAll(".edit-box label");
//   labels.forEach((label) => label.remove());
// }
