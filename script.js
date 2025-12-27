// Carousel Auto-Rotation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current slide and indicator
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        currentSlide = index;
    }

    // Function to go to next slide
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Function to go to previous slide
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    // Function to reset auto-rotation timer
    function resetAutoRotation() {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(nextSlide, slideInterval);
    }

    // Auto-rotate carousel
    let carouselInterval = setInterval(nextSlide, slideInterval);

    // Add click event listeners to arrow buttons
    const prevArrow = document.querySelector('.carousel-arrow-left');
    const nextArrow = document.querySelector('.carousel-arrow-right');
    
    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            prevSlide();
            resetAutoRotation();
        });
    }
    
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            nextSlide();
            resetAutoRotation();
        });
    }

    // Add click event listeners to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetAutoRotation();
        });
    });

    // Pause carousel on hover
    const carouselSection = document.querySelector('.carousel-section');
    if (carouselSection) {
        carouselSection.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        carouselSection.addEventListener('mouseleave', () => {
            resetAutoRotation();
        });
    }

    // Initialize first slide
    showSlide(0);
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle anchor links with smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('.fixed-navbar').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Price & Model Tools Dropdown - Click and Hover Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.nav-dropdown');
    const dropdownLink = document.querySelector('.price-model-link');
    const dropdownOverlay = document.querySelector('.dropdown-overlay');
    
    if (dropdown && dropdownLink && dropdownOverlay) {
        // Toggle dropdown on click
        dropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
            dropdownLink.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                dropdownLink.classList.remove('active');
            }
        });
        
        // Prevent dropdown from closing when clicking inside it
        dropdownOverlay.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

