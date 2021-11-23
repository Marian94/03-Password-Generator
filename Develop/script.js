// Assignment Code
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const SYMBOLS = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  ",",
  "*",
  "+",
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
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~",
];
const LETTERS = [
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
let MIN_LENGTH_PASSWORD = 8;
let MAX_LENGTH_PASSWORD = 128;
let UPPERCASE_FLAG = false;
let NUMBER_FLAG = false;
let SYMBOL_FLAG = false;

const generateBtn = document.querySelector("#generate");
const passwordConfigurationBtn = document.querySelector("#configuration");

// Write password to the #password input
function writePassword() {
  const passwordText = document.getElementById("password");
  const password = generatePassword(UPPERCASE_FLAG, NUMBER_FLAG, SYMBOL_FLAG);
  passwordText.textContent = `${password}\n\n\n <Password copied to clipboard>`;
  //Select the password and copy into the clipboard.
  passwordText.select();
  passwordText.setSelectionRange(0, password.length);
  navigator.clipboard.writeText(password);
}
/**
 * This function you can add the settings for the password
 */

function passwordConfiguration() {
  UPPERCASE_FLAG = confirm(
    "Do you want to includes Upper Case to your password?"
  );
  NUMBER_FLAG = confirm("Do you want to includes numbers?");
  SYMBOL_FLAG = confirm(
    "Do you want to includes special characters? I.E(!#$%&'()*+,...)"
  );
  writePassword();
}

/**
 * This function will return a random character in the Array given.
 */
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
/**
 * Declaration of the characters that will contain the password like: numbers, special characters and letters.
 * Also I will add the min and max length for the password.
 * This function will create the password. The password should have at least:
 * At least one special character,
 * At least number
 * At least one upper case letter.
 */
function generatePassword(UPPERCASE_FLAG, NUMBER_FLAG, SYMBOL_FLAG) {
  const PASSWORD = [];
  const passwordLength = Math.floor(
    Math.random() * (MAX_LENGTH_PASSWORD - MIN_LENGTH_PASSWORD) +
      MIN_LENGTH_PASSWORD
  );
  for (let i = 0; i < passwordLength; i++) {
    //If the index is divisible by 3 we are going to  upper case the letter and added to the password and continue to the next iteration
    if (UPPERCASE_FLAG && i % 3 == 0) {
      PASSWORD.push(randomElement(LETTERS).toUpperCase());
      continue;
    }
    //If the index number is divisible by 4 we are going to add special characters to the password and continue to the next iteration
    if (SYMBOL_FLAG && i % 4 == 0) {
      PASSWORD.push(randomElement(SYMBOLS));
      continue;
    }
    //If the index number is divisible by 2 we are going to add a number to the password and continue to the next iteration
    if (NUMBER_FLAG && i % 2 == 0) {
      PASSWORD.push(randomElement(NUMBERS));
      continue;
    }
    PASSWORD.push(randomElement(LETTERS));
  }
  return PASSWORD.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
passwordConfigurationBtn.addEventListener("click", passwordConfiguration);
