// Assignment code here
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbol = "!@#$%^&*_-+=";
var characterS = window.prompt('How many characters long would you like your password?');
var upperQ = window.confirm("Would you like upper case letters?");
var lowerQ = window.confirm("Would you like lower case letters?");
var numberQ = window.confirm("Would you like numbers?");
var specialQ = window.confirm("Would you like special characters?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
   //var password = generatePassword();
  var passwordText = document.querySelector("#password");

 // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
