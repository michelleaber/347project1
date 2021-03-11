const navigation = document.getElementById('navigation');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', event => {
  navigation.classList.toggle('open');
  event.stopPropagation();
});

document.addEventListener('click', () => {
  navigation.classList.remove('open');
});

const slides = document.querySelectorAll('.slide');
let i = 0;

function forward() {
  if (i < slides.length - 1) {
    slides[i].classList.remove('current');
    slides[i].classList.add('past');
    i += 1;
    slides[i].classList.add('current');
  }
}

function backward() {
  if (i > 0) {
    slides[i].classList.remove('current');
    i -= 1;
    slides[i].classList.remove('past');
    slides[i].classList.add('current');
  }
}

document.getElementById('left').addEventListener('click', backward);
document.getElementById('right').addEventListener('click', forward);