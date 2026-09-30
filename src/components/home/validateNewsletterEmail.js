import { isValidEmail } from '../../utils/validation';
import { NEWSLETTER_EMAIL_INVALID, NEWSLETTER_EMAIL_REQUIRED } from './homeData';

export const getNewsletterEmailError = (email) => {
  if (!email.trim()) {
    return NEWSLETTER_EMAIL_REQUIRED;
  }
  if (!isValidEmail(email)) {
    return NEWSLETTER_EMAIL_INVALID;
  }
  return '';
};
