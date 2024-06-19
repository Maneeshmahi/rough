// script.js

// Simple star movement effect when cursor moves
document.addEventListener('mousemove', function (e) {
    let stars = document.querySelector('.stars');
    stars.style.backgroundPositionX = `${e.clientX / 2}px`;
    stars.style.backgroundPositionY = `${e.clientY / 2}px`;
});


