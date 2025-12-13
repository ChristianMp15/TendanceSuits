// Initialize EmailJS
(function () {
  emailjs.init("2uqwJkUXAXxjbIEGs"); // 🔴 replace with your EmailJS public key
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("responseMsg");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    response.textContent = "Sending message...";
    response.style.color = "black";

    emailjs.sendForm(
      "service_s2mwkqp",   // 🔴 replace
      "template_afqehsu",  // 🔴 replace
      this
    ).then(
      function () {
        response.textContent = "Message sent successfully!";
        response.style.color = "green";
        form.reset();
      },
      function (error) {
        response.textContent = "Failed to send message. Please try again.";
        response.style.color = "red";
        console.error("EmailJS error:", error);
      }
    );
  });
});
