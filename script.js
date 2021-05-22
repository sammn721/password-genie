// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare global data
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["`","~","!","@","#","$","%","^","&","*","(",")","-","=","[","]","\\",";","'",",",".","/","_","+","{","}","|",":","\"","<",">","?"];
var userChars = [];

function generatePassword() {
// Ask user password length and store answer in variable `pwLength`
  var pwLength = prompt("How many characters would you like your password to be?");

// Validate answer for length requirement
  pwLength = parseInt(pwLength);
  if (pwLength >= 8 && pwLength <= 128) {
    // Ask which character sets to include
    var userUp = confirm("Would you like to add uppercase letters?");
    var userLo = confirm("Would you like to add lowercase letters?");
    var userNum = confirm("Would you like to add numbers?");
    var userSpe = confirm("Would you like to add special characters?");
    
    if( userUp ) {
      userChars.push(uppercase);
    }
    if( userLo ) {
      userChars.push(lowercase);
    }
    if( userNum ) {
      userChars.push(numbers);
    }
    if( userSpe ) {
      userChars.push(specials);
    }

    if( !userUp && !userLo && !userNum && !userSpe ) {
    alert("Please select at least one type of character.");
    return "";
    }
  } else {
    alert("Password must be between 8 and 128 characters.");
    return "";
  }
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


// Subsequent clicks erase and generate new password
