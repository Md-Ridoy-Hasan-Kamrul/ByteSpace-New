import {
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  FULL_NAME_REQUIRED,
  MIN_PASSWORD_LENGTH,
  PASSWORD_REQUIRED,
  PASSWORD_TOO_SHORT,
} from './registerCopy';

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

const passwordError = (password) => {
  if (!password) {
    return PASSWORD_REQUIRED;
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return PASSWORD_TOO_SHORT;
  }
  return '';
};

export const validateRegisterForm = ({ fullName, email, password }) => {
  const errors = {};
  if (!fullName.trim()) {
    errors.fullName = FULL_NAME_REQUIRED;
  }
  const nextEmailError = emailError(email);
  if (nextEmailError) {
    errors.email = nextEmailError;
  }
  const nextPasswordError = passwordError(password);
  if (nextPasswordError) {
    errors.password = nextPasswordError;
  }
  return errors;
};

export const hasRegisterErrors = (errors) => Object.keys(errors).length > 0;

export { MIN_PASSWORD_LENGTH };
