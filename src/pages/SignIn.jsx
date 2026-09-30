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

const SocialButton = memo(({ provider }) => (
  <button type="button" className="rounded-[0.875rem] border border-solid border-field grid items-center justify-items-center w-12 h-12 bg-white cursor-pointer md:rounded-[1rem] md:w-14 md:h-14 xl:rounded-[24px] xl:border-[rgb(209,_209,_209)] xl:w-[72px] xl:h-[72px] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]" aria-label={provider.label}>
    <img className="w-5 h-5 md:w-6 md:h-6 xl:w-[40px] xl:h-[40px]" src={provider.icon} alt="" width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE} />
  </button>
));

SocialButton.displayName = 'SocialButton';

const SignInSocial = memo(({ divider }) => (
  <div className="mt-7 xl:mt-[73px]">
    <p className="gap-3 grid grid-cols-[1fr_auto_1fr] items-center text-muted text-[0.875rem] md:text-[1.125rem] xl:gap-[11px] xl:grid-cols-[200px_auto_200px] xl:text-[rgb(136,_136,_136)] xl:[justify-content:start] xl:leading-[29px]">
      <span className="h-[1px] bg-field xl:[background-position:initial_initial] xl:bg-[rgb(209,_209,_209)] xl:bg-[initial] xl:[background-size:initial] xl:[background-repeat:initial] xl:[background-attachment:initial] xl:[background-origin:initial] xl:[background-clip:initial]" />
      {divider}
      <span className="h-[1px] bg-field xl:[background-position:initial_initial] xl:bg-[rgb(209,_209,_209)] xl:bg-[initial] xl:[background-size:initial] xl:[background-repeat:initial] xl:[background-attachment:initial] xl:[background-origin:initial] xl:[background-clip:initial]" />
    </p>
    <div className="gap-4 flex justify-center mt-6 xl:gap-[16px] xl:mt-[40px]">
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
      variant="signIn"
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
