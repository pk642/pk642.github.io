document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Simple validation check
      if (name && email && message) {
        document.getElementById("response").innerHTML = `
          <p>Thank you, <strong>${name}</strong>! Your feedback has been submitted.</p>
        `;
        form.reset();
      } else {
        document.getElementById("response").innerHTML = `<p style="color: red;">Please fill in all fields.</p>`;
      }
    });
  }
});
