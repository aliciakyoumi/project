// Function to handle the welcome message on the homepage
function showWelcomeMessage() {
    // Check if we are on the homepage by looking for the welcome-message element
    const welcomeElement = document.getElementById('welcome-message');
    if (welcomeElement) {
        var username = prompt('Halo Cat Lovers!! Siapakah nama Anda?');
        if (username) {
            welcomeElement.innerText = "Hi " + username + ", Welcome to Website CAT LOVERS!!";
        } else {
            welcomeElement.innerText = "Welcome to Website CAT LOVERS!!";
        }
    }
}

// Function to validate the suggestion form on the message.html page
function validateSuggestionForm() {
    // Get input values
    const name = document.forms['suggestion-form']['full-name'].value;
    const email = document.forms['suggestion-form']['email'].value;
    const suggestion = document.forms['suggestion-form']['suggestion'].value;

    // Simple validation
    if (name === "" || email === "" || suggestion === "") {
        alert("Harap lengkapi semua kolom sebelum mengirim!");
        return false; // Prevent form submission
    }
    
    // Set output values
    document.getElementById('sender-full-name-suggestion').innerText = name;
    document.getElementById('sender-email-suggestion').innerText = email;
    document.getElementById('sender-suggestion').innerText = suggestion;
    
    // Show the output section
    document.getElementById('form-output-section-suggestion').style.display = 'block';
    
    // Prevent the form from actually submitting and refreshing the page
    return false;
}


// Run the welcome message logic when the page loads
window.onload = showWelcomeMessage;
