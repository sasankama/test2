// Smooth scrolling for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Typing effect in About section (optional)
const aboutText = "Hello! I'm a web developer passionate about building interactive, user-friendly websites and applications.";
let index = 0;
const typingElement = document.querySelector('#about p');

function typeText() {
    if (typingElement && index < aboutText.length) {
        typingElement.innerHTML += aboutText.charAt(index);
        index++;
        setTimeout(typeText, 30);
    }
}

window.addEventListener('DOMContentLoaded', typeText);

// Scroll to top button (if you want to add a button)
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "↑ Top";
scrollToTopBtn.id = "scrollToTopBtn";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "20px";
scrollToTopBtn.style.padding = "10px 15px";
scrollToTopBtn.style.display = "none";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.borderRadius = "5px";
scrollToTopBtn.style.backgroundColor = "#333";
scrollToTopBtn.style.color = "#fff";
scrollToTopBtn.style.cursor = "pointer";

document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
