// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare global data
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["`","~","!","@","#","$","%","^","&","*","(",")","-","=","[","]",";","'",",",".","/","_","+","{","}","|",":","<",">","?"];
var allChars = uppercase.concat(lowercase, numbers, specialChars);

function generatePassword() {
// Ask user password length and store answer in variable "pwLength"
  var pwLength = prompt("How long would you like your password to be?", "Must be 8 - 128 characters");

// Validate answer for length requirement
  if (pwLength < 8 || pwLength > 128) {
    generatePassword();
  } else {
      var upper = confirm("WOULD YOU LIKE TO ADD UPPERCASE LETTERS?");
      if (upper == true) {
        var lower = confirm("would you like to add lowercase letters?");
        if (lower == true) { 
          var nums = confirm("W0uld y0u l1k3 t0 add numb3r5?");
          if (nums == true) {
            var specials = confirm("Would you like to add $?ec!@| characters?");
            if (specials == true){
              alert("k thx.");
            }
          }
        }
      }  
  }
  return;
}
      
// Ask which character sets to include
 generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
if (condition) {
  
} else {
  
}