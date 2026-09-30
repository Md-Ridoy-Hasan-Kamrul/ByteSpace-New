let lenis = null;

// Registered by useSmoothScroll; null in tests, with reduced motion, or before the app mounts.
export const setLenis = (instance) => {
  lenis = instance;
};

export const getLenis = () => lenis;

// Smooth-scrolls the window to `top`, through Lenis when it is running.
export const smoothScrollTo = (top) => {
  if (lenis) {
    lenis.scrollTo(top);
  } else {
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
