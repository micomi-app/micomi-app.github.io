window.addEventListener('DOMContentLoaded', () => {
  new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
  bubbly({
    colorStart: '#fff',
    colorStop: '#fff',
    compose: 'source-over',
    bubbles: 10,
    bubbleFunc: () => `#ff9f0050`,
    velocityFunc: () => 0.4,
  });
});