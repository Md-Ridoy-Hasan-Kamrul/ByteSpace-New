import React, { memo } from 'react';
import { useSignInForm } from '../../hooks/useSignInForm';
import AuthCard from '../auth/AuthCard';
import { SIGN_IN_CARD, SIGN_IN_DIVIDER, SIGN_IN_FIELDS } from './signInCopy';
import SignInSocial from './SignInSocial';
import './signIn.css';

const SignInForm = memo(() => {
  const { values, errors, handleFieldChange, handleSubmit } = useSignInForm();

  return (
    <AuthCard
      titleId="sign-in-title"
      className="sign-in-card"
      copy={SIGN_IN_CARD}
      fields={SIGN_IN_FIELDS}
      values={values}
      errors={errors}
      onFieldChange={handleFieldChange}
      onSubmit={handleSubmit}
    >
      <SignInSocial divider={SIGN_IN_DIVIDER} />
    </AuthCard>
  );
});

SignInForm.displayName = 'SignInForm';

export default SignInForm;
