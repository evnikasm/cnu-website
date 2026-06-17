// =========================
// NAVBAR SCROLL EFFECT
// =========================

const mainNav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    mainNav.classList.add("scrolled");
  } else {
    mainNav.classList.remove("scrolled");
  }

});

// =========================
// BURGER MENU
// =========================

const burger = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

if (burger && navLinks) {

  burger.addEventListener("click", () => {

    burger.classList.toggle("active");
    navLinks.classList.toggle("active");

    // animate links one by one
    const links = navLinks.querySelectorAll("a");

    links.forEach((link, index) => {

      if (link.style.animation) {

        link.style.animation = "";

      } else {

        link.style.animation =
          `navLinkFade 0.5s ease forwards ${index / 7 + 0.15}s`;

      }

    });

  });

}

// =========================
// COPY EMAIL
// =========================

const copyBtn = document.getElementById("copy-email");

if (copyBtn) {

  copyBtn.addEventListener("click", function (e) {

    e.preventDefault();

    navigator.clipboard.writeText(
      "chrzescijanienauni@gmail.com"
    );

    const span = this.querySelector("span");

    const original = span.textContent;

    span.textContent = "Copied!";

    this.classList.add("copied");

    setTimeout(() => {

      span.textContent = original;

      this.classList.remove("copied");

    }, 1600);

  });

}

// =========================
// more button
// =========================
document.querySelectorAll(".more-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    const text = btn.previousElementSibling;

    text.classList.toggle("collapsed");
    text.classList.toggle("expanded");

    btn.textContent =
      text.classList.contains("expanded")
        ? "Mniej"
        : "Więcej";
  });
});

function goToForm() {
  window.location.href = "formularz.html";
}
