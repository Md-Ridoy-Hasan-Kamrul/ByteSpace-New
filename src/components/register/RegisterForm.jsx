import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';
import { useRegisterForm } from '../../hooks/useRegisterForm';
import {
  ALREADY_HAVE_ACCOUNT,
  CONTINUE_LABEL,
  CREATE_ACCOUNT_LABEL,
  LOGIN_LABEL,
  REGISTER_FIELDS,
  WELCOME_TITLE,
} from './registerCopy';
import RegisterField from './RegisterField';

const RegisterForm = memo(() => {
  const { values, errors, isSubmitting, handleFieldChange, handleSubmit } = useRegisterForm();

  return (
    <section className="register-card" aria-labelledby="register-title">
      <p className="register-eyebrow">{CREATE_ACCOUNT_LABEL}</p>
      <h1 id="register-title">{WELCOME_TITLE}</h1>
      <form noValidate onSubmit={handleSubmit}>
        {REGISTER_FIELDS.map((field) => (
          <RegisterField
            key={field.id}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={handleFieldChange}
          />
        ))}
        {errors.form ? (
          <p className="register-error" role="alert">
            {errors.form}
          </p>
        ) : null}
        <div className="register-actions">
          <button type="submit" disabled={isSubmitting}>
            {CONTINUE_LABEL}
          </button>
        </div>
      </form>
      <p className="register-switch">
        {ALREADY_HAVE_ACCOUNT} <Link to={ROUTES.SIGN_IN}>{LOGIN_LABEL}</Link>
      </p>
    </section>
  );
});

RegisterForm.displayName = 'RegisterForm';

export default RegisterForm;
