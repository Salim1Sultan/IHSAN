// navbar scroll start
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

function handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-120px"; 
    } else {
        navbar.style.top = "0px";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}
// navbar scroll  end


// navbar btn click scroll start
window.addEventListener('scroll', handleScroll);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
// navbar btn click scroll end


// card selector start
const teacherCards = document.querySelectorAll('.teacher-card');

teacherCards.forEach(card => {
  card.addEventListener('click', () => {

    teacherCards.forEach(c => c.classList.remove('active-card'));
    
    card.classList.add('active-card');
  });
});
// card selector end


// fade in smooth scroll paralax effect start
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is in view:', entry.target);  
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

fadeInElements.forEach(element => {
  observer.observe(element);
});
// fade in smooth scroll paralax effect end