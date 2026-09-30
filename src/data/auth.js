import { ROUTES } from '../config';
import {
  HERO_STUDENT_AVATARS,
  HOME_ASSET_BASE,
  ORNAMENT_TONE_LIME,
  ORNAMENT_TONE_PAPER,
} from './home';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email) => EMAIL_PATTERN.test(email.trim());

export const hasErrors = (errors) => Object.keys(errors).length > 0;

// Validation messages shared by the sign-in and register forms.
const EMAIL_REQUIRED = 'Enter your email.';
const EMAIL_INVALID = 'Enter a valid email address.';
const PASSWORD_REQUIRED = 'Enter a password.';

const emailError = (email) => {
  if (!email.trim()) {
    return EMAIL_REQUIRED;
  }
  if (!isValidEmail(email)) {
    return EMAIL_INVALID;
  }
  return '';
};

export const SIGN_IN_TITLE = 'Sign in with ease';
export const SIGN_IN_BODY =
  'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.';
const SIGN_IN_EYEBROW = 'Sign In';
const WELCOME_BACK_TITLE = 'Welcome Back';
const SIGN_IN_BUTTON = 'Sign In';
export const SIGN_IN_DIVIDER = 'or';
const NEW_USER_LABEL = 'New user?';
const CREATE_ACCOUNT_LINK = 'Create an account';
export const SIGN_IN_SUCCESS = 'You are signed in.';

export const SIGN_IN_CARD = {
  eyebrow: SIGN_IN_EYEBROW,
  title: WELCOME_BACK_TITLE,
  submit: SIGN_IN_BUTTON,
  switchPrompt: NEW_USER_LABEL,
  switchLink: CREATE_ACCOUNT_LINK,
  switchTo: ROUTES.REGISTER,
};

export const SOCIAL_ICON_SIZE = 40;
export const SOCIAL_PROVIDERS = [
  { id: 'facebook', label: 'Continue with Facebook', icon: '/sign-in/facebook.svg' },
  { id: 'google', label: 'Continue with Google', icon: '/sign-in/google.svg' },
];

export const EMPTY_SIGN_IN = {
  email: '',
  password: '',
};

export const SIGN_IN_FIELDS = [
  {
    id: 'sign-in-email',
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'designer@example.com',
    autoComplete: 'email',
  },
  {
    id: 'sign-in-password',
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '********',
    autoComplete: 'current-password',
  },
];

export const SEO_SIGN_IN = {
  title: 'Sign In',
  description: SIGN_IN_BODY,
  keywords: ['ByteSpace', 'sign in', 'login', 'courses'],
};

export const validateSignInForm = ({ email, password }) => {
  const errors = {};
  const nextEmailError = emailError(email);
  if (nextEmailError) {
    errors.email = nextEmailError;
  }
  if (!password) {
    errors.password = PASSWORD_REQUIRED;
  }
  return errors;
};

const asset = (fileName) => `${HOME_ASSET_BASE}/${fileName}`;

// Figma Register "Group 7" ornaments, in Figma paint order.
export const REGISTER_ORNAMENTS = [
  {
    id: 'coil',
    src: asset('ornament-ring.png'),
    className:
      'hidden absolute isolate pointer-events-none lg:block lg:z-2 lg:top-[506px] lg:left-[348px] lg:w-[175px] lg:h-[175px] lg:[transform:scaleX(-1)] lg:right-auto lg:bottom-auto',
    tone: ORNAMENT_TONE_PAPER,
    width: 175,
    height: 175,
  },
  {
    id: 'ring',
    src: asset('cone-a.png'),
    className:
      'hidden absolute isolate pointer-events-none lg:block lg:z-2 lg:top-[200px] lg:left-[29px] lg:w-[146px] lg:h-[146px] lg:right-auto lg:bottom-auto',
    cone: true,
    tone: ORNAMENT_TONE_LIME,
    width: 146,
    height: 146,
  },
  {
    id: 'prism',
    src: asset('cone-c.png'),
    className:
      'hidden absolute isolate pointer-events-none lg:block lg:z-2 lg:top-[582px] lg:left-[-25px] lg:w-[188px] lg:h-[188px] lg:right-auto lg:bottom-auto',
    cone: true,
    tone: ORNAMENT_TONE_LIME,
    width: 188,
    height: 188,
  },
];

const MIN_PASSWORD_LENGTH = 8;

export const SIGN_UP_TITLE = 'Sign up and come in';
export const SIGN_UP_BODY =
  'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost';
const CREATE_ACCOUNT_LABEL = 'Create an Account';
const WELCOME_TITLE = 'Welcome to ByteSpace';
const CONTINUE_LABEL = 'Continue';
const ALREADY_HAVE_ACCOUNT = 'Already have an account?';
const LOGIN_LABEL = 'Login';
export const STUDENTS_RATING = '4.5';
export const STUDENTS_COUNT = '(240)';
export const STUDENTS_LABEL = 'Happy Students';
export const STUDENTS_EXTRA = '2K+';

export const REGISTER_CARD = {
  eyebrow: CREATE_ACCOUNT_LABEL,
  title: WELCOME_TITLE,
  submit: CONTINUE_LABEL,
  switchPrompt: ALREADY_HAVE_ACCOUNT,
  switchLink: LOGIN_LABEL,
  switchTo: ROUTES.SIGN_IN,
};

const FULL_NAME_REQUIRED = 'Enter your full name.';
const PASSWORD_TOO_SHORT = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
export const REGISTER_SUCCESS = 'Account created. Sign in to continue.';

export const EMPTY_REGISTER_ACCOUNT = {
  fullName: '',
  email: '',
  password: '',
};

export const REGISTER_FIELDS = [
  {
    id: 'register-full-name',
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Jamie Davis',
    autoComplete: 'name',
  },
  {
    id: 'register-email',
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'designer@example.com',
    autoComplete: 'email',
  },
  {
    id: 'register-password',
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '********',
    autoComplete: 'new-password',
  },
];

const SHOWCASE_COURSE_LAYOUT = [
  { id: 'digital-asset', placement: 'back' },
  { id: 'big-data', placement: 'front' },
];

export const REGISTER_STUDENT_AVATARS = HERO_STUDENT_AVATARS;

export const SEO_REGISTER = {
  title: 'Create an Account',
  description: SIGN_UP_BODY,
  keywords: ['ByteSpace', 'register', 'create account', 'courses'],
};

const placeShowcaseCourse = (courses) => (slot) => {
  const course = courses.find((item) => item.id === slot.id);
  if (!course) {
    return null;
  }
  return { course, placement: slot.placement };
};

export const selectShowcaseCourses = (courses) =>
  SHOWCASE_COURSE_LAYOUT.map(placeShowcaseCourse(courses)).filter(Boolean);

const passwordError = (password) => {
  if (!password) {
    return PASSWORD_REQUIRED;
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return PASSWORD_TOO_SHORT;
  }
  return '';
};

export const validateRegisterForm = ({ fullName, email, password }) => {
  const errors = {};
  if (!fullName.trim()) {
    errors.fullName = FULL_NAME_REQUIRED;
  }
  const nextEmailError = emailError(email);
  if (nextEmailError) {
    errors.email = nextEmailError;
  }
  const nextPasswordError = passwordError(password);
  if (nextPasswordError) {
    errors.password = nextPasswordError;
  }
  return errors;
};
