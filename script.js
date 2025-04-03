document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;

      document.getElementById("response").innerHTML = `<p>Thank you, <strong>${name}</strong>! Your feedback has been submitted.</p>`;

      form.reset();
    });
  }
});
