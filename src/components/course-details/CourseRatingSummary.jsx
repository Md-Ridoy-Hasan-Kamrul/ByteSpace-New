import React, { memo } from 'react';
import { REVIEW_COPY } from './courseDetailsCopy';
import CourseRatingBars from './CourseRatingBars';

const CourseRatingSummary = memo(() => (
  <div className="course-rating-summary">
    <div className="course-rating-badge">
      <p className="course-rating-caption">{REVIEW_COPY.ratingsLabel}</p>
      <p className="course-rating-score">{REVIEW_COPY.ratingsScore}</p>
    </div>
    <CourseRatingBars />
  </div>
));

CourseRatingSummary.displayName = 'CourseRatingSummary';

export default CourseRatingSummary;
