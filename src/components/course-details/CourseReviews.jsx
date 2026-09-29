import React, { memo } from 'react';
import { REVIEWS_TAB } from './courseDetailsCopy';

const CourseReviews = memo(({ course }) => (
  <section className="course-panel" aria-label={REVIEWS_TAB}>
    <h2>{course.reviewSummary}</h2>
    <p>{course.ratingLabel}</p>
  </section>
));

CourseReviews.displayName = 'CourseReviews';

export default CourseReviews;
