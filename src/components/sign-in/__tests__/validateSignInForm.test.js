import { EMAIL_INVALID, EMAIL_REQUIRED, PASSWORD_REQUIRED } from '../../auth/authCopy';
import { validateSignInForm } from '../validateSignInForm';

describe('validateSignInForm', () => {
  it('accepts an email and password', () => {
    expect(validateSignInForm({ email: 'designer@example.com', password: 'bytespace' })).toEqual(
      {},
    );
  });

  it('requires both fields when the form is blank', () => {
    expect(validateSignInForm({ email: '  ', password: '' })).toEqual({
      email: EMAIL_REQUIRED,
      password: PASSWORD_REQUIRED,
    });
  });

  it('rejects an email without a domain', () => {
    expect(validateSignInForm({ email: 'designer@', password: 'bytespace' })).toEqual({
      email: EMAIL_INVALID,
    });
  });
});
