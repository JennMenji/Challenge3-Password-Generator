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

//Function & Prompt for User to select password length from 8-128
function passwordLength() {
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
  return length;
}

//Functions to generate random characters
function getRandomUppercase() {
  var randomUpper =
    uppercaseChar[Math.floor(Math.random() * uppercaseChar.length - 1)];

  return randomUpper;
}

function getRandomLowercase() {
  var randomLower =
    lowercaseChar[Math.floor(Math.random() * lowercaseChar.length - 1)];

  return randomLower;
}

function getRandomSymbol() {
  var randomSymbol =
    specialChar[Math.floor(Math.random() * specialChar.length - 1)];

  return randomSymbol;
}

function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 9);

  return randomNumber;
}

var generatePassword = function () {
  passwordLength();

  var generatedPassword = "";

  //Character prompts: Might need to make these individual functions outside of generate password function
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

  console.log(length);
  // >>>Must fix for loop to generate password
  for (var i = 0; i <= length; i++) {
    if (uppercaseConfirm) {
      generatedPassword += getRandomUppercase();
      length--;
    }

    if (lowercaseConfirm) {
      generatedPassword += getRandomLowercase();
      length--;
    }

    if (symbolConfirm) {
      generatedPassword += getRandomSymbol();
      length--;

      console.log(generatedPassword);
    }

    if (numberConfirm) {
      generatedPassword += getRandomNumber();
      length--;
    }
  }

  return generatedPassword;
};

//return generatedPassword

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //console.log(passwordText);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// DONE >>>>> Prompt displays when User clicks generate password
// DONE >>>>> Prompt for User to select password length from 8-128
// DONE >>>>> Prompt for User to select which lowercase, uppercase, numeric, and/or special characters
// DONE >>>>> Each inputs should be validated
// DONE >>>>> At least one character type should be selected
// Password should be generated once all prompts are answered that matches the selected criteria
// Once the password is generated it should written to the page
