// TEXTAREA
const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});

// NAVBAR
const navbar = document.querySelector(".navbar");
let isHovered = false;

window.addEventListener("scroll", function () {
  if (!isHovered) {
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  }
});

navbar.addEventListener("mouseenter", function () {
  isHovered = true;
  navbar.classList.remove("shrink");
});

navbar.addEventListener("mouseleave", function () {
  isHovered = false;
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  }
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".navbar-container ul");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("open");
  navList.classList.toggle("active");
});

// LAZY LOADING
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".hidden-section, .hidden-section-right"
  );

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-section");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
