
document.getElementById("createAccountBtn").addEventListener("click", function(event) {
    event.preventDefault(); 


    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    
    if (!username || !email || !password || !confirmPassword) {
        errorMessage.textContent = "Please complete all fields.";
        return;
    }

  
    if (password !== confirmPassword) {
        errorMessage.textContent = "The passwords do not match.";
        return;
    }

    
    alert("Cuenta creada exitosamente. Redirigiendo al inicio de sesión...");
    window.location.href = "Login.html";
});
