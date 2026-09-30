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
  <article className="gap-[0.8125rem] flex items-center">
    <span className="p-4 rounded-[1.5rem] grid items-center justify-items-center grow-0 shrink-0 basis-auto bg-brand-lime">
      <img src={MODULE_ICON} alt="" width={MODULE_ICON_SIZE} height={MODULE_ICON_SIZE} />
    </span>
    <div className="gap-1 grid min-w-0">
      <h3 className="font-body font-medium tracking-[normal] leading-[19px] text-ink text-[1rem]">{module.title}</h3>
      <p className="max-w-159.5 text-body text-[1rem] font-normal leading-[1.625]">{module.body}</p>
    </div>
  </article>
));

CourseModule.displayName = 'CourseModule';

const CourseModuleList = memo(() => (
  <div className="gap-6 grid lg:max-xl:min-w-0">
    {COURSE_MODULES.map((module) => (
      <CourseModule key={module.id} module={module} />
    ))}
  </div>
));

CourseModuleList.displayName = 'CourseModuleList';

const CourseParagraphs = memo(({ paragraphs }) => (
  <div className="gap-[calc(1.625_*_1em)] text-body text-[1rem] font-normal leading-[1.625] grid max-w-[45.1875rem] lg:max-xl:min-w-0">
    {paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
));

CourseParagraphs.displayName = 'CourseParagraphs';

const CourseSneakPeeks = memo(({ peeks }) => (
  <ul className="gap-3 grid grid-cols-2 justify-between w-full md:grid-cols-[repeat(4,_10.4375rem)] md:w-[min(100%,_45.3125rem)] lg:grid-cols-4 lg:w-full lg:max-xl:min-w-0 xl:grid-cols-[repeat(4,_10.4375rem)] xl:w-[min(100%,_45.3125rem)]">
    {peeks.map((peek) => (
      <li key={peek.id}>
        <img className="rounded-[1rem] w-full h-auto object-cover max-md:aspect-[167/125] md:w-[10.4375rem] md:h-[7.8125rem] lg:w-full lg:h-auto lg:max-xl:aspect-[167/125] xl:w-[10.4375rem] xl:h-[7.8125rem]" src={peek.src} alt={peek.alt} />
      </li>
    ))}
  </ul>
));

CourseSneakPeeks.displayName = 'CourseSneakPeeks';

const CourseKeyPoints = memo(({ points, icon }) => (
  <ul className="gap-3 text-body text-[1rem] font-normal leading-[1.625] flex flex-col lg:max-xl:min-w-0">
    {points.map((point) => (
      <li className="gap-2 flex items-start" key={point}>
        <img src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        <span>{point}</span>
      </li>
    ))}
  </ul>
));

CourseKeyPoints.displayName = 'CourseKeyPoints';

export const CourseAbout = memo(({ course }) => (
  <div className="gap-6 grid max-w-[45.1875rem] lg:max-xl:min-w-0">
    <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem] lg:max-xl:min-w-0">{DESCRIPTION_HEADING}</h2>
    <CourseParagraphs paragraphs={course.description} />
    <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem] lg:max-xl:min-w-0">{SNEAK_PEEK_HEADING}</h2>
    <CourseSneakPeeks peeks={course.sneakPeeks} />
    <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem] lg:max-xl:min-w-0">{KEY_POINTS_HEADING}</h2>
    <CourseKeyPoints points={course.keyPoints} icon={course.checkIcon} />
  </div>
));

CourseAbout.displayName = 'CourseAbout';

const CourseProgress = memo(() => (
  <div className="p-[calc(1rem_-_1px)] gap-2 rounded-[1rem] border border-solid border-line grid w-[min(100%,_45.1875rem)] bg-white lg:max-xl:min-w-0">
    <p className="text-ink leading-[1.2] text-[0.875rem] font-medium">{LESSON_COPY.progressLabel}</p>
    <p className="text-ink leading-[1.2] font-display text-[2.25rem] font-semibold tracking-[-0.36px]">{LESSON_COPY.progressValue}</p>
    <div
      className="overflow-hidden rounded-[1.5rem] h-2 bg-field"
      role="progressbar"
      aria-label={LESSON_COPY.progressLabel}
      aria-valuemin={LESSON_COPY.progressMin}
      aria-valuemax={LESSON_COPY.progressMax}
      aria-valuenow={LESSON_COPY.progressPercent}
    >
      <span className="rounded-[inherit] block w-[56.01%] h-full bg-brand-lime" />
    </div>
  </div>
));

CourseProgress.displayName = 'CourseProgress';

export const CourseLessons = memo(() => (
  <div className="gap-6 grid max-w-[45.1875rem] lg:max-xl:min-w-0">
    <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem] lg:max-xl:min-w-0">{LESSON_COPY.exploreHeading}</h2>
    <p className="max-w-[45.1875rem] text-body text-[1rem] font-normal leading-[1.625] lg:max-xl:min-w-0">{LESSON_COPY.exploreBody}</p>
    <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem] lg:max-xl:min-w-0">{LESSON_COPY.listHeading}</h2>
    <CourseModuleList />
    <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem] lg:max-xl:min-w-0">{LESSON_COPY.contentHeading}</h2>
    <p className="max-w-[45.1875rem] text-body text-[1rem] font-normal leading-[1.625] lg:max-xl:min-w-0">{LESSON_COPY.contentBody}</p>
    <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem] lg:max-xl:min-w-0">{LESSON_COPY.trackingHeading}</h2>
    <p className="max-w-[45.1875rem] text-body text-[1rem] font-normal leading-[1.625] lg:max-xl:min-w-0">{LESSON_COPY.trackingBody}</p>
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
  <span className="gap-1 flex grow-0 shrink-0 basis-auto" aria-label={starFilterLabel(count)}>
    {STAR_SLOTS.slice(0, count).map((slot) => (
      <img key={slot} src={REVIEW_STAR} alt="" width={ICON_SIZE} height={ICON_SIZE} />
    ))}
  </span>
));

CourseStarRating.displayName = 'CourseStarRating';

const CourseRatingBar = memo(({ row }) => (
  <div className="gap-4 flex items-center">
    <span className="overflow-hidden rounded-[1.5rem] grow shrink basis-auto h-2 bg-field">
      <span className={`block h-full rounded-[inherit] bg-brand-lime ${row.fillClass}`} />
    </span>
    <CourseStarRating />
    <span className="grow-0 shrink-0 basis-[2.5rem] w-10 text-body text-[1rem] leading-[1.625] text-right">{row.count}</span>
  </div>
));

CourseRatingBar.displayName = 'CourseRatingBar';

const CourseRatingBars = memo(() => (
  <div className="gap-1 grid grow shrink basis-auto min-w-0">
    {RATING_ROWS.map((row) => (
      <CourseRatingBar key={row.id} row={row} />
    ))}
  </div>
));

CourseRatingBars.displayName = 'CourseRatingBars';

const CourseRatingSummary = memo(() => (
  <div className="p-6 gap-6 rounded-[1rem] border border-solid border-line w-[min(100%,_45.1875rem)] bg-white flex flex-col items-stretch sm:p-[calc(2.5rem_-_1px)] md:flex-row md:items-center lg:max-xl:min-w-0">
    <div className="p-10 rounded-[0.5rem] grid justify-items-center [align-content:center] grow-0 shrink-0 basis-auto bg-brand-lime text-ink md:basis-[129px] md:w-[129px]">
      <p className="leading-[1.2] text-[0.875rem] font-medium">{REVIEW_COPY.ratingsLabel}</p>
      <p className="leading-[1.2] font-display text-[2.25rem] font-semibold tracking-[-0.36px]">{REVIEW_COPY.ratingsScore}</p>
    </div>
    <CourseRatingBars />
  </div>
));

CourseRatingSummary.displayName = 'CourseRatingSummary';

const CourseRatingFilters = memo(({ rating, onSelect }) => (
  <div className="gap-4 flex flex-wrap items-start w-[min(100%,_45.1875rem)] lg:max-xl:min-w-0" role="group" aria-label={REVIEW_COPY.filtersLabel}>
    <button className="py-3 px-4 gap-1 rounded-[1.5rem] border-none inline-flex items-center justify-center bg-brand-lime text-ink text-[1rem] leading-[1.2] font-medium cursor-pointer focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]" type="button" aria-pressed={rating === ALL_RATING} onClick={() => onSelect(ALL_RATING)}>
      {ALL_RATING_LABEL}
    </button>
    {RATING_FILTERS.map((score) => (
      <button className="py-3 px-4 gap-1 rounded-[1.5rem] border-none inline-flex items-center justify-center bg-canvas text-body text-[1rem] leading-[1.2] font-medium cursor-pointer focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]"
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
  <article className="p-6 gap-6 rounded-[1.5rem] border border-solid border-line w-[min(100%,_45.1875rem)] bg-white grid sm:p-[calc(2.5rem_-_1px)]">
    <div className="gap-6 flex items-start justify-between">
      <div className="gap-6 grid">
        <div className="gap-3 flex items-start">
          <img
            className="rounded-[50%] w-13 h-13 grow-0 shrink-0 basis-auto object-cover"
            src={REVIEW_AVATARS[review.avatar]}
            alt=""
            width={CREATOR_AVATAR_SIZE}
            height={CREATOR_AVATAR_SIZE}
          />
          <div>
            <h3 className="font-body font-medium tracking-[normal] leading-[1.2] text-ink text-[1rem] md:text-[1.125rem]">{review.name}</h3>
            <p className="text-body text-[1rem] font-normal leading-[1.625]">{review.role}</p>
          </div>
        </div>
        <CourseStarRating count={review.rating} />
      </div>
      <p className="text-body text-[1rem] font-normal leading-[1.625] grow-0 shrink-0 basis-auto">{review.time}</p>
    </div>
    <p className="text-body text-[1rem] font-normal leading-[1.625] max-w-[40.1875rem]">{review.body}</p>
  </article>
));

CourseReviewCard.displayName = 'CourseReviewCard';

const CourseReviewList = memo(({ reviews }) => (
  <div className="gap-6 grid w-[min(100%,_45.1875rem)] lg:max-xl:min-w-0">
    {reviews.map((review) => (
      <CourseReviewCard key={review.id} review={review} />
    ))}
  </div>
));

CourseReviewList.displayName = 'CourseReviewList';

export const CourseReviews = memo(() => {
  const reviews = useCourseReviews();

  return (
    <div className="gap-6 grid max-w-[45.1875rem] lg:max-xl:min-w-0">
      <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem] lg:max-xl:min-w-0">{REVIEW_COPY.summaryHeading}</h2>
      <p className="max-w-[45.1875rem] text-body text-[1rem] font-normal leading-[1.625] lg:max-xl:min-w-0">{REVIEW_COPY.summaryBody}</p>
      <CourseRatingSummary />
      <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem] lg:max-xl:min-w-0">{REVIEW_COPY.listHeading}</h2>
      <CourseRatingFilters rating={reviews.rating} onSelect={reviews.handleRatingSelect} />
      <CourseReviewList reviews={reviews.reviews} />
    </div>
  );
});

CourseReviews.displayName = 'CourseReviews';
