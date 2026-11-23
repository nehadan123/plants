document.addEventListener("DOMContentLoaded", function () {
  // Opens and closes the menu on small screens.
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // Shows a thank-you message when the mailing list form is submitted (no email is actually sent).
  const form = document.getElementById("signup");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("signup-status").textContent = "Thanks for signing up!";
      form.reset();
    });
  }
});