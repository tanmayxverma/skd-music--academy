
/* JavaScript (to be included in a separate script.js file or inside <script> tag in index.html) */
/* Paste the following script inside a <script> tag at the bottom of your index.html before </body> */

/* <script> */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whatsapp-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const course = document.getElementById("course").value;
    const age = document.getElementById("age").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !email || !address || !course || !age) {
      alert("Please fill all required fields.");
      return;
    }

    const whatsappMessage = `*New SKD Music Academy Registration*\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📧 Email: ${email}\n` +
      `🏠 Address: ${address}\n` +
      `🎵 Course: ${course}\n` +
      `🎂 Age: ${age}\n` +
      `📝 Message: ${message || 'N/A'}`;

    const whatsappNumber = "919797555421";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  });
});
/* </script> */
