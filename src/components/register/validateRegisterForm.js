import { PASSWORD_REQUIRED } from '../auth/authCopy';
import { emailError } from '../auth/emailError';
import { FULL_NAME_REQUIRED, MIN_PASSWORD_LENGTH, PASSWORD_TOO_SHORT } from './registerCopy';

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

export { MIN_PASSWORD_LENGTH };
