import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import AuthField from './AuthField';

// White form card shared by sign-in and register: eyebrow + title, the fields, an optional
// form-level error, the submit button, any extra content (e.g. social sign-in), then the line that
// links to the other form. `copy` holds the card's text and the switch link.
const AuthCard = memo(
  ({
    titleId,
    className,
    copy,
    fields,
    values,
    errors,
    isSubmitting,
    onFieldChange,
    onSubmit,
    children,
  }) => (
    <section
      className={className ? `register-card ${className}` : 'register-card'}
      aria-labelledby={titleId}
    >
      <p className="register-eyebrow">{copy.eyebrow}</p>
      <h1 id={titleId}>{copy.title}</h1>
      <form noValidate onSubmit={onSubmit}>
        {fields.map((field) => (
          <AuthField
            key={field.id}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={onFieldChange}
          />
        ))}
        {errors.form ? (
          <p className="register-error" role="alert">
            {errors.form}
          </p>
        ) : null}
        <div className="register-actions">
          <button type="submit" disabled={isSubmitting}>
            {copy.submit}
          </button>
        </div>
      </form>
      {children}
      <p className="register-switch">
        {copy.switchPrompt} <Link to={copy.switchTo}>{copy.switchLink}</Link>
      </p>
    </section>
  ),
);

AuthCard.displayName = 'AuthCard';

export default AuthCard;
