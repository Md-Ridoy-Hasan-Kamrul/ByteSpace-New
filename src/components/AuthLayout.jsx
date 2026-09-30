import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config';
import {
  REGISTER_ORNAMENTS,
  REGISTER_STUDENT_AVATARS,
  STUDENTS_COUNT,
  STUDENTS_EXTRA,
  STUDENTS_LABEL,
  STUDENTS_RATING,
  selectShowcaseCourses,
} from '../data/auth';
import {
  AVATAR_MORE_DARK,
  BRAND_NAME,
  HERO_AVATAR_SIZE,
  HOME_COURSES,
  HOME_LOGO,
  ICON_STAR_BLUE,
  ICON_STAR_LIME,
  LEARNER_MORE_DARK,
  LOGO_HEIGHT,
  LOGO_WIDTH,
} from '../data/home';
import { AvatarStack, CourseCard } from './CourseCard';
import { OrnamentField } from './Ornaments';
import '../styles/home.css';
import '../styles/auth.css';

// Figma Register "Happy Students" card.
const RegisterStudentsCard = memo(() => (
  <article className="register-students">
    <div>
      <p className="register-students-label">{STUDENTS_LABEL}</p>
      <p className="register-students-score">
        <strong>{`${STUDENTS_RATING} `}</strong>
        {STUDENTS_COUNT}
        <span className="register-students-star">
          <img src={ICON_STAR_BLUE} alt="" />
        </span>
      </p>
    </div>
    <AvatarStack
      avatars={REGISTER_STUDENT_AVATARS}
      extraLabel={STUDENTS_EXTRA}
      badgeSrc={AVATAR_MORE_DARK}
      size={HERO_AVATAR_SIZE}
    />
  </article>
));

RegisterStudentsCard.displayName = 'RegisterStudentsCard';

const showcaseCourses = selectShowcaseCourses(HOME_COURSES);

// Figma Register "Group 7": cards first, ornaments painted on top.
const RegisterShowcase = memo(() => (
  <div className="register-showcase">
    {showcaseCourses.map(({ course, placement }) => (
      <div
        key={course.id}
        className={`register-course register-course-${placement} home-figma-card`}
      >
        <CourseCard course={course} ratingIcon={ICON_STAR_LIME} extraBadge={LEARNER_MORE_DARK} />
      </div>
    ))}
    <RegisterStudentsCard />
    <OrnamentField ornaments={REGISTER_ORNAMENTS} />
  </div>
));

RegisterShowcase.displayName = 'RegisterShowcase';

// Shared Figma auth layout for Register and Login.
export const AuthScreen = memo(({ title, body, children }) => (
  <main className="register-page">
    <div className="register-shell">
      <Link to={ROUTES.HOME} className="register-logo" aria-label={BRAND_NAME}>
        <img src={HOME_LOGO} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      </Link>
      <div className="register-layout">
        <section className="register-story">
          <h2>{title}</h2>
          <p>{body}</p>
          <RegisterShowcase />
        </section>
        {children}
      </div>
    </div>
  </main>
));

AuthScreen.displayName = 'AuthScreen';

const fieldErrorId = (fieldId) => `${fieldId}-error`;

const AuthField = memo(({ field, value, error, onChange }) => (
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

AuthField.displayName = 'AuthField';

// White form card shared by sign-in and register: eyebrow + title, the fields, the submit button,
// any extra content (e.g. social sign-in), then the line linking to the other form.
export const AuthCard = memo(
  ({ titleId, className, copy, fields, values, errors, onFieldChange, onSubmit, children }) => (
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
        <div className="register-actions">
          <button type="submit">{copy.submit}</button>
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
