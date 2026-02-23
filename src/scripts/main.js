const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');

// Duplicate slides for seamless loop
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    carouselTrack.appendChild(clone);
});

// Reset animation for infinite loop
carouselTrack.addEventListener('animationiteration', () => {
    carouselTrack.style.animation = 'none';
    setTimeout(() => {
        carouselTrack.style.animation = 'scroll 10s linear infinite';
    }, 10);
});