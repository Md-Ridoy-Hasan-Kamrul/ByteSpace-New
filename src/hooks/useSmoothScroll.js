import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let lenis = null;

// Registered by useSmoothScroll; null in tests, with reduced motion, or before the app mounts.
const setLenis = (instance) => {
  lenis = instance;
};

const getLenis = () => lenis;

// Smooth-scrolls the window to `top`, through Lenis when it is running.
export const smoothScrollTo = (top) => {
  if (lenis) {
    lenis.scrollTo(top);
  } else {
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

// Lenis smooth wheel scrolling for the whole site. Touch scrolling stays native, people who ask for
// reduced motion keep normal scrolling, and in-page #anchor links scroll smoothly too.
export const useSmoothScroll = () => {
  const { key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // On every navigation, cancel any glide still running from the previous page (clicking a card
  // mid-scroll used to let Lenis carry the new page back down), then pin Lenis to the position
  // ScrollRestoration chose: the top for new pages, the saved spot on back/forward. It is repeated
  // on the next frame because a lazily loaded page can still change height after the first render.
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return undefined;

    const target = navigationType === 'POP' ? window.scrollY : 0;
    const pin = () => {
      lenis.resize();
      window.scrollTo(0, target);
      lenis.scrollTo(target, { immediate: true, force: true });
    };

    lenis.stop();
    pin();
    lenis.start();
    const frame = requestAnimationFrame(pin);
    return () => cancelAnimationFrame(frame);
  }, [key, navigationType]);
};
