function showMessage(message, type) {
  const outputMessage = document.getElementById("output-message");
  outputMessage.textContent = message;
  outputMessage.className =
    "output-message " + (type === "success" ? "success" : "error");
  outputMessage.style.display = "block";
}

(function () {
  emailjs.init("1RLBBcYFI2u_YhPDw");
  console.log("EmailJS initialized");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    emailjs.sendForm("service_mw4if98", "template_tj9vkkd", this).then(
      function () {
        console.log("Email sent successfully");
        showMessage("Thank you! Your message has been sent.", "success");
      },
      function (error) {
        console.error("Error sending email:", error);
        showMessage(
          "Failed to send the message: " + JSON.stringify(error),
          "error"
        );
      }
    );
  });
