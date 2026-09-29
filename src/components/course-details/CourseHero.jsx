import React, { memo } from 'react';
import { ICON_SIZE, PLAY_ICON, PLAY_ICON_SIZE, SHARE_ICON } from './courseDetailsAssets';
import { CREATOR_PREFIX, PLAY_LABEL, SHARE_LABEL } from './courseDetailsCopy';

const CourseStat = memo(({ icon, label }) => (
  <p className="course-stat">
    <img src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
    <span>{label}</span>
  </p>
));

CourseStat.displayName = 'CourseStat';

const CoursePreview = memo(({ poster, onPlay }) => (
  <div className="course-preview">
    <img className="course-poster" src={poster} alt="" />
    <button type="button" className="course-play" aria-label={PLAY_LABEL} onClick={onPlay}>
      <img src={PLAY_ICON} alt="" width={PLAY_ICON_SIZE} height={PLAY_ICON_SIZE} />
    </button>
  </div>
));

CoursePreview.displayName = 'CoursePreview';

export { CoursePreview };

const CourseHero = memo(({ course, onShare }) => (
  <div className="course-intro-top">
    <div>
      <h1>{course.title}</h1>
      <p className="course-subtitle">{course.subtitle}</p>
      <p className="course-byline">
        {CREATOR_PREFIX} <span>{course.creator}</span>
      </p>
      <div className="course-stats">
        <CourseStat icon={course.levelIcon} label={course.level} />
        <CourseStat icon={course.ratingIcon} label={course.ratingLabel} />
        <CourseStat icon={course.studentsIcon} label={course.studentsLabel} />
      </div>
    </div>
    <button type="button" className="course-share" onClick={onShare}>
      <img src={SHARE_ICON} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      {SHARE_LABEL}
    </button>
  </div>
));

CourseHero.displayName = 'CourseHero';

export default CourseHero;
