import React, { memo } from 'react';
import {
  AVATAR_MORE,
  GROWTH_CREATOR,
  GROWTH_GLOW,
  GROWTH_GLOW_LIME,
  GROWTH_ORNAMENTS,
  HERO_AVATAR_SIZE,
  HERO_STUDENT,
  ICON_CHECK,
  ICON_SIZE,
  ICON_STAR,
  ICON_STAR_LIME,
  LEARNER_MORE_DARK,
} from './homeAssets';
import {
  CREATOR_BENEFITS,
  CREATOR_BODY,
  CREATOR_LEAD,
  CREATOR_TITLE,
  GROWTH_BODY,
  GROWTH_STATS,
  GROWTH_TITLE,
  HAPPY_STUDENTS_COUNT,
  HAPPY_STUDENTS_EXTRA,
  HAPPY_STUDENTS_LABEL,
  HAPPY_STUDENTS_RATING,
  HERO_AVATARS,
  HOME_COURSES,
  LEARNING_PROGRESS_LABEL,
  REVENUE_AMOUNT,
  REVENUE_DELTA,
  REVENUE_LABEL,
  REVENUE_RANGE,
  YEAR_TO_DATE_AMOUNT,
  YEAR_TO_DATE_LABEL,
  YEAR_TO_DATE_YEAR,
} from './homeData';
import AvatarStack from './AvatarStack';
import CourseCard from './CourseCard';
import OrnamentField from './OrnamentField';

// Layout follows Figma "Frame 15" (34:1159): intro copy + course illustration, then
// creator illustration + creator copy. Illustrations are decorative, so they are inert.

const GROWTH_COURSE = HOME_COURSES[0];

const ProgressBar = memo(({ tone }) => (
  <span className={`home-growth-bar home-growth-bar-${tone}`} aria-hidden="true">
    <span />
  </span>
));

ProgressBar.displayName = 'ProgressBar';

const GrowthStats = memo(() => (
  <ul className="home-growth-stats">
    {GROWTH_STATS.map((stat) => (
      <li key={stat.id}>
        <strong>{stat.value}</strong>
        <span>{stat.label}</span>
      </li>
    ))}
  </ul>
));

GrowthStats.displayName = 'GrowthStats';

const CourseIllustration = memo(() => (
  <div className="home-growth-art home-growth-art-course" aria-hidden="true" inert>
    <div className="home-growth-course">
      <CourseCard
        course={GROWTH_COURSE}
        ratingIcon={ICON_STAR_LIME}
        extraBadge={LEARNER_MORE_DARK}
      />
    </div>
    <img className="home-growth-person home-growth-student" src={HERO_STUDENT} alt="" />
    <div className="home-growth-card home-growth-progress">
      <p className="home-growth-progress-label">Learning Progress</p>
      <p className="home-growth-progress-value">{LEARNING_PROGRESS_LABEL}</p>
      <ProgressBar tone="soft" />
    </div>
    <OrnamentField ornaments={GROWTH_ORNAMENTS.course} />
  </div>
));

CourseIllustration.displayName = 'CourseIllustration';

const StatCardTitle = memo(({ label, detail }) => (
  <p className="home-growth-stat-title">
    {label}
    <span>{detail}</span>
  </p>
));

StatCardTitle.displayName = 'StatCardTitle';

const CreatorIllustration = memo(() => (
  <div className="home-growth-art home-growth-art-creator" aria-hidden="true" inert>
    <div className="home-growth-card home-growth-stat-card home-growth-revenue">
      <StatCardTitle label={REVENUE_LABEL} detail={REVENUE_RANGE} />
      <div className="home-growth-stat-row">
        <strong>{REVENUE_AMOUNT}</strong>
        <span className="home-growth-delta">{REVENUE_DELTA}</span>
      </div>
      <ProgressBar tone="light" />
    </div>
    <div className="home-growth-card home-growth-stat-card home-growth-ytd">
      <StatCardTitle label={YEAR_TO_DATE_LABEL} detail={YEAR_TO_DATE_YEAR} />
      <strong>{YEAR_TO_DATE_AMOUNT}</strong>
      <span className="home-growth-delta">{REVENUE_DELTA}</span>
    </div>
    <div className="home-growth-person home-growth-creator">
      <img src={GROWTH_CREATOR} alt="" />
    </div>
    <div className="home-growth-card home-growth-students">
      <div>
        <p className="home-growth-students-label">{HAPPY_STUDENTS_LABEL}</p>
        <p className="home-growth-students-rating">
          <strong>{HAPPY_STUDENTS_RATING}</strong> {HAPPY_STUDENTS_COUNT}
          <span className="home-growth-students-star">
            <img src={ICON_STAR} alt="" />
          </span>
        </p>
      </div>
      <AvatarStack
        avatars={HERO_AVATARS}
        extraLabel={HAPPY_STUDENTS_EXTRA}
        badgeSrc={AVATAR_MORE}
        size={HERO_AVATAR_SIZE}
      />
    </div>
    <OrnamentField ornaments={GROWTH_ORNAMENTS.creator} />
  </div>
));

CreatorIllustration.displayName = 'CreatorIllustration';

const CreatorBenefits = memo(() => (
  <ul className="home-growth-benefits">
    {CREATOR_BENEFITS.map((benefit) => (
      <li key={benefit}>
        <img src={ICON_CHECK} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        {benefit}
      </li>
    ))}
  </ul>
));

CreatorBenefits.displayName = 'CreatorBenefits';

const GrowthSection = memo(() => (
  <section className="home-growth" aria-label="Professional growth">
    <img className="home-growth-glow" src={GROWTH_GLOW} alt="" />
    <img className="home-growth-glow-lime" src={GROWTH_GLOW_LIME} alt="" />
    <div className="home-wrap home-growth-frame">
      <div className="home-growth-row home-growth-row-intro">
        <div className="home-growth-copy home-growth-copy-intro">
          <h2>{GROWTH_TITLE}</h2>
          <p>{GROWTH_BODY}</p>
          <GrowthStats />
        </div>
        <CourseIllustration />
      </div>
      <div className="home-growth-row home-growth-row-creator">
        <CreatorIllustration />
        <div className="home-growth-copy home-growth-copy-creator">
          <h2>{CREATOR_TITLE}</h2>
          <p>
            <strong>{CREATOR_LEAD}</strong> {CREATOR_BODY}
          </p>
          <CreatorBenefits />
        </div>
      </div>
    </div>
  </section>
));

GrowthSection.displayName = 'GrowthSection';

export default GrowthSection;
