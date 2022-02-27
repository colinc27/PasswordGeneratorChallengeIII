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
   //Ask user about password criteria
   var characterS = window.prompt('How many characters long would you like your password between 8 and 128 characters? Please enter your value as a number');
      while( characterS > 128 || characterS < 8 || isNaN(characterS)) {
         var characterS = window.prompt('ERROR PLEASE RESUBMIT!!\n How many characters long would you like your password between 8 and 128 characters? Please enter your value as a number');
      }
   var upperQ = window.confirm("Would you like your password to have upper case letters? (OK for yes, Cancel for no)");
   var numberQ = window.confirm("Would you like your password to have numbers? (OK for yes, Cancel for no)");
   var specialQ = window.confirm("Would you like your password to have special characters? (OK for yes, Cancel for no)");
   //Setup string for the password based on the questions above
   var characterAdd = lower;
   if(upperQ) characterAdd = characterAdd.concat(upper);
   if(numberQ) characterAdd = characterAdd.concat(numbers);
   if(specialQ) characterAdd = characterAdd.concat(symbol);
   //setup for loop that creates password
   var passwordText = [];
   for(i = 0; i < characterS; i++){
      var passChar = characterAdd[Math.floor(Math.random()*characterAdd.length)]
      passwordText.push(String(passChar));
   }
   var password = passwordText.join("");
   console.log(passwordText);
   console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
