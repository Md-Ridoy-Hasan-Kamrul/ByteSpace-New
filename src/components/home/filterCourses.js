import { FEATURED_TOPIC } from './homeData';

const normalizeSearchText = (value) => value.trim().toLowerCase();

const courseSearchText = (course) =>
  [course.title, course.creator, course.level, ...course.topics].join(' ');

const courseMatchesQuery = (course, query) => {
  const needle = normalizeSearchText(query);
  if (!needle) {
    return true;
  }
  return normalizeSearchText(courseSearchText(course)).includes(needle);
};

const courseMatchesTopic = (course, topic) =>
  topic === FEATURED_TOPIC || course.topics.includes(topic);

export const filterCourses = (courses, { query, topic }) =>
  courses.filter((course) => courseMatchesTopic(course, topic) && courseMatchesQuery(course, query));
