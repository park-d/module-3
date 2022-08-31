// On button click, prompt user for password length
  // if password length is valid (ie not blank, or words and the right length), move on to other criteria
  // for other criteria, they can choose to include lower, upper, number, or special characters. must choose at least one
  //generate random characters based on criteria
  // display in the box given


//////////////////////////////----------MY CODE BEGINS HERE----------//////////////////////////////

//defining the arrays that contain all possible characters
var charactersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charactersUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charactersNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charactersSpecial = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', '<', '>', '+', '=', '-', '_', '[', ']', ':', ';', '?', '/'];
var pwdCriteria = []
var pwdLength = ""


function pwdInputs() {
  //creating empty array in which to put the included arrays from above
  pwdCriteria = [];

  //initial prompt for password length
  pwdLength = parseInt(prompt('Choose password length: Password must contain between 8 - 128 characters.'))

  // error checking for password length criteria
  if (pwdLength < 8 || pwdLength > 128) {
    alert('Password must contain between 8 - 128 characters.');
    return null;
  }

  if (!pwdLength) {  
    alert('Please enter a valid number.');
    return null;
  }
  //end error checking

  //prompting user to select which character types to include
  var includesLowercase = confirm('Click OK to include lowercase characters.');
  var includesUppercase = confirm('Click OK to include uppercase characters.');
  var includesNumeric = confirm('Click OK to include numeric characters.');
  var includesSpecial = confirm('Click OK to include special characters.');

  // using if logic to put the entire array into an empty array if the criteria was chosen (for each criteria chosen)
  if(includesLowercase == true){
    pwdCriteria = pwdCriteria.concat(charactersLowercase);
  }

  if(includesUppercase == true){
    pwdCriteria = pwdCriteria.concat(charactersUppercase);
  }

  if(includesNumeric == true){
    pwdCriteria = pwdCriteria.concat(charactersNumeric);
  }

  if(includesSpecial == true){
    pwdCriteria = pwdCriteria.concat(charactersSpecial);
  }

  // error checking for including at least one character type
  if (!includesLowercase && !includesUppercase && !includesNumeric && !includesSpecial) {
    alert('You must choose at least one character type.');
    return null;
  }
  // end error checking

  return null;
}

function generatePassword(){
  var pwdGenerated = "";

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
  //added second fuction to call here
  pwdInputs();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

