
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');
const overlay = document.getElementById('overlay');

// Open menu
menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('translate-x-full'); // Toggle mobile menu visibility
    overlay.classList.toggle('hidden'); // Show overlay
});

closeMenu.addEventListener('click', function(){
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
})



// Close menu when clicking outside (on the overlay)
overlay.addEventListener('click', function() {
    mobileMenu.classList.add('translate-x-full'); // Hide mobile menu
    overlay.classList.add('hidden'); // Hide overlay
});
