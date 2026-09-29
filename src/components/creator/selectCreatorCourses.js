import { FEATURED_TOPIC } from '../home/homeData';
import { filterSearchResults } from '../search/filterSearchResults';

const EMPTY_QUERY = '';

export const selectCreatorCourses = (courses, { level, category, sort }) =>
  filterSearchResults(courses, {
    query: EMPTY_QUERY,
    topic: FEATURED_TOPIC,
    level,
    category,
    sort,
  });
