// Define the character sets based on the OWASP foundation list of characters
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate a random password
function generatePassword() {
    // Prompt the user for the desired length of the password
    var length = prompt("Enter the desired length of the password (between 8 and 128 characters):");

    // Validate the length input
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Invalid length! Please enter a number between 8 and 128.");
        return;
    }

    // Prompt the user for the desired character types to include in the password
    var includeLower = confirm("Include lowercase characters?");
    var includeUpper = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    // Validate that at least one character type is selected
    if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
        alert("At least one character type must be selected!");
        return;
    }

    // Initialize the password variable
    var password = "";

    // Generate the password based on the selected criteria
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

    // Return the generated password
    return password;
};