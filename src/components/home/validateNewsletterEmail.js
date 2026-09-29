import { NEWSLETTER_EMAIL_INVALID, NEWSLETTER_EMAIL_REQUIRED } from './homeData';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getNewsletterEmailError = (email) => {
  const trimmedEmail = email.trim();
  if (!trimmedEmail) {
    return NEWSLETTER_EMAIL_REQUIRED;
  }
  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return NEWSLETTER_EMAIL_INVALID;
  }
  return '';
};
