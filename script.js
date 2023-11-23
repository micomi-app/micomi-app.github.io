window.addEventListener('DOMContentLoaded', () => {
  new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });
});