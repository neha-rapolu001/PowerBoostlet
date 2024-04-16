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

document.querySelectorAll(".rect-box .rect-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(`${e.target.textContent} was clicked`);
  });
});

// Toggles the text area container
const penIcon = document.querySelector(".fa-regular.fa-pen-to-square");
const textAreaContainer = document.querySelector(".text-area-container");

penIcon.addEventListener("click", () => {
  textAreaContainer.classList.toggle("show");
});



