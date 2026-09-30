import React, { memo, useCallback, useState } from 'react';
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
import { BrandLockup, HomeLink } from './Header';

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
        <button type="submit" className="home-button">
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

export const HomeFooter = memo(() => (
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
