/*typing*/
const phrases = ["Robust Security", "Advanced Analytics", "Seamless Effort"];
const typingText = document.getElementById("typing-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex++);
  }
let speed = isDeleting ? 50 : 100;
if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 1000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 500;
  }
  setTimeout(type, speed);
}
document.addEventListener("DOMContentLoaded", type);
window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      });
        window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
/*testinomial*/
const container = document.getElementById("testimonial-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let index = 0;
const cards = document.querySelectorAll(".testimonial-card");
const totalCards = cards.length;
const visibleCards = 3;
const moveAmount = 100 / visibleCards; 
function updateCarousel() {
    container.style.transform = `translateX(-${index * moveAmount}%)`;
}function nextSlide() {
    index++;
    if (index > totalCards - visibleCards) {
        index = 0; 
    }
    updateCarousel();
}
function prevSlide() {
    index--;
    if (index < 0) {
        index = totalCards - visibleCards;
    }
    updateCarousel();
}
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});
prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});
let autoSlideInterval;
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}
startAutoSlide();
/*faq*/
document.querySelectorAll(".faq-question").forEach(btn => {
      btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        btn.classList.toggle("active");
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
/*team*/
    document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.team-wrapper');
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  const cards = document.querySelectorAll('.team-card');
  const visible = 3, total = cards.length, pages = Math.ceil(total / visible);
  let index = 0;
const cardW = () => cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginRight) + parseFloat(getComputedStyle(cards[0]).marginLeft);
  const update = () => {
    wrapper.style.transform = `translateX(${-index * cardW() * visible}px)`;
    prev.disabled = index === 0;
    next.disabled = index === pages - 1;
  };
next.onclick = () => index < pages - 1 && (index++, update());
  prev.onclick = () => index > 0 && (index--, update());
  window.onresize = update;
  update();
});
/*sections*/
document.addEventListener("DOMContentLoaded", () => {
    const sectionMap = {
        "About": ".our-story-section",
        "Features": ".features-section",
        "Services": ".services-section",
        "Pricing": ".pricing-section",  
        "Contact": ".contact-section",  
        "dropdown": ".hero-section"
    };
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            const text = link.textContent.trim();
            if (sectionMap[text]) {
                e.preventDefault();
                const target = document.querySelector(sectionMap[text]);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
    const dropdownToggle = document.querySelector("#navbarDropdown");
    if (dropdownToggle) {
        dropdownToggle.addEventListener("click", (e) => {
            e.preventDefault();
            const hero = document.querySelector(sectionMap["dropdown"]);
            if (hero) {
                hero.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const hero = document.querySelector(sectionMap["dropdown"]);
            if (hero) {
                hero.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

