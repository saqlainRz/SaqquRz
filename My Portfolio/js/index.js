//text auto typening -

const textArray = ["Web Designer", "Front-end Developer"];

// Initialize variables
let typeJsText = document.querySelector(".animatedtext");
let stringIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeJs() {
  if (stringIndex < textArray.length) {
    const currentString = textArray[stringIndex];

    if (isTyping) {
      // Typing animation
      if (charIndex < currentString.length) {
        typeJsText.innerHTML += currentString.charAt(charIndex);
        charIndex++;
      } else {
        isTyping = false;
      }
    } else {
      if (charIndex > 0) {
        typeJsText.innerHTML = currentString.substring(0, charIndex - 1);
        charIndex--;
      } else {
        isTyping = true;
        stringIndex++;

        if (stringIndex >= textArray.length) {
          stringIndex = 0;
        }

        charIndex = 0;
        typeJsText.innerHTML = "";
      }
    }
  }
}

setInterval(typeJs, 100);

// responsive navbar

const bars = document.querySelector(".bars");
const nav = document.querySelector("nav");

bars.onclick = () => {
  nav.classList.toggle("active");
};

// texting scroll

// Сразу создаём переменные
let nave = document.getElementById("navebar").classList;
let active_class = "navebar_scrolled";

// my skills

("use strict");

function progressBarAndCountNumber() {
  const progress = document.querySelectorAll(".progress");
  let count = 0;
  // You must put the maximum number in the MAX variable.
  let MAX = 80;

  let run = setInterval(() => {
    count++;
    progress.forEach((element) => {
      if (count <= element.dataset.progress) {
        element.parentElement.style.background = `conic-gradient(#ffd700 ${count}%, #957e05 0)`;
        element.firstElementChild.textContent = `${count}%`;
      }
      if (count == MAX) {
        clearInterval(run);
      }
    });
  }, 20);
}

progressBarAndCountNumber();
