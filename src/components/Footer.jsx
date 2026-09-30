import { memo, useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { ROUTES } from '../config';
import { isValidEmail } from '../data/auth';
import {
  COPYRIGHT_TEXT,
  EMAIL_PLACEHOLDER,
  FOOTER_LINK_GROUPS,
  LEGAL_LINKS,
  NEWSLETTER_CONSENT,
  NEWSLETTER_EMAIL_INVALID,
  NEWSLETTER_EMAIL_REQUIRED,
  NEWSLETTER_PROMPT,
  NEWSLETTER_SUCCESS,
  SEARCH_BUTTON_LABEL,
} from '../data/home';
import { BrandLockup, FOCUS_RING, HomeLink, UNDERLINE_LINK } from './Header';

const getNewsletterEmailError = (email) => {
  if (!email.trim()) {
    return NEWSLETTER_EMAIL_REQUIRED;
  }
  if (!isValidEmail(email)) {
    return NEWSLETTER_EMAIL_INVALID;
  }
  return '';
};

const useNewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
    setError('');
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const nextError = getNewsletterEmailError(email);
      setError(nextError);
      if (nextError) {
        return;
      }
      setIsSubscribed(true);
      toast.success(NEWSLETTER_SUCCESS);
    },
    [email],
  );

  return { email, error, isSubscribed, handleEmailChange, handleSubmit };
};

const FooterLinks = memo(() => (
  <div className="gap-6 grid md:gap-[28px] md:flex md:grid-cols-3 md:grow-0 md:shrink-0 md:max-xl:basis-auto lg:gap-[40px] lg:max-xl:w-auto xl:basis-[528px] xl:w-[580px]">
    {FOOTER_LINK_GROUPS.map((group) => (
      <ul
        className="gap-4 grid text-[0.875rem] leading-[1.6] md:max-xl:whitespace-nowrap lg:pt-[48px] lg:grow-0 lg:shrink-0 lg:basis-auto lg:max-xl:w-auto xl:w-[167px]"
        key={group[0].label}
      >
        {group.map((link) => (
          <li key={link.label}>
            <HomeLink to={link.to} href={link.href} className={UNDERLINE_LINK}>
              {link.label}
            </HomeLink>
          </li>
        ))}
      </ul>
    ))}
  </div>
));

FooterLinks.displayName = 'FooterLinks';

const NewsletterForm = memo(() => {
  const { email, error, isSubscribed, handleEmailChange, handleSubmit } = useNewsletterForm();

  return (
    <form className="gap-6 flex flex-col mt-[45px]" noValidate onSubmit={handleSubmit}>
      <div className="gap-6 flex flex-col md:gap-[16px] md:flex-row md:max-lg:items-center lg:gap-6 lg:items-start">
        <label className="sr-only" htmlFor="newsletter-email">
          Email
        </label>
        <input
          className="px-6 rounded-[100px] border border-solid border-line h-13 w-full bg-white text-ink text-[1rem] leading-[1.6] md:w-auto md:basis-auto md:max-xl:grow md:max-xl:shrink md:max-xl:min-w-0 xl:w-[376px] xl:grow-0 xl:shrink-0 focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]"
          id="newsletter-email"
          type="email"
          placeholder={EMAIL_PLACEHOLDER}
          value={email}
          onChange={handleEmailChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'newsletter-error' : undefined}
        />
        <button
          type="submit"
          className={`inline-flex min-h-11.5 cursor-pointer items-center justify-center rounded-[1.5rem] border-none bg-brand-lime px-6 py-3 text-[1rem] leading-[1.2] font-medium text-ink no-underline hover:[filter:brightness(0.96)] md:text-[1.125rem] md:max-xl:shrink-0 md:max-xl:grow-0 md:max-xl:basis-auto ${FOCUS_RING}`}
        >
          {SEARCH_BUTTON_LABEL}
        </button>
      </div>
      {error ? (
        <p
          id="newsletter-error"
          className="text-[rgb(180,_35,_24)] text-[0.75rem] leading-[1.6]"
          role="alert"
        >
          {error}
        </p>
      ) : null}
      {isSubscribed ? <p>{NEWSLETTER_SUCCESS}</p> : null}
      <p className="text-[0.75rem] leading-[1.6] lg:max-w-[504px]">{NEWSLETTER_CONSENT}</p>
    </form>
  );
});

NewsletterForm.displayName = 'NewsletterForm';

export const HomeFooter = memo(() => (
  <footer
    id="newsletter"
    className="[border-top-style:solid] border-t border-t-line bg-white text-ink pt-[71px] pb-[48px] [-webkit-font-smoothing:antialiased]"
  >
    <div className="mx-auto w-[min(100%_-_2rem,_75rem)] sm:w-[min(100%_-_2.5rem,_75rem)]">
      <div className="gap-10 grid md:gap-[40px] md:flex md:flex-row md:items-start md:grid-cols-[1.1fr_1fr] md:max-xl:justify-between lg:gap-[48px] xl:gap-[92px]">
        <div className="md:max-lg:grow md:max-lg:basis-auto md:max-lg:max-w-[504px] md:max-xl:shrink md:max-xl:min-w-0 lg:grow-0 lg:basis-[528px] xl:shrink-0">
          <BrandLockup to={ROUTES.HOME} placement="footer" />
          <p className="mt-4 text-[0.875rem] leading-[1.6]">{NEWSLETTER_PROMPT}</p>
          <NewsletterForm />
        </div>
        <FooterLinks />
      </div>
      <div className="gap-4 flex flex-col mt-12 pt-[22px] [border-top-style:solid] border-t border-t-line text-ink text-[0.75rem] leading-[1.6] md:flex-row md:items-center md:justify-between lg:mt-[130px]">
        <p>{COPYRIGHT_TEXT}</p>
        <ul className="flex flex-wrap gap-y-4 gap-x-6">
          {LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              <HomeLink href={link.href} className={UNDERLINE_LINK}>
                {link.label}
              </HomeLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
));

HomeFooter.displayName = 'HomeFooter';
