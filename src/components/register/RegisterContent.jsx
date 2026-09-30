import React, { memo } from 'react';
import { SIGN_UP_BODY, SIGN_UP_TITLE } from './registerCopy';
import AuthScreen from '../auth/AuthScreen';
import RegisterForm from './RegisterForm';

const RegisterContent = memo(() => (
  <AuthScreen title={SIGN_UP_TITLE} body={SIGN_UP_BODY}>
    <RegisterForm />
  </AuthScreen>
));

RegisterContent.displayName = 'RegisterContent';

export default RegisterContent;
