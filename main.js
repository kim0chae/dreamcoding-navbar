const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.menu');
const snsLogo = document.querySelector('.snsLogo');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  snsLogo.classList.toggle('active');
});