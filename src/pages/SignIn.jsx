import React, { memo } from 'react';
import { AuthCard, AuthScreen } from '../components/AuthLayout';
import { ROUTES } from '../config';
import {
  EMPTY_SIGN_IN,
  SEO_SIGN_IN,
  SIGN_IN_BODY,
  SIGN_IN_CARD,
  SIGN_IN_DIVIDER,
  SIGN_IN_FIELDS,
  SIGN_IN_SUCCESS,
  SIGN_IN_TITLE,
  SOCIAL_ICON_SIZE,
  SOCIAL_PROVIDERS,
  validateSignInForm,
} from '../data/auth';
import { useAuthForm } from '../hooks/useAuthForm';
import { useSEO } from '../hooks/useSEO';
import '../styles/auth.css';

const SocialButton = memo(({ provider }) => (
  <button type="button" className="sign-in-social-button" aria-label={provider.label}>
    <img src={provider.icon} alt="" width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE} />
  </button>
));

SocialButton.displayName = 'SocialButton';

const SignInSocial = memo(({ divider }) => (
  <div className="sign-in-social">
    <p className="sign-in-divider">
      <span />
      {divider}
      <span />
    </p>
    <div className="sign-in-providers">
      {SOCIAL_PROVIDERS.map((provider) => (
        <SocialButton key={provider.id} provider={provider} />
      ))}
    </div>
  </div>
));

SignInSocial.displayName = 'SignInSocial';

const SIGN_IN_FORM = {
  initialValues: EMPTY_SIGN_IN,
  validate: validateSignInForm,
  successMessage: SIGN_IN_SUCCESS,
  redirectTo: ROUTES.HOME,
};

const SignInForm = memo(() => {
  const { values, errors, handleFieldChange, handleSubmit } = useAuthForm(SIGN_IN_FORM);

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

const SignInContent = memo(() => (
  <AuthScreen title={SIGN_IN_TITLE} body={SIGN_IN_BODY}>
    <SignInForm />
  </AuthScreen>
));

SignInContent.displayName = 'SignInContent';

const SignIn = memo(() => {
  useSEO(SEO_SIGN_IN);

  return <SignInContent />;
});

SignIn.displayName = 'SignIn';

export default SignIn;
