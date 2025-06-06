 AOS.init();
// Create floating particles
function createParticles() {
  const container = document.querySelector('.home');
  const particleContainer = document.createElement('div');
  particleContainer.className = 'floating-particles';
  container.appendChild(particleContainer);
  
  setInterval(() => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = particle.style.height = Math.random() * 5 + 2 + 'px';
    particle.style.animationDuration = Math.random() * 10 + 10 + 's';
    particleContainer.appendChild(particle);
    
    setTimeout(() => particle.remove(), 25000);
  }, 300);
}
createParticles();
// ===============
// Initialize Swiper
      const swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 3000, // Default delay set to 3 seconds
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Pause autoplay on hover/touch for better interaction
        },
        slidesPerView: 1,
        spaceBetween: 10, // Reduced space for mobile
        observer: true, // Observe changes in the DOM
        observeParents: true, // Observe parent elements for dynamic content
        breakpoints: {
          250: {
            slidesPerView: 2,
            spaceBetween: 15,
            autoplay: {
              delay: 500, // 3 seconds for mobile
            },
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
            autoplay: {
              delay: 500, // 3 seconds for mobile
            },
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: {
              delay: 1000, // 1 second for tablets and larger
            },
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: {
              delay: 1000,
            },
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
            autoplay: {
              delay: 1000,
            },
          },
        },
      });
      // =======
      // Add this to your script.js file (or create one if it doesn't exist)
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hide');
    setTimeout(() => {
      // preloader.style.display = 'none';
      preloader.style.transform = 'translateY(-100%)';
    }, 700);
  }, 3500); // Delay to allow typewriter animation to complete
});
// ====
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });