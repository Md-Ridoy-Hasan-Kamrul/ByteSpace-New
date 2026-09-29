import { FEATURED_TOPIC, HOME_COURSES } from '../homeData';
import { filterCourses } from '../filterCourses';

const figmaCourse = HOME_COURSES[0];

describe('filterCourses', () => {
  it('returns every featured course when the query is empty', () => {
    const visibleCourses = filterCourses(HOME_COURSES, {
      query: '',
      topic: FEATURED_TOPIC,
    });

    expect(visibleCourses).toHaveLength(HOME_COURSES.length);
    expect(visibleCourses.map((course) => course.title)).toContain(figmaCourse.title);
  });

  it('matches a course by title, creator, or topic text', () => {
    const visibleCourses = filterCourses(HOME_COURSES, {
      query: 'figma',
      topic: FEATURED_TOPIC,
    });

    expect(visibleCourses).toEqual([figmaCourse]);
  });

  it('ignores surrounding whitespace and letter case', () => {
    const visibleCourses = filterCourses(HOME_COURSES, {
      query: '  PUREPEARL  ',
      topic: FEATURED_TOPIC,
    });

    expect(visibleCourses).toHaveLength(HOME_COURSES.length);
  });

  it('keeps only courses that belong to the selected topic', () => {
    const visibleCourses = filterCourses(HOME_COURSES, {
      query: '',
      topic: 'Data Science',
    });

    expect(visibleCourses.map((course) => course.title)).toEqual(['the Power of Big Data']);
  });

  it('applies the topic and the search query together', () => {
    const visibleCourses = filterCourses(HOME_COURSES, {
      query: 'startup',
      topic: 'Data Science',
    });

    expect(visibleCourses).toEqual([]);
  });
});
