import { HOME_COURSES } from '../../home/homeData';
import { ALL_CATEGORIES, ALL_LEVELS, SORT_RELEVANT, SORT_TITLE } from '../../search/searchCopy';
import { selectCreatorCourses } from '../selectCreatorCourses';

const openCatalog = {
  level: ALL_LEVELS,
  category: ALL_CATEGORIES,
  sort: SORT_RELEVANT,
};

describe('selectCreatorCourses', () => {
  it('keeps the studio catalog in its designed order', () => {
    expect(selectCreatorCourses(HOME_COURSES, openCatalog).map((course) => course.title)).toEqual(
      HOME_COURSES.map((course) => course.title),
    );
  });

  it('drops courses that do not match the level', () => {
    expect(
      selectCreatorCourses(HOME_COURSES, { ...openCatalog, level: 'Advanced' }),
    ).toEqual([]);
  });

  it('keeps courses in the selected category', () => {
    expect(
      selectCreatorCourses(HOME_COURSES, { ...openCatalog, category: 'Design' }).map(
        (course) => course.id,
      ),
    ).toEqual(['learn-figma']);
  });

  it('sorts the catalog by title', () => {
    const titles = selectCreatorCourses(HOME_COURSES, { ...openCatalog, sort: SORT_TITLE }).map(
      (course) => course.title,
    );

    expect(titles[0]).toBe('Balancing Productivity and Self-Care');
    expect(titles.at(-1)).toBe('the Power of Big Data');
  });
});
