import React, { memo } from 'react';
import HomeFooter from './HomeFooter';
import HomeHeader from './HomeHeader';
import './home.css';

// Frame shared by the inner pages (search, course, creator, 404): a blue hero band with the site
// header, the page body, then the footer. `name` sets the `<name>-page` / `<name>-hero` classes.
const SitePage = memo(({ name, hero, children }) => (
  <div className={`home-page ${name}-page`}>
    <div className={`${name}-hero`}>
      <HomeHeader />
      {hero}
    </div>
    {children}
    <HomeFooter />
  </div>
));

SitePage.displayName = 'SitePage';

export default SitePage;
