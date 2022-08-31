//////////////////////////////----------PSEUDO-CODE BEGINS HERE----------//////////////////////////////

// button click -> prompt asking for pwd length -> check that input fits requirements -> throw error if not -> check which character users want to include -> add those to an array when they choose yes -> error check for picking at least one criteria -> throw alert if not at least one -> use new array from chosen criteria to pick a random [index] in the array -> add that character that matches random index to a string value each time for the length of the chosen pwd length

//////////////////////////////----------MY CODE BEGINS HERE----------//////////////////////////////

//defining the arrays that contain all possible characters for generator
var charactersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charactersUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charactersNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charactersSpecial = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', '<', '>', '+', '=', '-', '_', '[', ']', ':', ';', '?', '/'];

function generatePassword() {
  //creating empty array in which to put the included arrays from above
  var pwdCriteria = [];

  //initial prompt for password length and turning it into a number because anything in a prompt window is a string
  var pwdLength = parseInt(prompt('Choose password length: Password must contain between 8 - 128 characters.'))

  // error checking for password length criteria, if not above 8 or not below 128 or if empty
  if ((pwdLength < 8) || (pwdLength > 128) || (!pwdLength)) {
    alert('Password must contain between 8 - 128 characters.');
    return null;
  }
  //end error checking

  //prompting user to select which character types to include and adding the characters to empty array if they choose OK
  //if user chooses to include Uppercase add to array pwdCriteria
  var includesLowercase = confirm('Click OK to include lowercase characters.');
  if (includesLowercase == true) {
    pwdCriteria = pwdCriteria.concat(charactersLowercase);
  }
  //if user chooses to include Lowercase add to array pwdCriteria
  var includesUppercase = confirm('Click OK to include uppercase characters.');
  if (includesUppercase == true) {
    pwdCriteria = pwdCriteria.concat(charactersUppercase);
  }
  //if user chooses to include Numeric add to array pwdCriteria
  var includesNumeric = confirm('Click OK to include numeric characters.');
  if (includesNumeric == true) {
    pwdCriteria = pwdCriteria.concat(charactersNumeric);
  }
  //if user chooses to include Special add to array pwdCriteria
  var includesSpecial = confirm('Click OK to include special characters.');
  if (includesSpecial == true) {
    pwdCriteria = pwdCriteria.concat(charactersSpecial);
  }

  // error checking the above prompts to check that at least one character type is included
  if (!includesLowercase && !includesUppercase && !includesNumeric && !includesSpecial) {
    alert('You must choose at least one character type.');
    return null;
  }
  //end error checking


  //create empty variable to store randomly generated password string choices
  var pwdGenerated = "";

  //creating a new variable to store randomly generated number between 0 and pwdLength
  //looping as many times as pwdLength to create a string that pulls a a random character from pwdCriteria and adds it to pwd Generated.
  //finally returns pwdGenerated so we can show password to user
  for (var i = 0; i < pwdLength; i++) {
    var charactersRandom = Math.floor(Math.random() * pwdCriteria.length);
    pwdGenerated = pwdGenerated + pwdCriteria[charactersRandom];
  }

  return pwdGenerated;
}

//////////////////////////////----------PROVIDED CODE BEGINS HERE----------//////////////////////////////

var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}