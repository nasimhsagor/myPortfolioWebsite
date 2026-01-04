// Utility functions for the portfolio

export const smoothScroll = (elementId, behavior = 'smooth') => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior });
  }
};

export const initializePlugins = () => {
  // Initialize AOS
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true,
    });
  }

  // Initialize Stellar parallax
  if (window.jQuery && window.jQuery.fn.stellar) {
    jQuery(window).stellar({
      horizontalScrolling: false,
      verticalOffset: 0
    });
  }

  // Initialize Magnific Popup
  if (window.jQuery && window.jQuery.fn.magnificPopup) {
    jQuery('.image-popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  // Initialize MixItUp
  if (window.mixitup) {
    const mixer = window.mixitup('#port-image');
    return mixer;
  }
};

export const initializeProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach((bar) => {
    const width = bar.getAttribute('data-width');
    if (width) {
      bar.style.width = width + '%';
    }
  });
};

export const initializeTextRotator = () => {
  const rotatorElement = document.getElementById('text-rotator');
  if (rotatorElement && window.textRotate) {
    window.textRotate(rotatorElement);
  }
};

export const initializeNumScroller = () => {
  const numScrollers = document.querySelectorAll('.numscroller');
  numScrollers.forEach((element) => {
    if (window.jQuery && window.jQuery.fn.numscroller) {
      jQuery(element).numscroller({
        slno: element.getAttribute('data-slno'),
        min: element.getAttribute('data-min'),
        max: element.getAttribute('data-max'),
        delay: element.getAttribute('data-delay'),
        increment: element.getAttribute('data-increment')
      });
    }
  });
};
