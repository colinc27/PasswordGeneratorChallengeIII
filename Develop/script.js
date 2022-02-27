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
   var characterS = window.prompt('How many characters long would you like your password?');
   var upperQ = window.confirm("Would you like your password to have upper case letters? (OK for yes, Cancel for no)");
   var numberQ = window.confirm("Would you like your password to have numbers? (OK for yes, Cancel for no)");
   var specialQ = window.confirm("Would you like your password to have special characters? (OK for yes, Cancel for no)");
   //Setup string for the password based on the questions above
   var characterAdd = lower;
   if(upperQ) characterAdd = characterAdd.concat(upper);
   if(numberQ) characterAdd = characterAdd.concat(numbers);
   if(specialQ) characterAdd = characterAdd.concat(symbol);
   console.log(characterAdd);
   //setup for loop that crates password
   var passwordText = [];
   for(i = 0; i < characterS; i++){
      var passChar = characterAdd[Math.floor(Math.random()*characterAdd.length)]
      passwordText.push(String(passChar));
   }
   console.log(passwordText);
   var password = passwordText.join("");
   console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
