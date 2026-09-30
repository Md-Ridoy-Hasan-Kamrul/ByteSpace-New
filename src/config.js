export const SITE_NAME = 'ByteSpace New';

export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  COURSE_DETAILS: '/courses/:courseId',
  CREATOR_PROFILE: '/creators/:creatorId',
  SIGN_IN: '/sign-in',
  REGISTER: '/register',
};

export const courseDetailsPath = (courseId) => ROUTES.COURSE_DETAILS.replace(':courseId', courseId);

export const PRIMARY_CREATOR_ID = 'purepearl';

export const creatorProfilePath = (creatorId) =>
  ROUTES.CREATOR_PROFILE.replace(':creatorId', creatorId);

export const TOAST_CONFIG = {
  POSITION: 'top-center',
  DURATION: 3000,
};
