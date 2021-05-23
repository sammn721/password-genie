// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare global data
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["`","~","!","@","#","$","%","^","&","*","(",")","-","=","[","]","\\",";","'",",",".","/","_","+","{","}","|",":","\"","<",">","?"];



function generatePassword() {
  // Variables to be reset by clicking button
  var userChars = [];
  var newPassword = "";
// Ask user password length and store answer in variable `pwLength`
  var pwLength = prompt("How many characters would you like your password to be?", "Min: 8 / Max: 128");

// Validate answer for length requirement
  pwLength = parseInt(pwLength);
  if (pwLength >= 8 && pwLength <= 128) {
    // Ask which character sets to include
    var userUpper = confirm("Would you like to add uppercase letters?");
    var userLower = confirm("Would you like to add lowercase letters?");
    var userNumber = confirm("Would you like to add numbers?");
    var userSpecial = confirm("Would you like to add special characters?");
    
    // character type conditionals
    if (userUpper) {
      userChars.push(uppercase);
    }
    if (userLower) {
      userChars.push(lowercase);
    }
    if (userNumber) {
      userChars.push(numbers);
    }
    if (userSpecial) {
      userChars.push(specials);
    }
    // Must choose at least one type
    if (!userUpper && !userLower && !userNumber && !userSpecial) {
      alert("Please select at least one type of character.");
      return "";
      }
    } else {
      // Must choose valid length
      alert("Password must be between 8 and 128 characters.");
      return "";
    }
    // Random selection of type per character
    for ( i = 0; i < pwLength; i++) {
      var charType = userChars[Math.floor(Math.random()*userChars.length)];
      var randomChar = charType[Math.floor(Math.random()*charType.length)];
      newPassword += randomChar;
    }

  password = newPassword;
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);