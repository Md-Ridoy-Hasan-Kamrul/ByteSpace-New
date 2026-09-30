import React, { memo, useCallback, useEffect, useState } from 'react';
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

export const BrandLockup = memo(({ to, href, toneClassName = '' }) => (
  <HomeLink to={to} href={href} className={`home-logo ${toneClassName}`.trim()}>
    <img src={HOME_LOGO} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
    <span className="home-brand">{BRAND_NAME}</span>
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
    <HomeLink key={link.label} to={link.to} href={link.href} onClick={onNavigate}>
      {link.label}
    </HomeLink>
  )),
);

HeaderLinks.displayName = 'HeaderLinks';

// Rendered only while the menu is open, so reading the path here is always current.
const MobileMenu = memo(({ onNavigate }) => {
  const { pathname } = window.location;

  return (
    <nav className="home-mobile-nav" aria-label="Mobile">
      <ul className="home-mobile-links">
        {HEADER_LINKS.map((link) => (
          <li key={link.label}>
            <HomeLink
              to={link.to}
              className="home-mobile-link"
              onClick={onNavigate}
              current={pathname === link.to}
            >
              {link.label}
              <ChevronRight size={MENU_ICON_SIZE} aria-hidden="true" />
            </HomeLink>
          </li>
        ))}
      </ul>
      <div className="home-mobile-actions">
        {HEADER_ACTIONS.map((action, index) => (
          <HomeLink
            key={action.label}
            to={action.to}
            className={
              index === 0 ? 'home-mobile-action' : 'home-mobile-action home-mobile-action-primary'
            }
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

export const HomeHeader = memo(() => {
  const { isOpen, handleToggle, handleClose } = useHomeMenu();
  const menuLabel = isOpen ? 'Close menu' : 'Open menu';

  return (
    <header className="home-site-header">
      <div className="home-wrap home-header">
        <BrandLockup to={ROUTES.HOME} />
        <nav className="home-desktop-nav" aria-label="Primary">
          <HeaderLinks links={HEADER_LINKS} />
        </nav>
        <div className="home-desktop-actions">
          <HeaderLinks links={HEADER_ACTIONS} />
          <HomeLink href={HEADER_BAG.href} label={HEADER_BAG.label}>
            <img src={ICON_BAG} alt="" width={ICON_SIZE} height={ICON_SIZE} />
          </HomeLink>
        </div>
        <button
          type="button"
          className="home-menu-button"
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
