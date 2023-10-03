'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}
const portfolioCard = document.querySelector('.portfolio-card')
const linkSee = document.querySelector('.see-project')
function showLink() {
  linkSee.style.display = 'flex'
}
function hideLink() {
  linkSee.style.display = 'none'
}
portfolioCard.addEventListener('mouseover', showLink)
portfolioCard.addEventListener('mouseout', hideLink)



/**
 * FOOTER
 */

const dateText = document.querySelector('.footer-date');
const date = new Date()
const currentYear = date.getFullYear();
console.log(currentYear)
dateText.textContent = currentYear;

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});