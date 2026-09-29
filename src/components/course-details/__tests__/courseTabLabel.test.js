import {
  ABOUT_TAB,
  LESSONS_ABOUT_LABEL,
  LESSONS_TAB,
  REVIEWS_TAB,
  courseTabLabel,
} from '../courseDetailsCopy';

describe('courseTabLabel', () => {
  it('labels the lesson tab Lessons while About is selected', () => {
    expect(courseTabLabel(LESSONS_TAB, ABOUT_TAB)).toBe(LESSONS_ABOUT_LABEL);
  });

  it('labels the lesson tab Lesson on the lesson and reviews frames', () => {
    expect(courseTabLabel(LESSONS_TAB, LESSONS_TAB)).toBe(LESSONS_TAB);
    expect(courseTabLabel(LESSONS_TAB, REVIEWS_TAB)).toBe(LESSONS_TAB);
  });

  it('keeps About and Reviews labels stable', () => {
    expect(courseTabLabel(ABOUT_TAB, ABOUT_TAB)).toBe(ABOUT_TAB);
    expect(courseTabLabel(REVIEWS_TAB, REVIEWS_TAB)).toBe(REVIEWS_TAB);
  });
});
