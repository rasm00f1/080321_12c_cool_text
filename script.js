"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const input = document.querySelector(".cooltext").textContent;
  const container = document.querySelector(".cooltext");
  document.querySelector(".cooltext").textContent = "";

  displayText(input, container);
}

function displayText(input, container) {
  const inputArray = input.split("");
  console.log(inputArray);

  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    const documentLetterElement = document.createElement("span");
    if (element === " ") {
      documentLetterElement.innerHTML = "&nbsp;";
      documentLetterElement.classList.add("cooltext", "letter");
      documentLetterElement.style.setProperty("--delay", i);
      container.append(documentLetterElement);
    } else {
      documentLetterElement.textContent = element;
      documentLetterElement.classList.add("cooltext", "letter");
      documentLetterElement.style.setProperty("--delay", i);
      container.append(documentLetterElement);
    }
  }
}
