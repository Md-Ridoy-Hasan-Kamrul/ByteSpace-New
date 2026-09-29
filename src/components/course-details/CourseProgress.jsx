import React, { memo } from 'react';
import { LESSON_COPY } from './courseDetailsCopy';

const CourseProgress = memo(() => (
  <div className="course-progress">
    <p className="course-progress-label">{LESSON_COPY.progressLabel}</p>
    <p className="course-progress-value">{LESSON_COPY.progressValue}</p>
    <div
      className="course-progress-track"
      role="progressbar"
      aria-label={LESSON_COPY.progressLabel}
      aria-valuemin={LESSON_COPY.progressMin}
      aria-valuemax={LESSON_COPY.progressMax}
      aria-valuenow={LESSON_COPY.progressPercent}
    >
      <span className="course-progress-fill" />
    </div>
  </div>
));

CourseProgress.displayName = 'CourseProgress';

export default CourseProgress;
