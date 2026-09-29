import { FEATURED_TOPIC } from '../home/homeData';

export const SEARCH_TITLE = 'Find Your Next Course';
export const SEARCH_FIELD_LABEL = 'Search';
export const SEARCH_SCOPE_LABEL = 'Courses';
export const FILTER_LABEL = 'Filter';
export const LEVEL_LABEL = 'Level';
export const CATEGORY_LABEL = 'Category';
export const SORT_RELEVANT = 'Most relevant';
export const SORT_TITLE = 'Title';
export const ALL_LEVELS = 'All';
export const ALL_CATEGORIES = 'All';
export const EMPTY_RESULTS_MESSAGE = 'No courses match your search.';
export const PAGE_SIZE = 6;
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

export const SEO_SEARCH = {
  title: 'Find Your Next Course | ByteSpace',
  description: 'Search ByteSpace courses by topic, level, and category.',
  keywords: ['ByteSpace', 'search', 'courses'],
};
