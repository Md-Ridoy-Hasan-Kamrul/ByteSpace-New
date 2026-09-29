import React, { memo } from 'react';
import { ROUTES } from '../../config';
import { useNewsletterForm } from '../../hooks/useNewsletterForm';
import {
  COPYRIGHT_TEXT,
  FOOTER_LINK_GROUPS,
  LEGAL_LINKS,
  EMAIL_PLACEHOLDER,
  NEWSLETTER_CONSENT,
  NEWSLETTER_PROMPT,
  NEWSLETTER_SUCCESS,
  SEARCH_BUTTON_LABEL,
} from './homeData';
import BrandLockup from './BrandLockup';
import HomeLink from './HomeLink';

const NEWSLETTER_BUTTON_LABEL = 'Subscribe';

const FooterLinks = memo(() => (
  <div className="home-footer-links">
    {FOOTER_LINK_GROUPS.map((group) => (
      <ul key={group[0].label}>
        {group.map((link) => (
          <li key={link.label}>
            <HomeLink to={link.to} href={link.href}>
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
    <form className="home-newsletter" noValidate onSubmit={handleSubmit}>
      <div className="home-newsletter-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder={EMAIL_PLACEHOLDER}
          value={email}
          onChange={handleEmailChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'newsletter-error' : undefined}
        />
        <button type="submit" className="home-button" aria-label={NEWSLETTER_BUTTON_LABEL}>
          {SEARCH_BUTTON_LABEL}
        </button>
      </div>
      {error ? (
        <p id="newsletter-error" className="home-newsletter-error" role="alert">
          {error}
        </p>
      ) : null}
      {isSubscribed ? <p>{NEWSLETTER_SUCCESS}</p> : null}
      <p>{NEWSLETTER_CONSENT}</p>
    </form>
  );
});

NewsletterForm.displayName = 'NewsletterForm';

const HomeFooter = memo(() => (
  <footer id="newsletter" className="home-footer">
    <div className="home-wrap">
      <div className="home-footer-grid">
        <div>
          <BrandLockup to={ROUTES.HOME} />
          <p>{NEWSLETTER_PROMPT}</p>
          <NewsletterForm />
        </div>
        <FooterLinks />
      </div>
      <div className="home-legal">
        <p>{COPYRIGHT_TEXT}</p>
        <ul>
          {LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              <HomeLink href={link.href}>{link.label}</HomeLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
));

HomeFooter.displayName = 'HomeFooter';

export default HomeFooter;
