import React, { memo } from 'react';
import AuthScreen from '../register/AuthScreen';
import { SIGN_IN_BODY, SIGN_IN_TITLE } from './signInCopy';
import SignInForm from './SignInForm';
import SignInShowcase from './SignInShowcase';
import './signIn.css';

const SignInContent = memo(() => (
  <AuthScreen title={SIGN_IN_TITLE} body={SIGN_IN_BODY} showcase={<SignInShowcase />}>
    <SignInForm />
  </AuthScreen>
));

SignInContent.displayName = 'SignInContent';

export default SignInContent;
