function checkPasswordStrength(password) {
    var strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 2;
    } else if (password.length >= 6) {
        strength += 1;
    }

    // Check for numbers, symbols, and uppercase letters
    var regex = /[$-/:-?{-~!"^_`\[\]]/; // Symbols
    if (password.match(/[0-9]/)) {
        strength += 2;
    }
    if (password.match(regex)) {
        strength += 2;
    }
    if (password.match(/[A-Z]/)) {
        strength += 2;
    }

    // Adjust strength score if password contains all types of characters
    if (password.match(/[0-9]/) && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(regex)) {
        strength += 2;
    }

    return strength;
}

function updateStrengthIndicator(strength) {
    var strengthIndicator = document.getElementById("strengthIndicator");
    strengthIndicator.textContent = "Password Strength: " + strength;

    // Set color based on strength score
    if (strength < 4) {
        strengthIndicator.style.color = "red";
    } else if (strength < 8) {
        strengthIndicator.style.color = "orange";
    } else {
        strengthIndicator.style.color = "green";
    }
}

function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var strength = checkPasswordStrength(password);
    updateStrengthIndicator(strength);
}
