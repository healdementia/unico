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

document.getElementById('calculate-button-top').onclick = function() {
  document.getElementById('overlay').classList.add('display-block');
  document.getElementById('overlay-holder').classList.add('display-flex');
  document.getElementById('html').classList.add('noscroll');
}

document.getElementById('calculate-close').onclick = function() {
  document.getElementById('overlay').classList.remove('display-block');
  document.getElementById('overlay-holder').classList.remove('display-flex');
  document.getElementById('html').classList.remove('noscroll');
};

document.getElementById('calculate-upload').onchange = function(event) {
  document.getElementById('calculate-upload-label').innerHTML = 'Загрузить другой';
  document.getElementById('calculate-return').innerHTML = 'загружен файл: ' + this.value.split( '\\' ).pop();
};

$('.slider').slick({
  dots: true
});
