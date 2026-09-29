import React, { memo } from 'react';
import { ICON_SIZE, REVIEW_STAR } from './courseDetailsAssets';
import {
  ALL_RATING,
  ALL_RATING_LABEL,
  RATING_FILTERS,
  REVIEW_COPY,
  starFilterLabel,
} from './courseDetailsCopy';

const CourseRatingFilters = memo(({ rating, onSelect }) => (
  <div className="course-rating-filters" role="group" aria-label={REVIEW_COPY.filtersLabel}>
    <button type="button" aria-pressed={rating === ALL_RATING} onClick={() => onSelect(ALL_RATING)}>
      {ALL_RATING_LABEL}
    </button>
    {RATING_FILTERS.map((score) => (
      <button
        key={score}
        type="button"
        aria-pressed={rating === score}
        aria-label={starFilterLabel(score)}
        onClick={() => onSelect(score)}
      >
        <img src={REVIEW_STAR} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        <span>{score}</span>
      </button>
    ))}
  </div>
));

CourseRatingFilters.displayName = 'CourseRatingFilters';

export default CourseRatingFilters;
