function checkPassword() {
    var password = document.getElementById("passwordInput").value;

    // Send password to backend for strength check
    fetch('/check_password_strength', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password }),
    })
    .then(response => response.json())
    .then(data => {
        var strengthIndicator = document.getElementById("strengthIndicator");
        strengthIndicator.textContent = "Password Strength: " + data.strength;

        // Set color based on strength score
        if (data.strength < 4) {
            strengthIndicator.style.color = "red";
        } else if (data.strength < 8) {
            strengthIndicator.style.color = "orange";
        } else {
            strengthIndicator.style.color = "green";
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
