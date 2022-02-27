// Assignment code here
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbol = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
   var password = generate
   var passwordText = document.querySelector("#password");
   //Ask questions pertaining to the password
   var characterS = window.prompt('How many characters long would you like your password?');
   var upperQ = window.confirm("Would you like your password to have upper case letters? (OK for yes, Cancel for no)");
   var numberQ = window.confirm("Would you like your password to have numbers? (OK for yes, Cancel for no)");
   var specialQ = window.confirm("Would you like your password to have special characters? (OK for yes, Cancel for no)");
   var passwordOb = {
      characterS,
      upper,
      lower, 
      numbers,
      symbol,
   };
   var characterAdd = lower;
   if(upperQ) characterAdd = characterAdd.concat(upper);
   if(numberQ) characterAdd = characterAdd.concat(numbers);
   if(specialQ) characterAdd = characterAdd.concat(symbol);
   console.log(characterAdd);
   console.log(passwordOb)


 // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
