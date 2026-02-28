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

// Smooth scroll to carousel on button-home click
const buttonHome = document.getElementById('button-home');
if (buttonHome) {
    buttonHome.addEventListener('click', (e) => {
        e.preventDefault();
        const carousel = document.getElementById('carousel');
        carousel.scrollIntoView({ behavior: 'smooth' });
    });
}

// Music player control
const musicControl = document.getElementById('music-control');
const backgroundMusic = document.getElementById('background-music');
let isPlaying = false;
let autoPlayAttempted = false;

if (musicControl && backgroundMusic) {
    // Auto-play on first user interaction
    const enableAutoPlay = () => {
        if (!autoPlayAttempted) {
            autoPlayAttempted = true;
            backgroundMusic.play().then(() => {
                isPlaying = true;
            }).catch(() => {});
            document.removeEventListener('click', enableAutoPlay);
            document.removeEventListener('touchstart', enableAutoPlay);
        }
    };
    
    document.addEventListener('click', enableAutoPlay);
    document.addEventListener('touchstart', enableAutoPlay);
    
    musicControl.addEventListener('click', (e) => {
        e.preventDefault();
        const pauseIcon = document.getElementById('pause-icon');
        const playIcon = musicControl.querySelector('#play-icon');
        if (isPlaying) {
            backgroundMusic.pause();
            pauseIcon.style.display = 'none';
            playIcon.style.display = 'block';
            musicControl.querySelector('p').textContent = 'Play';
            isPlaying = false;
        } else {
            backgroundMusic.play();
            pauseIcon.style.display = 'flex';
            playIcon.style.display = 'none';
            musicControl.querySelector('p').textContent = 'Pausa';
            isPlaying = true;
        }
    });
}
