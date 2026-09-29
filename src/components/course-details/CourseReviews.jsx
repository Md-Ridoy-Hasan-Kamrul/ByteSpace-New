import React, { memo } from 'react';
import { useCourseReviews } from '../../hooks/useCourseReviews';
import { REVIEW_COPY } from './courseDetailsCopy';
import CourseRatingFilters from './CourseRatingFilters';
import CourseRatingSummary from './CourseRatingSummary';
import CourseReviewList from './CourseReviewList';

const CourseReviews = memo(() => {
  const reviews = useCourseReviews();

  return (
    <div className="course-panel course-reviews-panel">
      <h2>{REVIEW_COPY.summaryHeading}</h2>
      <p>{REVIEW_COPY.summaryBody}</p>
      <CourseRatingSummary />
      <h2>{REVIEW_COPY.listHeading}</h2>
      <CourseRatingFilters rating={reviews.rating} onSelect={reviews.handleRatingSelect} />
      <CourseReviewList reviews={reviews.reviews} />
    </div>
  );
});

CourseReviews.displayName = 'CourseReviews';

export default CourseReviews;
