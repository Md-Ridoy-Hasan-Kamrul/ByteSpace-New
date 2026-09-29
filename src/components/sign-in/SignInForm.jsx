import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';
import { useSignInForm } from '../../hooks/useSignInForm';
import RegisterField from '../register/RegisterField';
import {
  CREATE_ACCOUNT_LINK,
  NEW_USER_LABEL,
  SIGN_IN_BUTTON,
  SIGN_IN_DIVIDER,
  SIGN_IN_EYEBROW,
  SIGN_IN_FIELDS,
  WELCOME_BACK_TITLE,
} from './signInCopy';
import SignInSocial from './SignInSocial';
import './signIn.css';

const SignInForm = memo(() => {
  const { values, errors, handleFieldChange, handleSubmit } = useSignInForm();

  return (
    <section className="register-card" aria-labelledby="sign-in-title">
      <p className="register-eyebrow">{SIGN_IN_EYEBROW}</p>
      <h1 id="sign-in-title">{WELCOME_BACK_TITLE}</h1>
      <form noValidate onSubmit={handleSubmit}>
        {SIGN_IN_FIELDS.map((field) => (
          <RegisterField
            key={field.id}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={handleFieldChange}
          />
        ))}
        <div className="register-actions">
          <button type="submit">{SIGN_IN_BUTTON}</button>
        </div>
      </form>
      <SignInSocial divider={SIGN_IN_DIVIDER} />
      <p className="register-switch">
        {NEW_USER_LABEL} <Link to={ROUTES.REGISTER}>{CREATE_ACCOUNT_LINK}</Link>
      </p>
    </section>
  );
});

SignInForm.displayName = 'SignInForm';

export default SignInForm;
