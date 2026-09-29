import React, { memo } from 'react';
import { HOME_LOGO, LOGO_HEIGHT, LOGO_WIDTH } from './homeAssets';
import { BRAND_NAME } from './homeData';
import HomeLink from './HomeLink';

const BrandLockup = memo(({ to, href, toneClassName = '' }) => (
  <HomeLink to={to} href={href} className={`home-logo ${toneClassName}`.trim()}>
    <img src={HOME_LOGO} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
    <span className="home-brand">{BRAND_NAME}</span>
  </HomeLink>
));

BrandLockup.displayName = 'BrandLockup';

export default BrandLockup;
