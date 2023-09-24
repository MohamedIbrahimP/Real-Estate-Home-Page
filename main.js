const backToTopBtn = document.getElementById('backToTopBtn');

function toggleBackToTopButton() {
  if (window.scrollY > 100) { 
    backToTopBtn.style.opacity = '1';
  } else {
    backToTopBtn.style.opacity = '0';
  }
}


window.addEventListener('scroll', toggleBackToTopButton);

toggleBackToTopButton();

backToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});
