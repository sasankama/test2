// Smooth scroll handled by CSS: scroll-behavior: smooth;

// Typing effect
const text = "Hello! I'm a web developer passionate about building interactive, user-friendly websites and applications.";
let index = 0;
const typingTarget = document.getElementById("typing-text");

function typeWriter() {
  if (typingTarget && index < text.length) {
    typingTarget.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 30);
  }
}
window.addEventListener("DOMContentLoaded", typeWriter);

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
