//  list of characters
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// event listener
generateBtn.addEventListener("click", writePassword);

// Function to generate a random password
function generatePassword() {
    // Prompt the user for the desired length of the password
    var length = prompt("Enter the desired length of the password (between 8 and 128 characters):");

    // 
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Invalid length! Please enter a number between 8 and 128.");
        return;
    }

    // Prompt the user for the desired character types to include in the password
    var includeLower = confirm("Include lowercase characters?");
    var includeUpper = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    // at least one character type is selected
    if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
        alert("At least one character type must be selected!");
        return;
    }

    //  password variable
    var password = "";

    //  selected criteria
    for (var i = 0; i < length; i++) {
        var charSet = "";
        if (includeLower) {
            charSet += lowerChars;
        }
        if (includeUpper) {
            charSet += upperChars;
        }
        if (includeNumeric) {
            charSet += numericChars;
        }
        if (includeSpecial) {
            charSet += specialChars;
        }
        var randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    //generated password
    return password;
};