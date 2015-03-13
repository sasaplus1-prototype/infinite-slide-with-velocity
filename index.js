(function(){

  'use strict';

  var width, frames;

  function setup() {
    var frame = document.querySelector('.js-box-frame');

    if (!!Element.prototype.insertAdjacentElement) {
      frame.insertAdjacentElement('afterend', frame.cloneNode(true));
    } else {
      frame.insertAdjacentHTML('afterend', frame.cloneNode(true).outerHTML);
    }

    width = frame.scrollWidth + 5;
    frames = Array.prototype.slice.call(
        document.querySelectorAll('.js-box-frame'));

    frames.forEach(function(element, index, array) {
      element.style.left = width * index + 'px';
    });
  }

  function animate() {
    frames.forEach(function(element, index, array) {
      if (parseInt(element.style.left, 10) <= -width) {
        element.style.left = width + 'px';
      }
    });

    Velocity(frames, {
      left: '-=' + width + 'px'
    }, {
      duration: 3000,
      easing: 'linear',
      complete: animate
    });
  }

  setup();
  animate();

}());
