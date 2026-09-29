import {
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  FULL_NAME_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_TOO_SHORT,
} from '../registerCopy';
import { MIN_PASSWORD_LENGTH, validateRegisterForm } from '../validateRegisterForm';

const validAccount = {
  fullName: 'Jamie Davis',
  email: 'designer@example.com',
  password: 'a'.repeat(MIN_PASSWORD_LENGTH),
};

describe('validateRegisterForm', () => {
  it('accepts a complete account', () => {
    expect(validateRegisterForm(validAccount)).toEqual({});
  });

  it('requires every field when the form is blank', () => {
    expect(validateRegisterForm({ fullName: '  ', email: '', password: '' })).toEqual({
      fullName: FULL_NAME_REQUIRED,
      email: EMAIL_REQUIRED,
      password: PASSWORD_REQUIRED,
    });
  });

  it('rejects an email without a domain', () => {
    expect(validateRegisterForm({ ...validAccount, email: 'designer@' })).toEqual({
      email: EMAIL_INVALID,
    });
  });

  it('rejects a password shorter than the minimum', () => {
    expect(
      validateRegisterForm({
        ...validAccount,
        password: 'a'.repeat(MIN_PASSWORD_LENGTH - 1),
      }),
    ).toEqual({ password: PASSWORD_TOO_SHORT });
  });
});
