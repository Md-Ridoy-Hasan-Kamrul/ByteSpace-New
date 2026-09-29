import React, { memo } from 'react';
import { CREATOR_AVATAR_SIZE, REVIEW_AVATARS } from './courseDetailsAssets';
import CourseStarRating from './CourseStarRating';

const CourseReviewCard = memo(({ review }) => (
  <article className="course-review-card">
    <div className="course-review-top">
      <div className="course-review-main">
        <div className="course-review-person">
          <img
            className="course-review-avatar"
            src={REVIEW_AVATARS[review.avatar]}
            alt=""
            width={CREATOR_AVATAR_SIZE}
            height={CREATOR_AVATAR_SIZE}
          />
          <div>
            <h3>{review.name}</h3>
            <p>{review.role}</p>
          </div>
        </div>
        <CourseStarRating count={review.rating} />
      </div>
      <p className="course-review-time">{review.time}</p>
    </div>
    <p className="course-review-body">{review.body}</p>
  </article>
));

CourseReviewCard.displayName = 'CourseReviewCard';

export default CourseReviewCard;
