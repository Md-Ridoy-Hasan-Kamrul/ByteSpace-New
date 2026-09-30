import { memo } from 'react';
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
import { FOCUS_RING } from './Header';

const AVATAR_IMG = 'block rounded-[999px]';
const AVATAR_LABEL = 'absolute inset-0 grid items-center justify-items-center text-[0.75rem]';

// Overlapping avatar row with a "+N" badge. The spacing and badge text differ per placement.
const AVATARS = {
  course: {
    list: 'flex',
    item: 'not-first:ml-[-8px]',
    img: AVATAR_IMG,
    label: `${AVATAR_LABEL} leading-[1.2] font-medium text-ink`,
  },
  courseFigma: {
    list: 'flex',
    item: 'not-first:ml-[-8px]',
    img: AVATAR_IMG,
    label: `${AVATAR_LABEL} leading-[1.2] font-medium text-ink xl:text-white`,
  },
  courseIllustration: {
    list: 'flex',
    item: 'not-first:ml-[-8px]',
    img: AVATAR_IMG,
    label: `${AVATAR_LABEL} leading-[1.2] font-medium text-white`,
  },
  hero: {
    list: 'mt-1.5 flex md:mt-0',
    item: 'not-first:-ml-2 md:not-first:ml-[-0.7rem]',
    img: `${AVATAR_IMG} max-md:h-6 max-md:w-6`,
    label:
      'absolute inset-0 grid items-center justify-items-center text-[0.5625rem] font-bold md:text-[0.75rem]',
  },
  growth: {
    list: 'flex',
    item: 'not-first:ml-[-16px]',
    img: AVATAR_IMG,
    label:
      'absolute top-[13px] left-[12px] block items-center justify-items-center text-[0.75rem] leading-[1.5] font-bold text-ink',
  },
  register: {
    list: 'flex',
    item: 'not-first:ml-[-0.7rem] lg:not-first:ml-[-16px]',
    img: AVATAR_IMG,
    label: `${AVATAR_LABEL} font-bold lg:top-[13px] lg:right-auto lg:bottom-auto lg:left-[9px] lg:block lg:leading-[1.5] lg:text-canvas`,
  },
};

export const AvatarStack = memo(({ avatars, extraLabel, badgeSrc, size, variant = 'course' }) => {
  const styles = AVATARS[variant];

  return (
    <ul className={styles.list} aria-hidden="true">
      {avatars.map((avatar) => (
        <li key={avatar.id} className={styles.item}>
          <img className={styles.img} src={avatar.src} alt="" width={size} height={size} />
        </li>
      ))}
      <li className={`relative ${styles.item}`}>
        <img className={styles.img} src={badgeSrc} alt="" width={size} height={size} />
        <span className={styles.label}>{extraLabel}</span>
      </li>
    </ul>
  );
});

AvatarStack.displayName = 'AvatarStack';

const CHIP =
  'rounded-[1.5rem] bg-[rgba(246,_246,_246,_0.6)] px-[12px] py-[6px] text-[0.75rem] font-medium whitespace-nowrap text-copy [backdrop-filter:blur(4px)]';
const CARD_BASE =
  'overflow-hidden rounded-[1.5rem] border border-solid border-line bg-white px-[15px] pt-[15px] pb-[19.8px] font-body text-ink';
const TITLE =
  'max-w-70 overflow-hidden font-display text-[1.25rem] font-semibold tracking-[-0.01em] text-ellipsis whitespace-nowrap text-black';
const SCORE = 'inline-flex items-center [align-self:start] text-copy';
const LEVEL =
  'inline-flex items-center gap-[4px] rounded-[1.5rem] bg-canvas px-[12px] py-[6px] text-[0.75rem] font-medium text-body';

// default: home discovery and search results. figma: creator catalog (type locks to Figma sizes on
// desktop). showcase: the same card in the sign-in / register illustration (not focusable).
// illustration: the fixed-size card in the growth section.
const CARD = {
  default: {
    card: CARD_BASE,
    chip: `${CHIP} leading-[1.2]`,
    title: `${TITLE} leading-[1.2]`,
    creator: 'text-[0.75rem] leading-[1.6] text-copy',
    score: `${SCORE} text-[1rem] leading-[1.6]`,
    star: 'h-5 w-5',
    level: `${LEVEL} leading-[1.2]`,
    avatars: 'course',
    link: `block no-underline ${FOCUS_RING}`,
  },
  figma: {
    card: `${CARD_BASE} xl:h-[384px]`,
    chip: `${CHIP} leading-[1.2] xl:leading-[20px]`,
    title: `${TITLE} leading-[1.2] xl:leading-[28px]`,
    creator: 'text-[0.75rem] leading-[1.6] text-copy xl:leading-[20px]',
    score: `${SCORE} text-[1rem] leading-[1.6] xl:text-[1.125rem] xl:leading-[28px] xl:font-medium`,
    star: 'h-5 w-5 xl:h-6 xl:w-6',
    level: `${LEVEL} leading-[1.2] xl:leading-[20px]`,
    avatars: 'courseFigma',
    link: `block no-underline ${FOCUS_RING}`,
  },
  illustration: {
    card: `${CARD_BASE} h-[384px]`,
    chip: `${CHIP} leading-[20px]`,
    title: `${TITLE} leading-[28px]`,
    creator: 'text-[0.75rem] leading-[20px] text-copy',
    score: `${SCORE} text-[1.125rem] leading-[28px] font-medium`,
    star: 'h-6 w-6',
    level: `${LEVEL} leading-[20px]`,
    avatars: 'courseIllustration',
    link: `block no-underline ${FOCUS_RING}`,
  },
};
CARD.showcase = { ...CARD.figma, link: 'block no-underline' };

const CourseMedia = memo(({ course, chipClassName }) => (
  <div className="relative aspect-[341/195.145] h-auto overflow-hidden rounded-[0.75rem] bg-[rgb(68,_49,_49)]">
    <img className="h-full w-full object-cover" src={course.image} alt="" />
    <div className="absolute top-[150px] right-auto bottom-auto left-[12px] flex flex-nowrap gap-[12px]">
      <span className={chipClassName}>{course.lessonsLabel}</span>
      <span className={chipClassName}>{course.durationLabel}</span>
      <span className={chipClassName}>{course.commentsLabel}</span>
    </div>
  </div>
));

CourseMedia.displayName = 'CourseMedia';

export const CourseCard = memo(
  ({ course, variant = 'default', ratingIcon = ICON_STAR_OUTLINE, extraBadge = LEARNER_MORE }) => {
    const styles = CARD[variant];

    return (
      <article className={styles.card}>
        <Link to={courseDetailsPath(course.id)} className={styles.link}>
          <CourseMedia course={course} chipClassName={styles.chip} />
          <div className="mt-[20.855px] grid grid-cols-[1fr_auto] gap-4">
            <div className="min-w-0">
              <h3 className={styles.title}>{course.title}</h3>
              <p className={styles.creator}>
                by <span className="text-brand-blue">{course.creator}</span>
              </p>
            </div>
            <p className={styles.score}>
              {course.ratingLabel}
              <img
                className={styles.star}
                src={ratingIcon}
                alt=""
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </p>
            <div className="col-[1/-1] flex min-w-0 items-center gap-3">
              <p className={styles.level}>
                <img src={ICON_LEVEL} alt="" width={LEVEL_ICON_SIZE} height={LEVEL_ICON_SIZE} />
                {course.level}
              </p>
              <AvatarStack
                avatars={course.learnerAvatars}
                extraLabel={course.extraLearnersLabel}
                badgeSrc={extraBadge}
                size={COURSE_AVATAR_SIZE}
                variant={styles.avatars}
              />
            </div>
            <p className="flex items-end font-display text-[1.25rem] leading-[1.2] font-semibold tracking-[-0.01em] text-brand-blue">
              {course.priceLabel}
              <span className="font-body text-[0.75rem] leading-[1.6] font-normal tracking-[0px] text-copy">
                {course.billingLabel}
              </span>
            </p>
          </div>
        </Link>
      </article>
    );
  },
);

CourseCard.displayName = 'CourseCard';

const GRID = {
  home: {
    grid: 'mt-[4.8125rem] grid grid-cols-[1fr] gap-10 md:grid-cols-2 lg:grid-cols-3',
    card: 'default',
    empty: 'mt-8 text-center text-body',
  },
  search: {
    grid: 'mt-8 grid grid-cols-[1fr] gap-10 sm:mt-[77px] md:grid-cols-2 lg:grid-cols-3 xl:ml-[1px] xl:w-[1199px]',
    card: 'default',
    empty: 'mt-8 text-center text-body',
  },
  creator: {
    grid: 'mt-10 grid grid-cols-[1fr] gap-10 md:grid-cols-2 lg:grid-cols-3 xl:ml-[1px] xl:w-[1199px]',
    card: 'figma',
    empty: 'mt-10 text-body',
  },
};

// Course cards in the shared grid, or a message when no course matches.
// Used by the home discovery section, the search results and the creator catalog.
export const CourseGrid = memo(({ courses, emptyMessage, variant = 'home' }) => {
  const styles = GRID[variant];

  if (courses.length === 0) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <div className={styles.grid}>
      {courses.map((course) => (
        <CourseCard key={course.listingKey ?? course.id} course={course} variant={styles.card} />
      ))}
    </div>
  );
});

CourseGrid.displayName = 'CourseGrid';
