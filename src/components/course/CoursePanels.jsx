import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  ALL_RATING,
  ALL_RATING_LABEL,
  COURSE_MODULES,
  COURSE_REVIEWS,
  CREATOR_AVATAR_SIZE,
  DESCRIPTION_HEADING,
  ICON_SIZE,
  KEY_POINTS_HEADING,
  LESSON_COPY,
  MODULE_ICON,
  MODULE_ICON_SIZE,
  RATING_FILTERS,
  RATING_ROWS,
  REVIEW_AVATARS,
  REVIEW_COPY,
  REVIEW_STAR,
  SNEAK_PEEK_HEADING,
  STAR_SLOTS,
  filterCourseReviews,
  starFilterLabel,
} from '../../data/course';

const CourseModule = memo(({ module }) => (
  <article className="course-module">
    <span className="course-module-icon">
      <img src={MODULE_ICON} alt="" width={MODULE_ICON_SIZE} height={MODULE_ICON_SIZE} />
    </span>
    <div className="course-module-copy">
      <h3>{module.title}</h3>
      <p>{module.body}</p>
    </div>
  </article>
));

CourseModule.displayName = 'CourseModule';

const CourseModuleList = memo(() => (
  <div className="course-modules">
    {COURSE_MODULES.map((module) => (
      <CourseModule key={module.id} module={module} />
    ))}
  </div>
));

CourseModuleList.displayName = 'CourseModuleList';

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

export const CourseAbout = memo(({ course }) => (
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

export const CourseLessons = memo(() => (
  <div className="course-panel course-lessons-panel">
    <h2>{LESSON_COPY.exploreHeading}</h2>
    <p>{LESSON_COPY.exploreBody}</p>
    <h2>{LESSON_COPY.listHeading}</h2>
    <CourseModuleList />
    <h2>{LESSON_COPY.contentHeading}</h2>
    <p>{LESSON_COPY.contentBody}</p>
    <h2>{LESSON_COPY.trackingHeading}</h2>
    <p>{LESSON_COPY.trackingBody}</p>
    <CourseProgress />
  </div>
));

CourseLessons.displayName = 'CourseLessons';

const useCourseReviews = () => {
  const [rating, setRating] = useState(ALL_RATING);
  const reviews = useMemo(() => filterCourseReviews(COURSE_REVIEWS, rating), [rating]);

  const handleRatingSelect = useCallback((nextRating) => {
    setRating(nextRating);
  }, []);

  return { rating, reviews, handleRatingSelect };
};

const CourseStarRating = memo(({ count = STAR_SLOTS.length }) => (
  <span className="course-stars" aria-label={starFilterLabel(count)}>
    {STAR_SLOTS.slice(0, count).map((slot) => (
      <img key={slot} src={REVIEW_STAR} alt="" width={ICON_SIZE} height={ICON_SIZE} />
    ))}
  </span>
));

CourseStarRating.displayName = 'CourseStarRating';

const CourseRatingBar = memo(({ row }) => (
  <div className="course-rating-row">
    <span className="course-rating-track">
      <span className={`course-rating-fill ${row.fillClass}`} />
    </span>
    <CourseStarRating />
    <span className="course-rating-count">{row.count}</span>
  </div>
));

CourseRatingBar.displayName = 'CourseRatingBar';

const CourseRatingBars = memo(() => (
  <div className="course-rating-bars">
    {RATING_ROWS.map((row) => (
      <CourseRatingBar key={row.id} row={row} />
    ))}
  </div>
));

CourseRatingBars.displayName = 'CourseRatingBars';

const CourseRatingSummary = memo(() => (
  <div className="course-rating-summary">
    <div className="course-rating-badge">
      <p className="course-rating-caption">{REVIEW_COPY.ratingsLabel}</p>
      <p className="course-rating-score">{REVIEW_COPY.ratingsScore}</p>
    </div>
    <CourseRatingBars />
  </div>
));

CourseRatingSummary.displayName = 'CourseRatingSummary';

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

const CourseReviewList = memo(({ reviews }) => (
  <div className="course-review-list">
    {reviews.map((review) => (
      <CourseReviewCard key={review.id} review={review} />
    ))}
  </div>
));

CourseReviewList.displayName = 'CourseReviewList';

export const CourseReviews = memo(() => {
  const reviews = useCourseReviews();

  return (
    <div className="course-panel course-reviews-panel">
      <h2>{REVIEW_COPY.summaryHeading}</h2>
      <p>{REVIEW_COPY.summaryBody}</p>
      <CourseRatingSummary />
      <h2>{REVIEW_COPY.listHeading}</h2>
      <CourseRatingFilters rating={reviews.rating} onSelect={reviews.handleRatingSelect} />
      <CourseReviewList reviews={reviews.reviews} />
    </div>
  );
});

CourseReviews.displayName = 'CourseReviews';
