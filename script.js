// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "!'#@$%^&*-+.<>;:[]{}()_=?/|";



// Write password to the #password input
function generatePassword() {
var generatedPassword;
  var passwordLength = window.prompt("How long would you like your password?");
  
  if(passwordLength < 8 || passwordLength > 128){
    passwordLength = window.alert("Please enter a number greater than 8 and less than 128");
    return;
  }

  return generatedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// return generatedPassword