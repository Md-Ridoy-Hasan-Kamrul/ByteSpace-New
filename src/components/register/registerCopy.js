import { HERO_STUDENT_AVATARS } from '../home/homeAssets';

export const MIN_PASSWORD_LENGTH = 8;

export const BRAND_NAME = 'ByteSpace';
export const SIGN_UP_TITLE = 'Sign up and come in';
export const SIGN_UP_BODY =
  'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost';
export const CREATE_ACCOUNT_LABEL = 'Create an Account';
export const WELCOME_TITLE = 'Welcome to ByteSpace';
export const CONTINUE_LABEL = 'Continue';
export const ALREADY_HAVE_ACCOUNT = 'Already have an account?';
export const LOGIN_LABEL = 'Login';
export const STUDENTS_RATING = '4.5';
export const STUDENTS_COUNT = '(240)';
export const STUDENTS_LABEL = 'Happy Students';
export const STUDENTS_EXTRA = '2K+';

export const FULL_NAME_REQUIRED = 'Enter your full name.';
export const EMAIL_REQUIRED = 'Enter your email.';
export const EMAIL_INVALID = 'Enter a valid email address.';
export const PASSWORD_REQUIRED = 'Enter a password.';
export const PASSWORD_TOO_SHORT = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
export const REGISTER_FAILED = 'We could not create your account. Please try again.';
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

export const SHOWCASE_COURSE_LAYOUT = [
  { id: 'digital-asset', placement: 'back' },
  { id: 'big-data', placement: 'front' },
];

export const REGISTER_STUDENT_AVATARS = HERO_STUDENT_AVATARS;

export const SEO_REGISTER = {
  title: 'Create an Account | ByteSpace',
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
