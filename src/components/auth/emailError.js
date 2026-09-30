import { isValidEmail } from '../../utils/validation';
import { EMAIL_INVALID, EMAIL_REQUIRED } from './authCopy';

export const emailError = (email) => {
  if (!email.trim()) {
    return EMAIL_REQUIRED;
  }
  if (!isValidEmail(email)) {
    return EMAIL_INVALID;
  }
  return '';
};
