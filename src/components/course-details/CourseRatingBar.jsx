import React, { memo } from 'react';
import CourseStarRating from './CourseStarRating';

const CourseRatingBar = memo(({ row }) => (
  <div className="course-rating-row">
    <span className="course-rating-track">
      <span className={`course-rating-fill ${row.fillClass}`} />
    </span>
    <CourseStarRating />
    <span className="course-rating-count">{row.count}</span>
  </div>
));

CourseRatingBar.displayName = 'CourseRatingBar';

export default CourseRatingBar;
