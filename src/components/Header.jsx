import { memo, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';
import { ROUTES } from '../config';
import {
  BRAND_NAME,
  HEADER_ACTIONS,
  HEADER_BAG,
  HEADER_LINKS,
  HOME_LOGO,
  ICON_BAG,
  ICON_SIZE,
  LOGO_HEIGHT,
  LOGO_WIDTH,
} from '../data/home';

// Keyboard focus ring used across the site pages.
export const FOCUS_RING =
  'focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]';

// Header and footer text links: a 2px lime bar grows in from the left under the label.
export const UNDERLINE_LINK = `relative no-underline after:absolute after:inset-x-0 after:-bottom-1.5 after:h-[2px] after:rounded-[999px] after:bg-brand-lime after:content-[''] after:[transform:scaleX(0)] after:[transform-origin:right_center] after:transition-[transform] after:duration-[260ms] after:ease-[cubic-bezier(0.65,_0,_0.35,_1)] hover:after:[transform:scaleX(1)] hover:after:[transform-origin:left_center] focus-visible:after:[transform:scaleX(1)] focus-visible:after:[transform-origin:left_center] motion-reduce:after:transition-none ${FOCUS_RING}`;

export const HomeLink = memo(({ to, href, className, children, onClick, label, current }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={className}
        onClick={onClick}
        aria-label={label}
        aria-current={current ? 'page' : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick} aria-label={label}>
      {children}
    </a>
  );
});

HomeLink.displayName = 'HomeLink';

const LOGO = {
  header: {
    link: `inline-flex items-center gap-2 no-underline ${FOCUS_RING}`,
    name: 'font-brand text-[1.5rem] leading-[1] font-bold',
  },
  footer: {
    link: `inline-flex items-start gap-2 no-underline ${FOCUS_RING}`,
    name: 'mt-[7px] font-brand text-[1.5rem] leading-[normal] font-bold',
  },
};

export const BrandLockup = memo(({ to, href, placement = 'header' }) => (
  <HomeLink to={to} href={href} className={LOGO[placement].link}>
    <img src={HOME_LOGO} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
    <span className={LOGO[placement].name}>{BRAND_NAME}</span>
  </HomeLink>
));

BrandLockup.displayName = 'BrandLockup';

const useHomeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleToggle = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, handleToggle, handleClose };
};

const MENU_ICON_SIZE = 20;

const HeaderLinks = memo(({ links, onNavigate }) =>
  links.map((link) => (
    <HomeLink
      key={link.label}
      to={link.to}
      href={link.href}
      className={UNDERLINE_LINK}
      onClick={onNavigate}
    >
      {link.label}
    </HomeLink>
  )),
);

HeaderLinks.displayName = 'HeaderLinks';

const MOBILE_LINK = `flex min-h-12 items-center justify-between rounded-[0.75rem] pr-3.5 pl-4 text-[1rem] font-medium text-ink no-underline [&_svg]:text-muted hover:not-aria-[current=page]:bg-canvas aria-[current=page]:bg-[rgb(238,_242,_255)] aria-[current=page]:text-brand-blue aria-[current=page]:[&_svg]:text-brand-blue ${FOCUS_RING}`;

const MOBILE_ACTION = [
  `flex min-h-11.5 items-center justify-center rounded-[999px] border border-solid border-line text-[1rem] font-medium text-ink no-underline hover:bg-canvas ${FOCUS_RING}`,
  `flex min-h-11.5 items-center justify-center rounded-[999px] border border-solid border-brand-lime bg-brand-lime text-[1rem] font-medium text-ink no-underline hover:[filter:brightness(0.96)] ${FOCUS_RING}`,
];

// Rendered only while the menu is open, so reading the path here is always current.
const MobileMenu = memo(({ onNavigate }) => {
  const { pathname } = window.location;

  return (
    <nav
      className="absolute inset-x-0 top-[calc(100%_-_0.25rem)] mx-auto w-[min(100%_-_2rem,_30rem)] animate-menu-in rounded-[1.25rem] bg-white p-2 font-body text-ink shadow-[rgba(4,_8,_25,_0.22)_0px_1.5rem_3rem,_rgba(4,_8,_25,_0.1)_0px_0.25rem_0.75rem] motion-reduce:animate-none"
      aria-label="Mobile"
    >
      <ul className="flex flex-col gap-0.5">
        {HEADER_LINKS.map((link) => (
          <li key={link.label}>
            <HomeLink
              to={link.to}
              className={MOBILE_LINK}
              onClick={onNavigate}
              current={pathname === link.to}
            >
              {link.label}
              <ChevronRight size={MENU_ICON_SIZE} aria-hidden="true" />
            </HomeLink>
          </li>
        ))}
      </ul>
      <div className="mt-2 grid grid-cols-[1fr_1fr] gap-2.5 border-t border-solid border-t-line px-2 pt-3 pb-2">
        {HEADER_ACTIONS.map((action, index) => (
          <HomeLink
            key={action.label}
            to={action.to}
            className={MOBILE_ACTION[index === 0 ? 0 : 1]}
            onClick={onNavigate}
          >
            {action.label}
          </HomeLink>
        ))}
      </div>
    </nav>
  );
});

MobileMenu.displayName = 'MobileMenu';

// `overHero`: on the home page the header sits over the hero artboard from tablet up; on the other
// pages it stays in the flow until laptop.
const HEADER = {
  hero: {
    bar: 'relative z-2 mx-auto flex min-h-20 w-[min(100%_-_2rem,_75rem)] items-center justify-between gap-4 py-4 sm:w-[min(100%_-_2.5rem,_75rem)] md:absolute md:inset-x-0 md:top-0 md:z-4 md:min-h-0 md:py-0 md:max-lg:h-[88px] lg:h-[calc(120_/_1024_*_100%)]',
    group: 'hidden items-center gap-6 md:flex',
    menuButton: 'md:hidden',
  },
  page: {
    bar: 'relative z-2 mx-auto flex min-h-20 w-[min(100%_-_2rem,_75rem)] items-center justify-between gap-4 py-4 sm:w-[min(100%_-_2.5rem,_75rem)] lg:h-[120px] lg:min-h-0 lg:py-0',
    group: 'hidden items-center gap-6 lg:flex',
    menuButton: 'lg:hidden',
  },
};

export const HomeHeader = memo(({ overHero = false }) => {
  const { isOpen, handleToggle, handleClose } = useHomeMenu();
  const menuLabel = isOpen ? 'Close menu' : 'Open menu';
  const layout = HEADER[overHero ? 'hero' : 'page'];

  return (
    <header className="has-[>nav]:relative has-[>nav]:z-10">
      <div className={layout.bar}>
        <BrandLockup to={ROUTES.HOME} />
        <nav className={layout.group} aria-label="Primary">
          <HeaderLinks links={HEADER_LINKS} />
        </nav>
        <div className={layout.group}>
          <HeaderLinks links={HEADER_ACTIONS} />
          <HomeLink
            href={HEADER_BAG.href}
            label={HEADER_BAG.label}
            className={`inline-flex transition-[transform] duration-[200ms] ease-[ease] hover:[transform:translateY(-1px)] motion-reduce:transition-none ${FOCUS_RING}`}
          >
            <img src={ICON_BAG} alt="" width={ICON_SIZE} height={ICON_SIZE} />
          </HomeLink>
        </div>
        <button
          type="button"
          className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[0.75rem] border-none text-white hover:bg-[rgba(255,_255,_255,_0.14)] aria-expanded:bg-[rgba(255,_255,_255,_0.14)] ${FOCUS_RING} ${layout.menuButton}`}
          aria-label={menuLabel}
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          {isOpen ? <X size={MENU_ICON_SIZE} /> : <Menu size={MENU_ICON_SIZE} />}
        </button>
      </div>
      {isOpen ? <MobileMenu onNavigate={handleClose} /> : null}
    </header>
  );
});

HomeHeader.displayName = 'HomeHeader';
