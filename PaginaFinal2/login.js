document.getElementById("signInBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  
  if (!email || !password) {
    errorMessage.textContent = "Por favor, complete los campos para continuar.";
    return;
  }

  const correctPassword = "12345"; 
  if (password === correctPassword) {
    errorMessage.textContent = ""; 
    alert("Inicio de sesión exitoso");
    window.location.href = "categoria.html"; 
  } else {
    errorMessage.textContent = "Contraseña incorrecta. Inténtelo de nuevo.";
  }
});

document.getElementById("googleSignInBtn").addEventListener("click", function () {
  window.location.href = "https://accounts.google.com/signin";

  
});

document.getElementById("signUpLink").addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "register.html"; 
});


  
  