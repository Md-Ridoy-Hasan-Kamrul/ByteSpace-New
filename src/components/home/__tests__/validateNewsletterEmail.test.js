import {
  NEWSLETTER_EMAIL_REQUIRED,
  NEWSLETTER_EMAIL_INVALID,
} from '../homeData';
import { getNewsletterEmailError } from '../validateNewsletterEmail';

describe('getNewsletterEmailError', () => {
  it('asks for an email when the field is blank', () => {
    expect(getNewsletterEmailError('   ')).toBe(NEWSLETTER_EMAIL_REQUIRED);
  });

  it('rejects an address that is missing a domain', () => {
    expect(getNewsletterEmailError('learner@')).toBe(NEWSLETTER_EMAIL_INVALID);
  });

  it('accepts a complete email address', () => {
    expect(getNewsletterEmailError(' learner@bytespace.com ')).toBe('');
  });
});
