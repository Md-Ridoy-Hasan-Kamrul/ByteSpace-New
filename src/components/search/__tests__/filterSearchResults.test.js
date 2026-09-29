import { HOME_COURSES } from '../../home/homeData';
import { ALL_CATEGORIES, ALL_LEVELS, FIRST_PAGE, PAGE_SIZE, SORT_TITLE } from '../searchCopy';
import { filterSearchResults, paginateCourses } from '../filterSearchResults';

const featured = {
  query: '',
  topic: 'Featured',
  level: ALL_LEVELS,
  category: ALL_CATEGORIES,
  sort: 'Most relevant',
};

describe('filterSearchResults', () => {
  it('returns the featured catalog when no extra filters are set', () => {
    expect(filterSearchResults(HOME_COURSES, featured)).toHaveLength(HOME_COURSES.length);
  });

  it('matches a course by title', () => {
    const matches = filterSearchResults(HOME_COURSES, { ...featured, query: 'big data' });
    expect(matches.map((course) => course.title)).toEqual(['the Power of Big Data']);
  });

  it('keeps only the selected level', () => {
    expect(filterSearchResults(HOME_COURSES, { ...featured, level: 'Beginner' })).toHaveLength(
      HOME_COURSES.length,
    );
    expect(filterSearchResults(HOME_COURSES, { ...featured, level: 'Advanced' })).toEqual([]);
  });

  it('matches a category against course topics', () => {
    const matches = filterSearchResults(HOME_COURSES, { ...featured, category: 'Design' });
    expect(matches.map((course) => course.id)).toContain('learn-figma');
    expect(matches.map((course) => course.id)).not.toContain('big-data');
  });

  it('sorts titles alphabetically', () => {
    const titles = filterSearchResults(HOME_COURSES, { ...featured, sort: SORT_TITLE }).map(
      (course) => course.title,
    );
    expect(titles[0]).toBe('Balancing Productivity and Self-Care');
    expect(titles[titles.length - 1]).toBe('the Power of Big Data');
  });
});

describe('paginateCourses', () => {
  const courses = Array.from({ length: PAGE_SIZE + 1 }, (_, index) => ({ id: `course-${index}` }));

  it('returns the first page', () => {
    const page = paginateCourses(courses, FIRST_PAGE, PAGE_SIZE);
    expect(page.courses).toHaveLength(PAGE_SIZE);
    expect(page.pageCount).toBe(FIRST_PAGE + 1);
    expect(page.page).toBe(FIRST_PAGE);
  });

  it('returns the remaining courses on the last page', () => {
    const page = paginateCourses(courses, FIRST_PAGE + 1, PAGE_SIZE);
    expect(page.courses).toHaveLength(1);
  });
});
