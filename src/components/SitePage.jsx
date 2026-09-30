import React, { memo } from 'react';
import { HomeFooter } from './Footer';
import { HomeHeader } from './Header';

const GRID_BAND =
  'bg-brand-blue bg-[url(/home/hero-grid.svg)] bg-top bg-repeat-x [background-size:90rem_64rem]';

// While the mobile menu is open the hero only clips sideways, so the dropdown can hang below it.
const MENU_OPEN =
  'has-[nav[aria-label=Mobile]]:overflow-x-clip has-[nav[aria-label=Mobile]]:overflow-y-visible';

const PAGE = {
  search: 'w-full bg-white font-body text-ink [-webkit-font-smoothing:antialiased]',
  course: 'w-full bg-white font-body text-ink',
  creator: 'w-full bg-white font-body text-ink',
  'not-found': 'w-full bg-white font-body text-ink',
};

const HERO = {
  search: `relative overflow-hidden ${GRID_BAND} pb-8 text-canvas sm:pb-12 lg:h-[360px] lg:pb-0 ${MENU_OPEN}`,
  course: `relative overflow-hidden ${GRID_BAND} pb-10 text-canvas lg:h-[957px] lg:pb-0 ${MENU_OPEN}`,
  creator: `relative overflow-hidden ${GRID_BAND} pb-10 text-canvas lg:h-[592px] lg:pb-0 ${MENU_OPEN}`,
  'not-found': `relative flex flex-col overflow-hidden bg-brand-blue pb-20 text-canvas after:pointer-events-none after:absolute after:inset-0 after:z-1 after:bg-[url(/home/hero-grid.svg)] after:bg-top after:bg-repeat-x after:[background-size:90rem_64rem] after:content-[''] lg:h-[59.8125rem] lg:pb-0 ${MENU_OPEN}`,
};

// Frame shared by the inner pages (search, course, creator, 404): a blue hero band with the site
// header, the page body, then the footer.
export const SitePage = memo(({ name, hero, children }) => (
  <div className={PAGE[name]}>
    <div className={HERO[name]}>
      <HomeHeader />
      {hero}
    </div>
    {children}
    <HomeFooter />
  </div>
));

SitePage.displayName = 'SitePage';
