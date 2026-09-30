import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { courseDetailsPath } from '../config';
import {
  COURSE_AVATAR_SIZE,
  ICON_LEVEL,
  ICON_SIZE,
  ICON_STAR_OUTLINE,
  LEARNER_MORE,
  LEVEL_ICON_SIZE,
} from '../data/home';

export const AvatarStack = memo(({ avatars, extraLabel, badgeSrc, size }) => (
  <ul className="home-avatars" aria-hidden="true">
    {avatars.map((avatar) => (
      <li key={avatar.id}>
        <img src={avatar.src} alt="" width={size} height={size} />
      </li>
    ))}
    <li className="home-avatars-extra">
      <img src={badgeSrc} alt="" width={size} height={size} />
      <span>{extraLabel}</span>
    </li>
  </ul>
));

AvatarStack.displayName = 'AvatarStack';

const CourseMedia = memo(({ course }) => (
  <div className="home-course-media">
    <img src={course.image} alt="" />
    <div className="home-course-chips">
      <span>{course.lessonsLabel}</span>
      <span>{course.durationLabel}</span>
      <span>{course.commentsLabel}</span>
    </div>
  </div>
));

CourseMedia.displayName = 'CourseMedia';

export const CourseCard = memo(
  ({ course, ratingIcon = ICON_STAR_OUTLINE, extraBadge = LEARNER_MORE }) => (
    <article className="home-course-card">
      <Link to={courseDetailsPath(course.id)} className="home-course-link">
        <CourseMedia course={course} />
        <div className="home-course-body">
          <div>
            <h3>{course.title}</h3>
            <p className="home-creator">
              by <span>{course.creator}</span>
            </p>
          </div>
          <p className="home-score">
            {course.ratingLabel}
            <img src={ratingIcon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
          </p>
          <div className="home-course-row">
            <p className="home-level">
              <img src={ICON_LEVEL} alt="" width={LEVEL_ICON_SIZE} height={LEVEL_ICON_SIZE} />
              {course.level}
            </p>
            <AvatarStack
              avatars={course.learnerAvatars}
              extraLabel={course.extraLearnersLabel}
              badgeSrc={extraBadge}
              size={COURSE_AVATAR_SIZE}
            />
          </div>
          <p className="home-price">
            {course.priceLabel}
            <span>{course.billingLabel}</span>
          </p>
        </div>
      </Link>
    </article>
  ),
);

CourseCard.displayName = 'CourseCard';

const joinClassNames = (...names) => names.filter(Boolean).join(' ');

// Course cards in the shared grid, or a message when no course matches.
// Used by the home discovery section, the search results and the creator catalog.
export const CourseGrid = memo(
  ({ courses, emptyMessage, className, emptyClassName = 'home-empty' }) => {
    if (courses.length === 0) {
      return <p className={emptyClassName}>{emptyMessage}</p>;
    }

    return (
      <div className={joinClassNames('home-course-grid', className)}>
        {courses.map((course) => (
          <CourseCard key={course.listingKey ?? course.id} course={course} />
        ))}
      </div>
    );
  },
);

CourseGrid.displayName = 'CourseGrid';
