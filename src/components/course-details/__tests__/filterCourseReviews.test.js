import { ALL_RATING, COURSE_REVIEWS, RATING_FILTERS, REVIEW_RATING } from '../courseDetailsCopy';
import { filterCourseReviews } from '../filterCourseReviews';

const unmatchedRating = RATING_FILTERS.find((score) => score !== REVIEW_RATING);

describe('filterCourseReviews', () => {
  it('returns every review when all ratings are selected', () => {
    expect(filterCourseReviews(COURSE_REVIEWS, ALL_RATING)).toEqual(COURSE_REVIEWS);
  });

  it('returns only reviews that match the selected score', () => {
    expect(filterCourseReviews(COURSE_REVIEWS, REVIEW_RATING)).toEqual(COURSE_REVIEWS);
    expect(filterCourseReviews(COURSE_REVIEWS, unmatchedRating)).toEqual([]);
  });
});
