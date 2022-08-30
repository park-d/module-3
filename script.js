// On button click, prompt user for password length
  // if password length is valid (ie not blank, or words and the right length), move on to other criteria
  // for other criteria, they can choose to include lower, upper, number, or special characters. must choose at least one
  //generate random characters based on criteria
  // display in the box given


// Assignment Code

var charactersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charactersNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charactersSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "<", ">", "+", "=", "-", "_", "[", "]", ":", ";", "?", "/"];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

