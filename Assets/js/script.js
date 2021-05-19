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

var uppercaseConfirm;
var lowercaseConfirm;
var symbolConfirm;
var numberConfirm;
var characters = [];
var passwordLength;

//Function & Prompt for User to select password length from 8-128
function lengthPrompt() {
  while (length === "" || length === null || length < 8 || length > 128) {
    length = prompt(
      "How many characters would you like to include in your password? Please select a number between 8-128."
    );

    if (length >= 8 && length <= 128) {
      return length;
    } else {
      alert("Please enter valid option.");
    }
  }
}

//Functions to generate random characters
function getRandomUppercase() {
  var randomUpper =
    uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];

  return randomUpper;
}

function getRandomLowercase() {
  var randomLower =
    lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];

  return randomLower;
}

function getRandomSymbol() {
  var randomSymbol =
    specialChar[Math.floor(Math.random() * specialChar.length)];

  return randomSymbol;
}

function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 9);

  return randomNumber;
}

var generatePassword = function () {
  var generatedPassword = "";

  //prompts
  lengthPrompt();

  uppercaseConfirm = confirm(
    "Would you like to include Uppercase characters in your password?"
  );

  lowercaseConfirm = confirm(
    "Would you like to include Lowercase characters in your password?"
  );

  symbolConfirm = confirm(
    "Would you like to include Number characters in your password?"
  );

  numberConfirm = confirm(
    "Would you like to include Symbols & Special characters in your password?"
  );

  var characterPrompts = function () {
    var promptCount =
      uppercaseConfirm + lowercaseConfirm + symbolConfirm + numberConfirm;
    console.log("User confirmed " + promptCount + " types of characters");

    if (promptCount === 0) {
      alert("You must select at least one character type.");
      characterPrompts();
    } else {
      console.log(promptCount);
      return promptCount;
    }
  };

  for (var i = 0; i <= length; i++) {
    if (uppercaseConfirm) {
      generatedPassword += getRandomUppercase();
    }

    if (generatedPassword.length == length) {
      return generatedPassword;
    }

    if (lowercaseConfirm) {
      generatedPassword += getRandomLowercase();
    }

    if (generatedPassword.length == length) {
      return generatedPassword;
    }

    if (symbolConfirm) {
      generatedPassword += getRandomSymbol();
    }

    if (generatedPassword.length == length) {
      return generatedPassword;
    }

    if (numberConfirm) {
      generatedPassword += getRandomNumber();
    }
  }
  if (generatedPassword.length == length) {
    return generatedPassword;
  }

  return generatedPassword;
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
