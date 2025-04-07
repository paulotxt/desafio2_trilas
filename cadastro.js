document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    let valid = true;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const senhaRep = document.getElementById("senhaRep");

    const errorNome = document.getElementById("error-nome");
    const errorEmail = document.getElementById("error-email");
    const errorSenha = document.getElementById("error-senha");
    const errorSenhaRep = document.getElementById("error-senhaRep");

    errorNome.textContent = "";
    errorEmail.textContent = "";
    errorSenha.textContent = "";
    errorSenhaRep.textContent = "";

    nome.classList.remove("error");
    email.classList.remove("error");
    senha.classList.remove("error");
    senhaRep.classList.remove("error");

    if (nome.value.trim().split(" ").length < 2) {
        errorNome.textContent = "Digite seu nome completo.";
        nome.classList.add("error");
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errorEmail.textContent = "Digite um e-mail válido.";
        email.classList.add("error");
        valid = false;
    }

    if (senha.value.length < 6) {
        errorSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
        senha.classList.add("error");
        valid = false;
    }

    if (senha.value !== senhaRep.value) {
        errorSenhaRep.textContent = "As senhas não coincidem.";
        senhaRep.classList.add("error");
        valid = false;
    }


    localStorage.setItem("formData", JSON.stringify({
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        senhaRep: senhaRep.value
    }));

    if (!valid) {
        event.preventDefault();
    } else {

        localStorage.removeItem("formData");
    }
});
