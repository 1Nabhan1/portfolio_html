
(function () {
    emailjs.init("riQcNNy2Rmv84LGGf"); // Initialize EmailJS with userId
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();





    if (name === '' || email === '' || message === '') {
        showSnackbar("Field's can't be empty!", "warning");
        return;
    }

    // Collect form data
    const serviceId = "service_wavflts";
    const templateId = "template_ynvtmif";

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: `Name: ${document.getElementById("name").value}, 
      Email: ${document.getElementById("email").value}, 
      Message: ${document.getElementById("message").value}`
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams)
        .then(response => {
            showSnackbar("Email sent successfully!", "success");
            document.getElementById("contact-form").reset(); // Reset form after success
        })
        .catch(error => {
            showSnackbar("Failed to sent Email!", "error");
            console.error("EmailJS error:", error);
        });
});

