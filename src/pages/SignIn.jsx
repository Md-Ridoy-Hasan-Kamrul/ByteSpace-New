import React, { memo } from 'react';
import { useSEO } from '../hooks/useSEO';
import SignInContent from '../components/sign-in/SignInContent';
import { SEO_SIGN_IN } from '../components/sign-in/signInCopy';

const SignIn = memo(() => {
  useSEO(SEO_SIGN_IN);

  return <SignInContent />;
});

SignIn.displayName = 'SignIn';

export default SignIn;
