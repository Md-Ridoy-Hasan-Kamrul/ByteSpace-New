import React, { memo } from 'react';
import CourseReviewCard from './CourseReviewCard';

const CourseReviewList = memo(({ reviews }) => (
  <div className="course-review-list">
    {reviews.map((review) => (
      <CourseReviewCard key={review.id} review={review} />
    ))}
  </div>
));

CourseReviewList.displayName = 'CourseReviewList';

export default CourseReviewList;
