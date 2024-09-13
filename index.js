document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector('.email-login button');

    loginButton.addEventListener('click', function() {
        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;
        const errorMessage = document.getElementById("error-message");
        
        if (!emailInput || !passwordInput) {
            alert("Please enter both email and password.");
            return false;
        }
        else if(passwordInput.length < 6){
            errorMessage.textContent="Password must be at least 6 characters long";
            event.preventDefault()
            //alert("Password must be at least 6 characters long.");
            return false;
        }
        else{
            errorMessage.textContent = "";
            alert(`Login Successfully - ${emailInput}`);
            return true;
        }
    });
}); 
document.getElementById("password").addEventListener("input",function(){
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    if(passwordInput.length>=6){
        errorMessage.textContent = "";
    }

});

/* function validateForm(){
    //event.preventDefault();

    const emailid = document.getElementById("email").value;
    const passwd = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    //var check = false;

    //errorMessage.textContent="";
    if(emailid==="" || passwd===""){
        errorMessage.textContent = "Email and password cannot be empty.";
        return false;
    }
    else if(passwd.length < 6){
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }
    else{
        errorMessage.textContent = "";
        alert('Login Successfully - ${emailid}');
        return true;
    }

} 
document.getElementById("password").addEventListener("input",function(){
    const passwd = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    if(passwd.length>=6){
        errorMessage.textContent = "";
    }

}); */