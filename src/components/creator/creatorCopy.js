import { PRIMARY_CREATOR_ID } from '../../config';
import { HOME_COURSES } from '../home/homeData';
import { CREATOR_PORTRAIT } from './creatorAssets';

export const CREATOR_ID = PRIMARY_CREATOR_ID;
export const CREATOR_BADGE = 'Creator';
export const FOLLOW_LABEL = 'Follow';
export const PRODUCTS_COUNT = '3';
export const PRODUCTS_LABEL = 'Products';
export const FOLLOWERS_COUNT = '12';
export const FOLLOWERS_LABEL = 'Followers';
export const EMPTY_COURSES_MESSAGE = 'No courses match these filters.';
export const MISSING_CREATOR_MESSAGE = 'This creator profile is not available.';

export const CREATOR_BIO = [
  "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
  'ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.',
];

export const CREATOR_STATS = [
  { id: 'products', count: PRODUCTS_COUNT, label: PRODUCTS_LABEL },
  { id: 'followers', count: FOLLOWERS_COUNT, label: FOLLOWERS_LABEL },
];

export const CREATOR_PROFILE = {
  id: CREATOR_ID,
  name: 'PurePearl Studio',
  role: 'Passionate UI/UX, Web designer',
  badge: CREATOR_BADGE,
  portrait: CREATOR_PORTRAIT,
  bio: CREATOR_BIO,
  stats: CREATOR_STATS,
  courses: HOME_COURSES,
};

export const SEO_CREATOR = {
  title: 'PurePearl Studio',
  description: CREATOR_BIO[0],
  keywords: ['ByteSpace', 'PurePearl Studio', 'creator'],
};

export const SEO_MISSING_CREATOR = {
  title: 'Creator not found',
  description: MISSING_CREATOR_MESSAGE,
  keywords: ['ByteSpace', 'creator'],
};

export const selectCreatorProfile = (creatorId) =>
  creatorId === CREATOR_ID ? CREATOR_PROFILE : null;
