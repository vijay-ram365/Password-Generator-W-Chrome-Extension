// get html elements
const passBtn = document.getElementById("pw-btn");
const inputLength = document.getElementById("quantity");
const divPasswords = document.getElementById("password");

// store passwords in empty array
let passwordsStorage = [];
// an array of letters, numbers and special characters
let passCharacters = [
  "a",
  "A",
  "b",
  "B",
  "c",
  "C",
  "d",
  "D",
  "e",
  "E",
  "f",
  "F",
  "g",
  "G",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "!",
  "@",
  "?",
  "#",
  "$",
];

// create random value function from array
newPassword = function () {
  return passCharacters[Math.floor(Math.random() * passCharacters.length)];
};

//generate new password function
generatedPassword = function () {
  for (let i = 0; i <= inputLength.value - 1; i++) {
    let np = newPassword(i);
    passwordsStorage.push(np);
  }
};

// add click function, show password in HTML, and reset password storage array to prevent duplication
passBtn.addEventListener("click", function () {
  generatedPassword();
  let displayPass = passwordsStorage.join("");
  divPasswords.innerHTML += `
  <p>${displayPass}</p>
  `;
  passwordsStorage = [];
});
