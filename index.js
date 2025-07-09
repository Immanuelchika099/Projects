
// NAV BAR TOGGLE
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks =document.querySelector('.nav-links')

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarLinks.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e){
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement){
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// BACKGROUND AUDIO
// const audio = new Audio ('sounds/background_sound.mp3');
// audio.loop = true;
// audio.play();


// DOT UNDERNEAT FEATURE-CTA-CARD
const container = document.getElementById('scrollContainer');
const cards = container.querySelectorAll('.feature-cta-card');
const pagination = document.getElementById('pagination');

// Create dots
cards.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('pagination-dot');
  if (index === 0) dot.classList.add('active');
  pagination.appendChild(dot);
});

const dots = pagination.querySelectorAll('.pagination-dot');

container.addEventListener('scroll', () => {
  let closestIndex = 0;
  let closestDistance = Infinity;

  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;

    const distance = Math.abs(containerCenter - cardCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[closestIndex]) dots[closestIndex].classList.add('active');
});


// TESTIMONIAL ARROW SCROLLING
const myCards = [...document.querySelectorAll('.testimonial-cta-card-main')];
const nxtBtn = [...document.querySelectorAll('.testimonial-right')]
const preBtn = [...document.querySelectorAll('.testimonial-left')]

myCards.forEach((item, i) => {
  let cardDimensions = item.getBoundingClientRect();
  let cardWidth = cardDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += cardWidth;
  })
  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= cardWidth;
  })

})


AOS.init({
  duration: 1500,
  once: false
})