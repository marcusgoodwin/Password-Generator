// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "!'#@$%^&*-+.<>;:[]{}()_=?/|";

// Write password to the #password input
function generatePassword() {
  var passwordLength = window.prompt("How long would you like your password?");
  
  if(passwordLength < 8 || passwordLength > 128){
    passwordLength = window.alert("Please enter a number greater than 8 and less than 128");
    return;
  }

  var useUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password?");
  var useLowerCase = window.confirm("Would you like to include LOWERCASE characters in your password?");
  var useSpecials = window.confirm("Would you like to include SPECIAL characters in your password?");
  var useNumbers = window.confirm("Would you like to include NUMBER characters in your password?");
  
  if(!useUpperCase && !useLowerCase && !useSpecials && !useNumbers){
    window.alert("Please select at least one category of criteria or Brent will find you.>:)");
    return;
  }

  var passwordChoices = '';
  var finishedPassword = '';

  if(useUpperCase == true){
    passwordChoices = passwordChoices + upperCase;
  }

  if(useLowerCase == true){
    passwordChoices = passwordChoices + lowerCase;
  }
  
  if(useSpecials == true){
    passwordChoices = passwordChoices + specials;
  }
  
  if(useNumbers == true){
    passwordChoices = passwordChoices + numbers;
  }

  console.log({passwordChoices});

  for (let i = 0; i < passwordLength; i++) {
    finishedPassword = finishedPassword + passwordChoices.charAt(Math.floor(Math.random() * passwordChoices.length - 1));
  }
  
  return finishedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);