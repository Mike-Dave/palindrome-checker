"use strict";

// Selecting HTML elements
const enteredText = document.getElementById("text");
const btn = document.querySelector(".btn");
const checker = document.querySelector(".checker");
const checkerText = document.querySelector(".checker-text");
let enteredValue;

// To check for when the input field is empty
enteredText.addEventListener("keyup", function () {
  enteredValue = enteredText.value;
  if (enteredValue === "") {
    checker.classList.add("hidden");
  }
});

// Adding an event listener to the button
btn.addEventListener("click", function (e) {
  // Removing the default behaviour of the from from submitting
  e.preventDefault();

  enteredValue = enteredText.value;
  if (enteredValue) {
    checker.classList.remove("hidden");
  }
  checkerText.innerHTML = isPalindrome(enteredValue);
});

//  Palindrome function
function isPalindrome(check) {
  return check.toLowerCase().trim() ===
    check.toLowerCase().trim().split("").reverse().join("")
    ? `Yes <span>'${check}'</span> is a palindrome`
    : `No <span>'${check}'</span> isn't a palindrome`;
}
