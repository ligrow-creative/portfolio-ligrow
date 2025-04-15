const StateClasses = {
  InviewShow: 'is-inview',
  Popup: {
    Open: 'is-popup-open',
    Close: 'is-popup-close',
  },
  Menu: {
    Open: 'is-menu-open',
    Close: 'is-menu-close',
  },
  Splash: {
    Start: 'is-splash-start',
    Close: 'is-splash-close',
  },
  KvAnimation: {
    Start: 'is-kvanimation-start',
    Close: 'is-kvanimation-close',
  },

} as const;

export default StateClasses;
