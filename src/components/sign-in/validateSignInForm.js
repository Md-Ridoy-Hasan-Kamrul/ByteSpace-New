import { EMAIL_INVALID, EMAIL_REQUIRED, PASSWORD_REQUIRED } from './signInCopy';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailError = (email) => {
  if (!email.trim()) {
    return EMAIL_REQUIRED;
  }
  if (!EMAIL_PATTERN.test(email.trim())) {
    return EMAIL_INVALID;
  }
  return '';
};

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

export const hasSignInErrors = (errors) => Object.keys(errors).length > 0;
