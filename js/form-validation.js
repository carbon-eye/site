document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const messageBox = document.getElementById("form-message");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        messageBox.classList.remove("error", "success");

        if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
            messageBox.classList.add("error");
            messageBox.textContent = "Por favor preencha os campos.";
        } else {
            messageBox.classList.add("success");
            messageBox.textContent = "Mensagem enviada com sucesso!";
            form.reset();
        }
    });
});