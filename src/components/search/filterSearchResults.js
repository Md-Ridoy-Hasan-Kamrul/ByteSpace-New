import { filterCourses } from '../home/filterCourses';
import { ALL_CATEGORIES, ALL_LEVELS, FIRST_PAGE, PAGE_SIZE, SORT_TITLE } from './searchCopy';

const applyLevel = (courses, level) => {
  if (level === ALL_LEVELS) {
    return courses;
  }
  return courses.filter((course) => course.level === level);
};

const topicMatchesCategory = (topic, category) =>
  topic.toLowerCase().includes(category.toLowerCase());

const applyCategory = (courses, category) => {
  if (category === ALL_CATEGORIES) {
    return courses;
  }
  return courses.filter((course) =>
    course.topics.some((topic) => topicMatchesCategory(topic, category)),
  );
};

const applySort = (courses, sort) => {
  if (sort !== SORT_TITLE) {
    return courses;
  }
  return [...courses].sort((left, right) => left.title.localeCompare(right.title));
};

export const filterSearchResults = (courses, { query, topic, level, category, sort }) =>
  applySort(applyCategory(applyLevel(filterCourses(courses, { query, topic }), level), category), sort);

const pageCountFor = (total, pageSize) => Math.max(FIRST_PAGE, Math.ceil(total / pageSize));

export const paginateCourses = (courses, page, pageSize) => {
  const pageCount = pageCountFor(courses.length, pageSize);
  const currentPage = Math.min(Math.max(page, FIRST_PAGE), pageCount);
  const start = (currentPage - FIRST_PAGE) * pageSize;

  return {
    page: currentPage,
    pageCount,
    courses: courses.slice(start, start + pageSize),
  };
};

const searchCriteria = ({ activeQuery, topic, level, category, sort }) => ({
  query: activeQuery,
  topic,
  level,
  category,
  sort,
});

export const selectSearchPage = (courses, filters) =>
  paginateCourses(filterSearchResults(courses, searchCriteria(filters)), filters.page, PAGE_SIZE);
