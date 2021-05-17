// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var specialChar = [
  "!",
  '"',
  "'",
  "#",
  "$",
  "%",
  "&",
  ",",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var uppercaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//Object with Random Character Functions
var characters = {
  uppercase: getRandomUppercase,
  lowercase: getRandomLowercase,
  special: getRandomSymbol,
  numerical: getRandomNumber,
  //length: passwordLength,
};

/*Prompt for User to select password length from 8-128
var passwordLength = function () {
  while (length === "" || length === null || length < 3 || length > 128) {
    length = prompt(
      "How many characters would you like to include in your password? Please select a number between 8-128."
    );

    if (length >= 3 && length <= 128) {
      return length;
    } else {
      alert("Please enter valid option.");
    }
  }
};*/

//Functions to generate random functions
var getRandomUppercase = function () {
  var randomUpper =
    uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];

  console.log(randomUpper);
  return randomUpper;
};

var getRandomLowercase = function () {
  var randomLower =
    lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];

  console.log(randomLower);
  return randomLower;
};

var getRandomSymbol = function () {
  var randomSymbol =
    specialChar[Math.floor(Math.random() * specialChar.length)];

  console.log(randomSymbol);
  return randomSymbol;
};

var getRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 10);

  console.log(randomNumber);
  return randomNumber;
};

var generatePassword = function () {
  var uppercaseConfirm = confirm(
    "Would you like to include Uppercase characters in your password?"
  );

  var lowercaseConfirm = confirm(
    "Would you like to include Lowercase characters in your password?"
  );

  var symbolConfirm = confirm(
    "Would you like to include Number characters in your password?"
  );

  var numberConfirm = confirm(
    "Would you like to include Symbols & Special characters in your password?"
  );

  console.log(uppercaseConfirm, lowercaseConfirm, symbolConfirm, numberConfirm);
  // 1. create/int password var
  // 2. Filter false prompts
  // 3. loop over the length then call generator function for each type
  // 4. add final pw to the pwText.value and return
  // 5. https://www.youtube.com/watch?v=duNmhKgtcsI

  //passwordLength();

  getRandomUppercase();
  getRandomLowercase();
  getRandomSymbol();
  getRandomNumber();
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //console.log(passwordText);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt displays when User clicks generate password
// DONE >>>>> Prompt for User to select password length from 8-128
// Prompt for User to select which lowercase, uppercase, numeric, and/or special characters
// Each inputs should be validated
// At least one character type should be selected
// Password should be generated once all prompts are answered that matches the selected criteria
// Once the password is generated it should written to the page

/*example of working uppercase

var randomUppercase = function () {
  var uppercaseConfirm = confirm(
    "Would you like to include Uppercase characters in your password?"
  );

  if (uppercaseConfirm) {
    console.log(uppercaseConfirm);

    var uppercaseInputs = "";
    for (var i = 0; i <= length - 1; i++) {
      var uppercaseInputs =
        uppercaseInputs +
        uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
    }
    console.log(uppercaseInputs);
  } else {
    //if false, then move return to the loop and ask next question
  }
};

*/
