import React, { memo } from 'react';
import { CTA_BODY, CTA_BUTTON_LABEL, CTA_TITLE } from './homeData';
import OrnamentField from './OrnamentField';

const CreatorCta = memo(() => (
  <section id="creators" className="home-cta">
    <OrnamentField />
    <div className="home-wrap">
      <h2>{CTA_TITLE}</h2>
      <p>{CTA_BODY}</p>
      <a className="home-button" href="#newsletter">
        {CTA_BUTTON_LABEL}
      </a>
    </div>
  </section>
));

CreatorCta.displayName = 'CreatorCta';

export default CreatorCta;
