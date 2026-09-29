import React, { memo } from 'react';
import { ROUTES } from '../../config';
import { CTA_BODY, CTA_BUTTON_LABEL, CTA_TITLE } from './homeData';
import HomeLink from './HomeLink';
import OrnamentField from './OrnamentField';

const CreatorCta = memo(() => (
  <section id="creators" className="home-cta">
    <OrnamentField />
    <div className="home-wrap">
      <h2>{CTA_TITLE}</h2>
      <p>{CTA_BODY}</p>
      <HomeLink className="home-button" to={ROUTES.REGISTER}>
        {CTA_BUTTON_LABEL}
      </HomeLink>
    </div>
  </section>
));

CreatorCta.displayName = 'CreatorCta';

export default CreatorCta;
