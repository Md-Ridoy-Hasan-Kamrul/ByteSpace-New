import { memo } from 'react';
import { PARTNERS, PARTNER_LOGO_HEIGHT, PARTNER_LOGO_WIDTH } from '../../data/home';

export const PartnerStrip = memo(() => (
  <section className="py-16 bg-canvas" aria-label="Partners">
    <ul className="mx-auto w-[min(100%_-_2rem,_75rem)] flex flex-wrap items-center justify-center gap-y-8 gap-x-12 sm:w-[min(100%_-_2.5rem,_75rem)] md:gap-[min(2rem,_25%_-_160px)] md:flex-nowrap lg:gap-[min(3rem,_25%_-_210px)] xl:flex-wrap xl:gap-y-8 xl:gap-x-12">
      {PARTNERS.map((partner) => (
        <li key={partner.id}>
          <img
            className="md:max-lg:w-[128px] md:max-lg:h-auto"
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
