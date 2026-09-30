import React, { memo } from 'react';

const fieldErrorId = (fieldId) => `${fieldId}-error`;

const RegisterField = memo(({ field, value, error, onChange }) => (
  <div className="register-field">
    <label htmlFor={field.id}>{field.label}</label>
    <input
      id={field.id}
      name={field.name}
      type={field.type}
      value={value}
      placeholder={field.placeholder}
      autoComplete={field.autoComplete}
      onChange={onChange}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? fieldErrorId(field.id) : undefined}
    />
    {error ? (
      <p id={fieldErrorId(field.id)} className="register-error" role="alert">
        {error}
      </p>
    ) : null}
  </div>
));

RegisterField.displayName = 'RegisterField';

export default RegisterField;
