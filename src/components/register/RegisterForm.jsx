import React, { memo } from 'react';
import { useRegisterForm } from '../../hooks/useRegisterForm';
import AuthCard from '../auth/AuthCard';
import { REGISTER_CARD, REGISTER_FIELDS } from './registerCopy';

const RegisterForm = memo(() => {
  const { values, errors, isSubmitting, handleFieldChange, handleSubmit } = useRegisterForm();

  return (
    <AuthCard
      titleId="register-title"
      copy={REGISTER_CARD}
      fields={REGISTER_FIELDS}
      values={values}
      errors={errors}
      isSubmitting={isSubmitting}
      onFieldChange={handleFieldChange}
      onSubmit={handleSubmit}
    />
  );
});

RegisterForm.displayName = 'RegisterForm';

export default RegisterForm;
