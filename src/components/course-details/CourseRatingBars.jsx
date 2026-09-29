import React, { memo } from 'react';
import { RATING_ROWS } from './courseDetailsCopy';
import CourseRatingBar from './CourseRatingBar';

const CourseRatingBars = memo(() => (
  <div className="course-rating-bars">
    {RATING_ROWS.map((row) => (
      <CourseRatingBar key={row.id} row={row} />
    ))}
  </div>
));

CourseRatingBars.displayName = 'CourseRatingBars';

export default CourseRatingBars;
