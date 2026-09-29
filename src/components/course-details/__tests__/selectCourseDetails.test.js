import { HOME_COURSES } from '../../home/homeData';
import { COURSE_DETAILS, selectCourseDetails } from '../courseDetailsCopy';

describe('selectCourseDetails', () => {
  it('returns the designed details for Build Digital Asset', () => {
    expect(selectCourseDetails('digital-asset')).toBe(COURSE_DETAILS);
  });

  it('uses the clicked course title and image', () => {
    const figma = HOME_COURSES.find((course) => course.id === 'learn-figma');
    const details = selectCourseDetails('learn-figma');

    expect(details.title).toBe(figma.title);
    expect(details.poster).toBe(figma.image);
    expect(details.level).toBe(figma.level);
  });

  it('returns nothing when the course does not exist', () => {
    expect(selectCourseDetails('missing-course')).toBeNull();
  });
});
