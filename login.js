function validarLogin() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var emailError = document.getElementById("email-error");
    var senhaError = document.getElementById("senha-error");

    emailError.style.display = "none";
    senhaError.style.display = "none";

    var isValid = true;

    if (email === "") {
        emailError.style.display = "block";
        isValid = false;
    }
    if (senha === "") {
        senhaError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        window.location.href = "pefil.html";
    }
}
