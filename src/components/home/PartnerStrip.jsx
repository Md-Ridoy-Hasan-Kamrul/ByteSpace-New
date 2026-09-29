import React, { memo } from 'react';
import { PARTNER_LOGO_HEIGHT, PARTNER_LOGO_WIDTH } from './homeAssets';
import { PARTNERS } from './homeData';

const PartnerStrip = memo(() => (
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

export default PartnerStrip;
