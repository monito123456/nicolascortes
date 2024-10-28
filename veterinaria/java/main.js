document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        console.log("Nombre:", name);
        console.log("Correo Electrónico:", email);
        console.log("Mensaje:", message);

        alert("¡Mensaje enviado con éxito!");

        form.reset();
    });
});
