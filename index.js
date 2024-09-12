/*document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector('.email-login button');

    loginButton.addEventListener('click', function() {
        // Get the email and password input values
        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;
        
        // Check if email or password is empty
        if (!emailInput || !passwordInput) {
            alert("Please enter both email and password.");
            return;
        }
    });
}); */
function validateForm(){
    const emailid = document.getElementById("email").value;
    const passwd = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    if(emailid==="" || passwd===""){
        errorMessage.textContent = "Email and password cannot be empty.";
        return false;
    }
    else if(passwd.length < 6){
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }
    else{
        alert(`Login successfully -${emailid}`);
    }
}