import React, { memo } from 'react';
import { ROUTES } from '../../config';
import { CTA_BODY, CTA_BUTTON_LABEL, CTA_ORNAMENTS, CTA_TITLE } from '../../data/home';
import { HomeLink } from '../Header';
import { OrnamentField } from '../Ornaments';

export const CreatorCta = memo(() => (
  <section id="creators" className="home-cta">
    <OrnamentField ornaments={CTA_ORNAMENTS} />
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
