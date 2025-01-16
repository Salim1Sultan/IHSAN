const container = document.querySelector(".cards-container");
const cards = document.querySelectorAll(".card");
const indicators = document.querySelectorAll(".indicator");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

let currentIndex = 0; 
const totalCards = cards.length;

function updateCarousel(index) {

  const cardWidth = cards[0].offsetWidth + 45;
  const offset = -index * cardWidth + (window.innerWidth - cardWidth) / 2; 

  
  container.style.transform = `translateX(${offset}px)`;

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index % totalCards);
  });

  cards.forEach((card, i) => {
    card.classList.toggle('selected', i === index);
  });
}

function infiniteScroll() {
  if (currentIndex === -1) {
    currentIndex = totalCards - 1;
    updateCarousel(currentIndex);
  } else if (currentIndex === totalCards) {
    currentIndex = 0;
    updateCarousel(currentIndex);
  }
}

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

leftBtn.addEventListener("click", () => {
  currentIndex--;
  infiniteScroll();
  updateCarousel(currentIndex);
});

rightBtn.addEventListener("click", () => {
  currentIndex++;
  infiniteScroll();
  updateCarousel(currentIndex);
});

updateCarousel(currentIndex);


