import { FEATURED_TOPIC, HOME_COURSES } from '../home/homeData';

export const SEARCH_TITLE = 'Find Your Next Course';
export const SEARCH_FIELD_LABEL = 'Search';
export const SEARCH_QUERY_PARAM = 'q';
export const SEARCH_SCOPE_LABEL = 'Courses';
export const FILTER_LABEL = 'Filter';
export const LEVEL_LABEL = 'Level';
export const CATEGORY_LABEL = 'Category';
export const SORT_RELEVANT = 'Most relevant';
export const SORT_TITLE = 'Title';
export const ALL_LEVELS = 'All';
export const ALL_CATEGORIES = 'All';
export const EMPTY_RESULTS_MESSAGE = 'No courses match your search.';
export const PAGE_SIZE = 18;
export const SEARCH_PAGE_COUNT = 5;
export const FIRST_PAGE = 1;
export const PREVIOUS_PAGE_LABEL = 'Previous page';
export const NEXT_PAGE_LABEL = 'Next page';

export const SEARCH_TOPICS = [
  FEATURED_TOPIC,
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
];

export const LEVEL_OPTIONS = [ALL_LEVELS, 'Beginner', 'Advanced'];
export const CATEGORY_OPTIONS = [
  ALL_CATEGORIES,
  'Design',
  'Development',
  'Business',
  'Marketing',
  'Photography',
];
export const SORT_OPTIONS = [SORT_RELEVANT, SORT_TITLE];

// Figma Search Page (55:117) Material icons.
const icon = (name) => `/search/icon-${name}.svg`;
export const SEARCH_ICONS = {
  chevronDown: icon('chevron-down'),
  previous: icon('prev'),
  next: icon('next'),
};

export const SEO_SEARCH = {
  title: 'Find Your Next Course',
  description: 'Search ByteSpace courses by topic, level, and category.',
  keywords: ['ByteSpace', 'search', 'courses'],
};

// The six catalog courses repeated to fill every page: 18 per page across 5 pages (90 cards). Each copy
// keeps its course id so the card still opens that course; listingKey keeps React keys unique.
export const SEARCH_COURSES = Array.from({ length: PAGE_SIZE * SEARCH_PAGE_COUNT }, (_, index) => {
  const course = HOME_COURSES[index % HOME_COURSES.length];
  return { ...course, listingKey: `${course.id}-${index}` };
});
