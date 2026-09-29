import React, { memo } from 'react';
import { CREATOR_AVATAR_SIZE, ICON_SIZE } from './courseDetailsAssets';
import { ENROLL_LABEL, INCLUDES_HEADING, PRICE_SUFFIX, PROFILE_HREF, PROFILE_LABEL } from './courseDetailsCopy';
import CourseLessonList from './CourseLessonList';

const CourseIncludes = memo(({ items }) => (
  <ul className="course-includes">
    {items.map((item) => (
      <li key={item.id}>
        <img src={item.icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        <span>{item.label}</span>
      </li>
    ))}
  </ul>
));

CourseIncludes.displayName = 'CourseIncludes';

const CourseCreator = memo(({ course }) => (
  <div className="course-creator">
    <div className="course-creator-id">
      <img
        src={course.studioAvatar}
        alt=""
        width={CREATOR_AVATAR_SIZE}
        height={CREATOR_AVATAR_SIZE}
      />
      <p>
        <strong>{course.studioName}</strong>
        <span>{course.studioRole}</span>
      </p>
    </div>
    <p>{course.studioPitch}</p>
    <a className="course-profile" href={PROFILE_HREF}>
      {PROFILE_LABEL}
    </a>
  </div>
));

CourseCreator.displayName = 'CourseCreator';

const CoursePurchaseCard = memo(({ course, onEnroll }) => (
  <aside className="course-card">
    <h2>{course.lessonSummary}</h2>
    <CourseLessonList lessons={course.lessons} moreLabel={course.moreLessonsLabel} />
    <p className="course-pitch">{course.enrollPitch}</p>
    <p className="course-price">
      <strong>{course.price}</strong>
      <span>{PRICE_SUFFIX}</span>
    </p>
    <button type="button" className="course-enroll" onClick={onEnroll}>
      {ENROLL_LABEL}
    </button>
    <h2>{INCLUDES_HEADING}</h2>
    <CourseIncludes items={course.includes} />
    <CourseCreator course={course} />
  </aside>
));

CoursePurchaseCard.displayName = 'CoursePurchaseCard';

export default CoursePurchaseCard;
