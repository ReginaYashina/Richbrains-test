//SlideToggle
let _slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
}
let _slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
}
let _slideToggle = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
}
//========================================
//Spollers
let spollers = document.querySelectorAll("._spoller");
if (spollers.length > 0) {
  for (let index = 0; index < spollers.length; index++) {
    const spoller = spollers[index];
    spoller.addEventListener("click", function (e) {
      if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
        return false;
      }
      if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
        return false;
      }
      if (spoller.closest('._spollers').classList.contains('_one')) {
        let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
        for (let i = 0; i < curent_spollers.length; i++) {
          let el = curent_spollers[i];
          if (el != spoller) {
            el.classList.remove('_active');
            _slideUp(el.nextElementSibling);
          }
        }
      }
      spoller.classList.toggle('_active');
      _slideToggle(spoller.nextElementSibling);
    });
  }
}
//=================
// Flip-cards
let cardsButtons = document.querySelectorAll('.card__button');
let cardsButtonsBack = document.querySelectorAll('.card__back-button');
let cardsClose = document.querySelectorAll('.card__close');
let cardsPlus = document.querySelectorAll('.card__plus');
cardsButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    this.closest('.card').querySelector('.card__front').classList.add('_flip');
    this.closest('.card').querySelector('.card__back').classList.add('_flip');
    this.closest('.card').querySelector('.card__plus').classList.add('_active');
  });
});
cardsPlus.forEach(function (item) {
  item.addEventListener('click', function () {
    this.closest('.card').querySelector('.card__front').classList.add('_flip');
    this.closest('.card').querySelector('.card__back').classList.add('_flip');
    this.classList.add('_active');
  });
});
cardsClose.forEach(function (item) {
  item.addEventListener('click', function () {
    this.closest('.card').querySelector('.card__front').classList.remove('_flip');
    this.closest('.card').querySelector('.card__back').classList.remove('_flip');
    this.closest('.card').querySelector('.card__plus').classList.remove('_active');
  });
});
cardsButtonsBack.forEach(function (item) {
  item.addEventListener('click', function () {
    this.closest('.card').querySelector('.card__front').classList.remove('_flip');
    this.closest('.card').querySelector('.card__back').classList.remove('_flip');
    this.closest('.card').querySelector('.card__plus').classList.remove('_active');
  });
});

//=================
// mobile-filter
window.addEventListener('resize', function () {
  mobileFilter();

});
mobileFilter();
function mobileFilter() {
  let filterButton = document.querySelector('.filter__title');
  if (window.innerWidth <= 786) {
    filterButton.innerText = 'Choose your Career';
    filterButton.addEventListener('click', function () {
      this.classList.toggle('_active');
      _slideToggle(this.nextElementSibling);
    });
  } else {
    filterButton.innerText = 'Careers';
  }
}

