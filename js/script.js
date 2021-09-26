// Header burger start
const menuBurger = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');

menuBurger.addEventListener('click', () => {
  menuFunc();
});

function menuFunc() {
  menuBurger.classList.toggle('active');
  menuList.classList.toggle('active');
  body.classList.toggle('lock');
}
// Header burger end

// Typing start
const typing = document.getElementById('typing');
const texts = ['Hello, World! I’m a frontend developer.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  typing.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();
// Typing end

// Mix start
const mixButtons = document.querySelectorAll('.mix__button');
const mixItems = document.querySelectorAll('.mix__item');

mixButtons.forEach((item) => {
  item.addEventListener('click', () => {
    let buttonAtt = item.getAttribute('data-att');

    mixButtons.forEach((item) => {
      if (item.getAttribute('data-att') === buttonAtt) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    mixItems.forEach((item) => {
      let itemAtt = item.getAttribute('data-att');
      if (buttonAtt === 'all') {
        item.classList.add('active');
      } else if (buttonAtt === itemAtt) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});

// Mix end

// Smooth scroll start
const menuLinks = document.querySelectorAll('.header .menu__list-link');
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    scroll(event);
  });

  function scroll(event) {
    event.preventDefault();
    const target = event.target.getAttribute('data-goto');
    const goTo = document.getElementById(target);
    const scrollTo = goTo.getBoundingClientRect().top - 50;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
    menuFunc();
  }
});

// Smooth scroll end
