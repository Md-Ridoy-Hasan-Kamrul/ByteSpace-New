import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { courseDetailsPath } from '../../config';
import {
  COURSE_AVATAR_SIZE,
  ICON_LEVEL,
  ICON_SIZE,
  ICON_STAR_OUTLINE,
  LEARNER_MORE,
  LEVEL_ICON_SIZE,
} from './homeAssets';
import AvatarStack from './AvatarStack';

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

const CourseCard = memo(({ course }) => (
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
        <img src={ICON_STAR_OUTLINE} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      </p>
      <div className="home-course-row">
        <p className="home-level">
          <img src={ICON_LEVEL} alt="" width={LEVEL_ICON_SIZE} height={LEVEL_ICON_SIZE} />
          {course.level}
        </p>
        <AvatarStack
          avatars={course.learnerAvatars}
          extraLabel={course.extraLearnersLabel}
          badgeSrc={LEARNER_MORE}
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
));

CourseCard.displayName = 'CourseCard';

export default CourseCard;
