let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function showItem(index) {
  const ring = document.getElementById('carouselRing');
  ring.style.transform = `rotateY(${index * (360 / totalItems)}deg)`;
}

function nextItem() {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showItem(currentIndex);

  document.getElementById('prevButton').addEventListener('click', () => {
    prevItem();
  });

  document.getElementById('nextButton').addEventListener('click', () => {
    nextItem();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      prevItem();
    } else if (event.key === 'ArrowRight') {
      nextItem();
    }
  });
});
