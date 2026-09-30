import React, { memo } from 'react';
import { HomeLink } from '../components/Header';
import { SitePage } from '../components/SitePage';
import { ROUTES } from '../config';
import { useSEO } from '../hooks/useSEO';

const NOT_FOUND_CODE = '404';
const NOT_FOUND_TITLE = 'The page you are looking for doesn\u2019t exist';
const NOT_FOUND_HINT = 'Try to use a correct url or go back to homepage to start again';
const NOT_FOUND_HOME = 'Back to Home';

const SEO_NOT_FOUND = {
  title: 'Page not found',
  description: NOT_FOUND_HINT,
  keywords: ['ByteSpace', '404'],
};

const NotFoundCode = memo(() => (
  <p className="max-w-full text-transparent font-display text-[clamp(7.5rem,_33.333vw,_30rem)] font-semibold leading-[1] tracking-[-0.01em] bg-[linear-gradient(_180deg,_#d4fb20_0%,_rgb(212_251_32_/_96%)_25%,_rgb(212_251_32_/_81%)_50.5%,_rgb(212_251_32_/_61%)_68%,_rgb(255_255_255_/_0%)_100%_)] bg-clip-text" aria-hidden="true">
    {NOT_FOUND_CODE}
  </p>
));

NotFoundCode.displayName = 'NotFoundCode';

const NotFoundMessage = memo(() => (
  <div className="gap-8 relative z-2 grid justify-items-center w-[min(100%,_58.4375rem)] mt-[calc(clamp(7.5rem,_33.333vw,_30rem)_*_0.248_*_-1)] lg:left-[0.5px]">
    <h1 className="font-display font-semibold tracking-[-0.01em] leading-[1.2] text-white text-[clamp(1.625rem,_7.5vw,_1.875rem)] md:text-[clamp(1.75rem,_5vw,_4.5rem)]">{NOT_FOUND_TITLE}</h1>
    <p className="max-w-full text-field text-[1rem] font-normal leading-[1.6] md:text-[1.125rem]">{NOT_FOUND_HINT}</p>
    <HomeLink className="py-3 px-6 rounded-[1.5rem] inline-flex items-center justify-center bg-brand-lime text-ink text-[1rem] font-medium leading-[1.2] no-underline md:text-[1.125rem] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]" to={ROUTES.HOME}>
      {NOT_FOUND_HOME}
    </HomeLink>
  </div>
));

NotFoundMessage.displayName = 'NotFoundMessage';

const NotFoundContent = memo(() => (
  <SitePage
    name="not-found"
    hero={
      <div className="mx-auto w-[min(100%_-_2rem,_75rem)] relative grid [align-content:start] [align-items:start] justify-items-center grow shrink basis-auto pt-20 text-center sm:w-[min(100%_-_2.5rem,_75rem)] lg:pt-[40px]">
        <NotFoundCode />
        <NotFoundMessage />
      </div>
    }
  />
));

NotFoundContent.displayName = 'NotFoundContent';

const NotFound = memo(() => {
  useSEO(SEO_NOT_FOUND);

  return <NotFoundContent />;
});

NotFound.displayName = 'NotFound';

export default NotFound;
