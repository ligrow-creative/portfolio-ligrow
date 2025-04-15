const Events = {
  Load: 'DOMContentLoaded',
  Pageshow: 'pageshow',
  Resize: 'resize',
  Scroll: 'scroll',
  Click: 'click',
  Wheel: 'mousewheel',
  Input: 'mousemove',
  Change: 'change',
  Progress: 'progress',
  ToStart: 'touchstart',
  ToEnd: 'touchend',
  ToMove: 'touchmove',
  MoEnter: 'mouseenter',
  MoLeave: 'mouseleave',
  MoMove: 'mousemove',
  TransStart: 'transitionstart',
  TransEnd: 'transitionend',
  CanPlay: 'canplay',
} as const;

export default Events;
