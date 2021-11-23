// Assignment Code
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
 * This function will create the password. The password should have at least:
 * At least one special character,
 * At least number
 * At least one upper case letter.
 */
function generatePassword({ hasUppercaseChars, hasNumbers, hasSymbols }) {
  let password = "abcdefghijklmnopqrstuvwxyz";
  let passwordResult = "";
  if (hasUppercaseChars) {
    password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (hasNumbers) {
    password += "0123456789";
  }
  if (hasSymbols) {
    password += "!@#$%^&*()_-+=|}{[];:?/><,.~";
  }
  for (let i = 0; i < passwordLength; i++) {
    passwordResult += password.charAt(
      Math.floor(Math.random() * password.length)
    );
  }
  return passwordResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
