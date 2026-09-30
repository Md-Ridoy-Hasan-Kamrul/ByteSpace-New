import { memo } from 'react';
import { ROUTES } from '../../config';
import { CTA_BODY, CTA_BUTTON_LABEL, CTA_ORNAMENTS, CTA_TITLE } from '../../data/home';
import { HomeLink } from '../Header';
import { OrnamentField } from '../Ornaments';

export const CreatorCta = memo(() => (
  <section
    id="creators"
    className="overflow-hidden bg-top py-20 relative [container-type:inline-size] bg-brand-blue bg-[url(/home/hero-grid.svg)] bg-repeat-x [background-size:90rem_64rem] text-canvas text-center [-webkit-font-smoothing:antialiased] lg:pt-[calc(85_*_min(100cqw,_90rem)_/_1440)] lg:pb-[calc(84_*_min(100cqw,_90rem)_/_1440)] 2xl:pt-[85px] 2xl:pb-[84px]"
  >
    <OrnamentField ornaments={CTA_ORNAMENTS} />
    <div className="mx-auto w-[min(100%_-_2rem,_75rem)] relative z-1 sm:w-[min(100%_-_2.5rem,_75rem)] lg:max-2xl:[zoom:tan(atan2(min(100cqw,_90rem),_1440px))]">
      <h2 className="mx-auto font-display font-semibold tracking-[-0.01em] leading-[1.25] max-w-177.5 text-[clamp(1.5rem,_6.5vw,_1.75rem)] md:leading-[1.2] md:text-[clamp(1.75rem,_4vw,_2.75rem)] lg:text-[2.75rem] 2xl:text-[clamp(1.75rem,_4vw,_2.75rem)]">
        {CTA_TITLE}
      </h2>
      <p className="mx-auto max-w-241 mt-5 text-[1rem] font-normal leading-[1.6] md:mt-10 md:text-[1.125rem]">
        {CTA_BODY}
      </p>
      <HomeLink
        className="py-3 px-6 rounded-[1.5rem] border-none inline-flex items-center justify-center min-h-11.5 bg-brand-lime text-ink text-[1rem] font-medium leading-[1.2] no-underline cursor-pointer mt-7 md:text-[1.125rem] md:mt-10 hover:[filter:brightness(0.96)] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]"
        to={ROUTES.REGISTER}
      >
        {CTA_BUTTON_LABEL}
      </HomeLink>
    </div>
  </section>
));

CreatorCta.displayName = 'CreatorCta';
