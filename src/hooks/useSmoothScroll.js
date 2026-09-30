import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { getLenis, setLenis } from '../utils/smoothScroll';

// Lenis smooth wheel scrolling for the whole site. Touch scrolling stays native, people who ask for
// reduced motion keep normal scrolling, and in-page #anchor links scroll smoothly too.
export const useSmoothScroll = () => {
  const { key } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // ScrollRestoration jumps the window on every navigation (top for new pages, the saved spot on
  // back/forward); resync Lenis to that position so it does not glide back to the old one.
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    lenis.scrollTo(window.scrollY, { immediate: true, force: true });
    lenis.resize();
  }, [key]);
};
