// Simulated contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("responseMsg");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      response.textContent = `Thank you, ${name}! We’ll get back to you shortly.`;
      form.reset();
    });
  }
});
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent page reload
    
    // Send form data using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
        document.getElementById('responseMsg').textContent = "Message sent successfully!";
        document.getElementById('responseMsg').style.color = "green";
        document.getElementById('contactForm').reset();
    }, function(error) {
        document.getElementById('responseMsg').textContent = "Failed to send message. Try again.";
        document.getElementById('responseMsg').style.color = "red";
        console.error('EmailJS error:', error);
    });
});
