import React, { memo } from 'react';
import { Menu, X } from 'lucide-react';
import { ROUTES } from '../../config';
import { useHomeMenu } from '../../hooks/useHomeMenu';
import { ICON_BAG, ICON_SIZE } from './homeAssets';
import { HEADER_ACTIONS, HEADER_BAG, HEADER_LINKS } from './homeData';
import BrandLockup from './BrandLockup';
import HomeLink from './HomeLink';

const MENU_ICON_SIZE = 20;

const HeaderLinks = memo(({ links, onNavigate }) =>
  links.map((link) => (
    <HomeLink key={link.label} to={link.to} href={link.href} onClick={onNavigate}>
      {link.label}
    </HomeLink>
  )),
);

HeaderLinks.displayName = 'HeaderLinks';

const HomeHeader = memo(() => {
  const { isOpen, handleToggle, handleClose } = useHomeMenu();
  const menuLabel = isOpen ? 'Close menu' : 'Open menu';

  return (
    <header>
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
      {isOpen ? (
        <nav className="home-wrap home-mobile-nav" aria-label="Mobile">
          <HeaderLinks links={HEADER_LINKS} onNavigate={handleClose} />
          <HeaderLinks links={HEADER_ACTIONS} onNavigate={handleClose} />
        </nav>
      ) : null}
    </header>
  );
});

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
