import { PASSWORD_REQUIRED } from '../auth/authCopy';
import { emailError } from '../auth/emailError';

export const validateSignInForm = ({ email, password }) => {
  const errors = {};
  const nextEmailError = emailError(email);
  if (nextEmailError) {
    errors.email = nextEmailError;
  }
  if (!password) {
    errors.password = PASSWORD_REQUIRED;
  }
  return errors;
};
