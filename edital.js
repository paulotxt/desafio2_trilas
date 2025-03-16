    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        const mensagemSucesso = document.createElement("div");
        mensagemSucesso.style.display = "none";
        mensagemSucesso.style.color = "green";
        mensagemSucesso.style.fontSize = "16px";
        mensagemSucesso.style.marginTop = "10px";
        form.appendChild(mensagemSucesso);

        form.addEventListener("submit", function (event) {
            event.preventDefault(); 
            mensagemSucesso.textContent = "As informações foram enviadas com sucesso!";
            mensagemSucesso.style.display = "block";

            setTimeout(() => {
                mensagemSucesso.style.display = "none";
                form.reset(); 
            }, 3000);
        });
    });
