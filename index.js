const toggleBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// script.js
document.querySelector('.hero-cta').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector(e.target.getAttribute('href'))
          .scrollIntoView({ behavior: 'smooth' });
});
