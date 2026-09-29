import React, { memo } from 'react';
import { ICON_SIZE, REVIEW_STAR } from './courseDetailsAssets';
import { STAR_SLOTS, starFilterLabel } from './courseDetailsCopy';

const CourseStarRating = memo(({ count = STAR_SLOTS.length }) => (
  <span className="course-stars" aria-label={starFilterLabel(count)}>
    {STAR_SLOTS.slice(0, count).map((slot) => (
      <img key={slot} src={REVIEW_STAR} alt="" width={ICON_SIZE} height={ICON_SIZE} />
    ))}
  </span>
));

CourseStarRating.displayName = 'CourseStarRating';

export default CourseStarRating;
