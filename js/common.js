$('.slider').slick({
  dots: true
});

document.getElementById('calculate-button').onclick = function() {
  document.getElementById('overlay').classList.add('display-block');
  document.getElementById('overlay-holder').classList.add('display-flex');
}

document.getElementById('calculate-close').onclick = function() {
  document.getElementById('overlay').classList.remove('display-block');
  document.getElementById('overlay-holder').classList.remove('display-flex');
};

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled >= 160) {
    document.getElementById('main-nav').classList.add('main-nav--sticky');
    document.getElementById('back-wrapper').classList.add('back-wrapper--sticky')
  } else {
    document.getElementById('main-nav').classList.remove('main-nav--sticky');
    document.getElementById('back-wrapper').classList.remove('back-wrapper--sticky')
  }
};

document.getElementById('menu-open').onclick = function() {
  document.getElementById('main-nav').classList.toggle('display-flex');
  document.getElementById('menu-open').classList.toggle('top__open-menu--close')
};
