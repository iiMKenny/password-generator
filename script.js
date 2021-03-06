// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Assignment code here

// length of password (has to be between 8-128 characters).
var length = Number(prompt("How many character would you like your password to be? Please type a number between 8 and 128"));
console.log(length);
// which characters
var charType = prompt("Which character type would you like: lowercase, uppercase, numeric, special?");
console.log(charType);

// function to generate password
function generatePassword() {
    //character type selector
    var charSet = "";
    var charTypeLower = charType.toLowerCase();
    if( charTypeLower === "lowercase" ) {
        charSet = "abcdefghijklmnopqrstuvwxyz";
    } else if( charTypeLower === "uppercase" ) {
        charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if( charTypeLower === "numeric" ) {
        charSet = "0123456789";
    } else if( charTypeLower === "special" ) {
        charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }
//return value
var retVal = "";
for (var i = 0; i < length; i++) {
    //will pick a random character from the defined parameters
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
}
return retVal;
}
alert(generatePassword());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);