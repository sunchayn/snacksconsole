const mobileMenu = document.getElementById('mobile-menu');
const toggles = document.querySelectorAll('.toggle-menu');

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', function(e) {
    // e.preventDefault();
    if (mobileMenu.classList.contains('is-toggled')) {
      mobileMenu.classList.remove('is-toggled');
      scrollEnabled = true;
    } else {
      mobileMenu.classList.add('is-toggled');
      scrollEnabled = false;
    }
  });
}

mobileMenu.addEventListener('click', function(e) {
  if (!e.target.classList.contains('mobileMenu-item')) {
     mobileMenu.classList.remove('is-toggled');
     scrollEnabled = true;
  }
});
