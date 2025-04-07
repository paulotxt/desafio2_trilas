function validarLogin() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var emailError = document.getElementById("email-error");
    var senhaError = document.getElementById("senha-error");

    emailError.style.display = "none";
    senhaError.style.display = "none";
    email.classList.remove("error");
    senha.classList.remove("error");

    var isValid = true;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.style.display = "block";
        email.classList.add("error");
        isValid = false;
    }

    if (senha.value.trim() === "") {
        senhaError.style.display = "block";
        senha.classList.add("error");
        isValid = false;
    }


    localStorage.setItem("loginData", JSON.stringify({
        email: email.value,
        senha: senha.value 
    }));

    if (isValid) {
        window.location.href = "pefil.html";
    }
}
