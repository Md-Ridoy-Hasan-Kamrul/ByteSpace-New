import { ALL_RATING } from './courseDetailsCopy';

export const filterCourseReviews = (reviews, rating) => {
  if (rating === ALL_RATING) {
    return reviews;
  }

  return reviews.filter((review) => review.rating === rating);
};
