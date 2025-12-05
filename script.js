let currentSlideIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');
const totalSlides = images.length;
let autoAdvanceTimer;

function showSlide(index) {
    // Wrap around
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }

    // Remove active class from all images and dots
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current image and dot
    images[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function resetAutoAdvance() {
    // Clear existing timer
    clearInterval(autoAdvanceTimer);
    // Start new timer
    autoAdvanceTimer = setInterval(() => {
        changeSlide(1);
    }, 4000);
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
    resetAutoAdvance();
}

function currentSlide(index) {
    showSlide(index);
    resetAutoAdvance();
}

// Initialize auto-advance carousel
resetAutoAdvance();

// Add click handler to entire carousel container to redirect
document.querySelector('.carousel').addEventListener('click', (e) => {
    // Only redirect if the click wasn't on a button
    if (!e.target.closest('.carousel-btn') && !e.target.closest('.dot')) {
        window.location.href = 'https://www.fanvue.com/graceupton/fv-1';
    }
});
