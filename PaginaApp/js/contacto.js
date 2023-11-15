document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var subject = document.getElementById("subject");
        var message = document.getElementById("message");

        // Reset previous error messages
        name.nextElementSibling.textContent = "";
        email.nextElementSibling.textContent = "";
        subject.nextElementSibling.textContent = "";
        message.nextElementSibling.textContent = "";

        // Add your validation logic here
        if (name.value.trim() === "") {
            name.nextElementSibling.textContent = "Por favor ingrese su nombre";
            event.preventDefault();
        }

        if (email.value.trim() === "") {
            email.nextElementSibling.textContent = "Por favor ingrese su correo";
            event.preventDefault();
        }

        if (subject.value.trim() === "") {
            subject.nextElementSibling.textContent = "Por favor ingrese su asunto";
            event.preventDefault();
        }

        if (message.value.trim() === "") {
            message.nextElementSibling.textContent = "Por favor ingrese su mensaje";
            event.preventDefault();
        }
    });
});
