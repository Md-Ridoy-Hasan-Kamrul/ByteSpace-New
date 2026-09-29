import { useCallback, useMemo, useState } from 'react';
import { ALL_RATING, COURSE_REVIEWS } from '../components/course-details/courseDetailsCopy';
import { filterCourseReviews } from '../components/course-details/filterCourseReviews';

export const useCourseReviews = () => {
  const [rating, setRating] = useState(ALL_RATING);
  const reviews = useMemo(() => filterCourseReviews(COURSE_REVIEWS, rating), [rating]);

  const handleRatingSelect = useCallback((nextRating) => {
    setRating(nextRating);
  }, []);

  return { rating, reviews, handleRatingSelect };
};
