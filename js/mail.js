

emailjs.init("O7YZYIn2FYCy0kwsq")

const form = document.getElementById("plan-trip-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne reîncărcarea paginii

    // Trimite datele formularului prin EmailJS
    emailjs.sendForm("service_hm9n2", "template_xm8ofdn", form)
        .then(function (response) {
            alert("E-mail was sent. Thank you!");
            console.log("Succes:", response.status, response.text);
            form.reset(); // Resetează formularul după trimitere
        }, function (error) {
            alert("Error sending the message");
            console.error("Error:", error);
        });
});