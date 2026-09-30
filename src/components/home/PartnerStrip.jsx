import React, { memo } from 'react';
import { PARTNERS, PARTNER_LOGO_HEIGHT, PARTNER_LOGO_WIDTH } from '../../data/home';

export const PartnerStrip = memo(() => (
  <section className="home-partners" aria-label="Partners">
    <ul className="home-wrap">
      {PARTNERS.map((partner) => (
        <li key={partner.id}>
          <img
            src={partner.src}
            alt={partner.name}
            width={PARTNER_LOGO_WIDTH}
            height={PARTNER_LOGO_HEIGHT}
          />
        </li>
      ))}
    </ul>
  </section>
));

PartnerStrip.displayName = 'PartnerStrip';
