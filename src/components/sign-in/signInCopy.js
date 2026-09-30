import { ROUTES } from '../../config';

export const SIGN_IN_TITLE = 'Sign in with ease';
export const SIGN_IN_BODY =
  'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.';
export const SIGN_IN_EYEBROW = 'Sign In';
export const WELCOME_BACK_TITLE = 'Welcome Back';
export const SIGN_IN_BUTTON = 'Sign In';
export const SIGN_IN_DIVIDER = 'or';
export const NEW_USER_LABEL = 'New user?';
export const CREATE_ACCOUNT_LINK = 'Create an account';
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
