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
const MIN_LENGTH_PASSWORD = 8;
const MAX_LENGTH_PASSWORD = 128;
let passwordLength = 0;

const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passwordText = document.getElementById("password");
  const password = setPasswordConfiguration();
  passwordText.textContent = `${password}\n\n\n <Password copied to clipboard>`;
  //Select the password and copy into the clipboard.
  passwordText.select();
  passwordText.setSelectionRange(0, password.length);
  navigator.clipboard.writeText(password);
}
/**
 * This function validate that the length of the password is correct.
 */
function setPasswordLength() {
  passwordLength = parseFloat(
    prompt(
      `Add the length of the password (min ${MIN_LENGTH_PASSWORD}, max ${MAX_LENGTH_PASSWORD}) :`
    )
  );
  if (Number.isNaN(passwordLength)) {
    alert("Error this is not a valid number ");
    setPasswordLength();
  }
  if (
    passwordLength < MIN_LENGTH_PASSWORD ||
    passwordLength > MAX_LENGTH_PASSWORD
  ) {
    alert(
      `Error please select a valid number (min ${MIN_LENGTH_PASSWORD}, max ${MAX_LENGTH_PASSWORD}) `
    );
    setPasswordLength();
  }
  return passwordLength;
}
/**
 * This function you can add the settings for the password
 */
function setPasswordConfiguration() {
  let passwordFlags = {
    hasUppercaseChars: false,
    hasNumbers: false,
    hasSymbols: false,
  };
  passwordFlags.hasUppercaseChars = confirm(
    "Do you want to includes Upper Case to your password?"
  );
  passwordFlags.hasNumbers = confirm("Do you want to includes numbers?");
  passwordFlags.hasSymbols = confirm(
    "Do you want to includes special characters? I.E(!#$%&'()*+,...)"
  );
  passwordLength = setPasswordLength();
  return (password = generatePassword(passwordFlags));
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
function generatePassword({ hasUppercaseChars, hasNumbers, hasSymbols }) {
  const PASSWORD = [];
  for (let i = 0; i < passwordLength; i++) {
    //If the index is divisible by 3 we are going to  upper case the letter and added to the password and continue to the next iteration
    if (hasUppercaseChars && i % 3 == 0) {
      PASSWORD.push(randomElement(LETTERS).toUpperCase());
      continue;
    }
    //If the index number is divisible by 4 we are going to add special characters to the password and continue to the next iteration
    if (hasSymbols && i % 4 == 0) {
      PASSWORD.push(randomElement(SYMBOLS));
      continue;
    }
    //If the index number is divisible by 2 we are going to add a number to the password and continue to the next iteration
    if (hasNumbers && i % 2 == 0) {
      PASSWORD.push(randomElement(NUMBERS));
      continue;
    }
    PASSWORD.push(randomElement(LETTERS));
  }
  return PASSWORD.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
