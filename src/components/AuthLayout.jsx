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

// Figma Register "Happy Students" card.
const RegisterStudentsCard = memo(() => (
  <article className="lg:p-[16px] lg:gap-[8px] lg:rounded-[16px] lg:absolute lg:flex lg:flex-col lg:justify-center lg:w-[258px] lg:bg-brand-lime lg:text-ink lg:[backdrop-filter:blur(10px)] lg:z-auto lg:top-[620px] lg:left-[226px]">
    <div>
      <p className="lg:m-0 lg:text-[1rem] lg:font-medium lg:leading-[24px]">{STUDENTS_LABEL}</p>
      <p className="lg:whitespace-pre lg:m-0 lg:flex lg:items-center lg:text-[rgb(66,_67,_72)] lg:text-[0.625rem] lg:leading-[1.5]">
        <strong className="lg:text-ink lg:font-bold">{`${STUDENTS_RATING} `}</strong>
        {STUDENTS_COUNT}
        <span className="lg:relative lg:w-[16px] lg:h-[16px]">
          <img className="lg:absolute lg:top-[6.92%] lg:left-[8.87%] lg:w-[82.26%] lg:h-[78.55%]" src={ICON_STAR_BLUE} alt="" />
        </span>
      </p>
    </div>
    <AvatarStack
variant="register"
      avatars={REGISTER_STUDENT_AVATARS}
      extraLabel={STUDENTS_EXTRA}
      badgeSrc={AVATAR_MORE_DARK}
      size={HERO_AVATAR_SIZE}
    />
  </article>
));

RegisterStudentsCard.displayName = 'RegisterStudentsCard';

const showcaseCourses = selectShowcaseCourses(HOME_COURSES);

const SHOWCASE_PLACEMENT = {
  back: 'lg:absolute lg:top-[274px] lg:left-0 lg:z-auto lg:w-[373px]',
  front: 'lg:absolute lg:top-[185px] lg:left-[111px] lg:z-auto lg:w-[373px]',
};

// Figma Register "Group 7": cards first, ornaments painted on top.
const RegisterShowcase = memo(() => (
  <div className="hidden lg:m-0 lg:block lg:static lg:min-h-0 lg:max-xl:[zoom:min(1,_tan(atan2(50cqw_-_101px,_500px)))]">
    {showcaseCourses.map(({ course, placement }) => (
      <div key={course.id} className={SHOWCASE_PLACEMENT[placement]}>
        <CourseCard
          course={course}
          variant="showcase"
          ratingIcon={ICON_STAR_LIME}
          extraBadge={LEARNER_MORE_DARK}
        />
      </div>
    ))}
    <RegisterStudentsCard />
    <OrnamentField ornaments={REGISTER_ORNAMENTS} />
  </div>
));

RegisterShowcase.displayName = 'RegisterShowcase';

// Shared Figma auth layout for Register and Login.
export const AuthScreen = memo(({ title, body, children }) => (
  <main className="bg-center min-h-screen bg-brand-blue bg-[url(/home/hero-grid.svg)] [background-size:cover] text-white font-body lg:overflow-hidden lg:[background-position:max(0px,_50%_-_660px)_0px] lg:min-h-0 lg:bg-[url(/home/grid-tile.svg)] lg:[background-size:120px_120px] lg:bg-repeat lg:[-webkit-font-smoothing:antialiased] lg:grid lg:[align-content:center] lg:h-[100dvh]">
    <div className="mx-auto w-[min(100%_-_(1rem_*_2),_90rem)] pt-5 pb-10 xs:w-[min(100%_-_(1.25rem_*_2),_90rem)] md:w-[min(100%_-_(2rem_*_2),_90rem)] lg:p-0 lg:w-[min(100%,_90rem)] lg:relative lg:min-h-0 lg:max-xl:h-[940px] lg:max-xl:[zoom:min(1,_tan(atan2(100dvh,_940px)))] lg:max-xl:[container-type:inline-size] xl:h-[944px] xl:[zoom:min(1,_tan(atan2(100dvh,_944px)))]">
      <Link to={ROUTES.HOME} className="inline-flex lg:absolute lg:top-[35px] lg:max-xl:left-[40px] xl:left-[122px] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]" aria-label={BRAND_NAME}>
        <img src={HOME_LOGO} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      </Link>
      <div className="gap-6 grid mt-6 lg:m-0 lg:gap-8 lg:block lg:grid-cols-[minmax(0,_1fr)_28rem] lg:items-center">
        <section className="lg:absolute lg:top-[120px] lg:max-xl:left-[40px] lg:max-xl:w-[calc(50cqw_-_61px)] xl:left-[122px] xl:w-[475px]">
          <h2 className="max-w-64 font-display text-[1.25rem] font-semibold leading-[1.3] lg:whitespace-nowrap lg:max-w-none lg:leading-[1.2] lg:text-canvas lg:tracking-[-0.01em]">{title}</h2>
          <p className="max-w-112 mt-3 text-canvas text-[0.875rem] leading-[1.6] sm:text-[1rem] lg:max-w-[475px] lg:mt-[16px] lg:text-[1.125rem]">{body}</p>
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
  <div className="gap-2 grid lg:gap-[8px]">
    <label className="text-[0.875rem] font-medium lg:leading-[17px]" htmlFor={field.id}>{field.label}</label>
    <input className="px-6 rounded-[0.75rem] border border-solid border-field w-full h-13 text-ink text-[1rem] bg-white md:text-[1.125rem] lg:px-[24px] lg:rounded-[12px] lg:h-[52px] lg:leading-[1.6] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]"
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
      <p id={fieldErrorId(field.id)} className="text-danger text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem]" role="alert">
        {error}
      </p>
    ) : null}
  </div>
));

AuthField.displayName = 'AuthField';

const CARD_BASE =
  'rounded-[1.5rem] bg-white px-5 pt-6 pb-7 text-ink xs:px-6 xs:pt-8 md:px-10 md:pt-12 lg:absolute lg:top-[120px] lg:rounded-[24px] lg:px-[40px] lg:pt-[48px] lg:pb-[44px] lg:max-xl:right-[40px] lg:max-xl:left-auto lg:max-xl:w-[calc(50cqw_-_21px)] xl:left-[calc(50%_+_21px)] xl:w-[579px] xl:px-[63px] xl:pt-[61px]';
const SWITCH_BASE =
  'mt-6 text-center text-[1rem] text-body md:text-left lg:mt-[72px] lg:text-center lg:leading-[26px]';

// Sign-in and register share the card; they differ only in bottom spacing at desktop width.
const CARD = {
  register: { card: `${CARD_BASE} xl:pb-[51px]`, switchLine: `${SWITCH_BASE} xl:mt-[122px]` },
  signIn: { card: `${CARD_BASE} xl:pb-[40px]`, switchLine: `${SWITCH_BASE} xl:mt-[73px] xl:text-[#888888]` },
};

// White form card shared by sign-in and register: eyebrow + title, the fields, the submit button,
// any extra content (e.g. social sign-in), then the line linking to the other form.
export const AuthCard = memo(
  ({ titleId, variant = 'register', copy, fields, values, errors, onFieldChange, onSubmit, children }) => (
    <section className={CARD[variant].card} aria-labelledby={titleId}>
      <p className="text-brand-blue text-[1rem] font-medium md:text-[1.125rem] lg:font-normal lg:leading-[29px]">{copy.eyebrow}</p>
      <h1 className="mt-[0.35rem] font-display text-[clamp(1.625rem,_7.5vw,_1.875rem)] font-semibold tracking-[-0.01em] leading-[1.15] md:text-[clamp(2rem,_8vw,_2.75rem)] lg:mt-0 lg:text-[2.75rem] lg:leading-[53px]" id={titleId}>{copy.title}</h1>
      <form className="gap-5 grid mt-7 lg:gap-[24px] lg:mt-[40px]" noValidate onSubmit={onSubmit}>
        {fields.map((field) => (
          <AuthField
            key={field.id}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={onFieldChange}
          />
        ))}
        <div className="flex justify-stretch md:justify-end">
          <button className="rounded-[1.5rem] border-none w-full min-h-13 bg-brand-lime text-ink text-[1rem] font-medium cursor-pointer md:w-auto md:text-[1.125rem] md:max-lg:px-10 lg:py-[12px] lg:px-[24px] lg:rounded-[24px] lg:min-h-0 lg:leading-[22px] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]" type="submit">{copy.submit}</button>
        </div>
      </form>
      {children}
      <p className={CARD[variant].switchLine}>
        {copy.switchPrompt}{' '}
        <Link
          to={copy.switchTo}
          className="font-semibold text-brand-blue no-underline hover:underline focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px] lg:font-normal"
        >
          {copy.switchLink}
        </Link>
      </p>
    </section>
  ),
);

AuthCard.displayName = 'AuthCard';
