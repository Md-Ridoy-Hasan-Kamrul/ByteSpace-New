import React, { memo } from 'react';
import { AuthCard, AuthScreen } from '../components/AuthLayout';
import { ROUTES } from '../config';
import {
  EMPTY_REGISTER_ACCOUNT,
  REGISTER_CARD,
  REGISTER_FIELDS,
  REGISTER_SUCCESS,
  SEO_REGISTER,
  SIGN_UP_BODY,
  SIGN_UP_TITLE,
  validateRegisterForm,
} from '../data/auth';
import { useAuthForm } from '../hooks/useAuthForm';
import { useSEO } from '../hooks/useSEO';

const REGISTER_FORM = {
  initialValues: EMPTY_REGISTER_ACCOUNT,
  validate: validateRegisterForm,
  successMessage: REGISTER_SUCCESS,
  redirectTo: ROUTES.SIGN_IN,
};

const RegisterForm = memo(() => {
  const { values, errors, handleFieldChange, handleSubmit } = useAuthForm(REGISTER_FORM);

  return (
    <AuthCard
      titleId="register-title"
      copy={REGISTER_CARD}
      fields={REGISTER_FIELDS}
      values={values}
      errors={errors}
      onFieldChange={handleFieldChange}
      onSubmit={handleSubmit}
    />
  );
});

RegisterForm.displayName = 'RegisterForm';

const RegisterContent = memo(() => (
  <AuthScreen title={SIGN_UP_TITLE} body={SIGN_UP_BODY}>
    <RegisterForm />
  </AuthScreen>
));

RegisterContent.displayName = 'RegisterContent';

const Register = memo(() => {
  useSEO(SEO_REGISTER);

  return <RegisterContent />;
});

Register.displayName = 'Register';

export default Register;
