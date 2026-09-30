import React, { memo } from 'react';
import { ICON_SIZE } from './courseDetailsAssets';
import { DESCRIPTION_HEADING, KEY_POINTS_HEADING, SNEAK_PEEK_HEADING } from './courseDetailsCopy';

const CourseParagraphs = memo(({ paragraphs }) => (
  <div className="course-copy">
    {paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
));

CourseParagraphs.displayName = 'CourseParagraphs';

const CourseSneakPeeks = memo(({ peeks }) => (
  <ul className="course-peeks">
    {peeks.map((peek) => (
      <li key={peek.id}>
        <img src={peek.src} alt={peek.alt} />
      </li>
    ))}
  </ul>
));

CourseSneakPeeks.displayName = 'CourseSneakPeeks';

const CourseKeyPoints = memo(({ points, icon }) => (
  <ul className="course-points">
    {points.map((point) => (
      <li key={point}>
        <img src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        <span>{point}</span>
      </li>
    ))}
  </ul>
));

CourseKeyPoints.displayName = 'CourseKeyPoints';

const CourseAbout = memo(({ course }) => (
  <div className="course-panel course-about">
    <h2>{DESCRIPTION_HEADING}</h2>
    <CourseParagraphs paragraphs={course.description} />
    <h2>{SNEAK_PEEK_HEADING}</h2>
    <CourseSneakPeeks peeks={course.sneakPeeks} />
    <h2>{KEY_POINTS_HEADING}</h2>
    <CourseKeyPoints points={course.keyPoints} icon={course.checkIcon} />
  </div>
));

CourseAbout.displayName = 'CourseAbout';

export default CourseAbout;
