import React, { memo } from 'react';
import {
  AVATAR_MORE,
  GROWTH_CREATOR,
  HERO_AVATAR_SIZE,
  HERO_STUDENT,
  ICON_CHECK,
  ICON_SIZE,
  ICON_STAR,
  STAR_SIZE,
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

const GrowthStats = memo(() => (
  <dl className="home-stats">
    {GROWTH_STATS.map((stat) => (
      <div key={stat.id}>
        <dt>{stat.label}</dt>
        <dd>
          <strong>{stat.value}</strong>
        </dd>
      </div>
    ))}
  </dl>
));

GrowthStats.displayName = 'GrowthStats';

const GrowthVisual = memo(() => (
  <div className="home-visual">
    <img className="home-visual-student" src={HERO_STUDENT} alt="" />
    <article className="home-float-card">
      <p className="home-kicker">Learning Progress</p>
      <p className="home-progress-value">{LEARNING_PROGRESS_LABEL}</p>
      <div className="home-progress" aria-hidden="true">
        <div className="home-progress-fill" />
      </div>
    </article>
  </div>
));

GrowthVisual.displayName = 'GrowthVisual';

const RevenueCards = memo(() => (
  <div className="home-revenue">
    <article>
      <p>{REVENUE_LABEL}</p>
      <p>{REVENUE_RANGE}</p>
      <strong>{REVENUE_AMOUNT}</strong>
      <span className="home-delta">{REVENUE_DELTA}</span>
      <div className="home-progress" aria-hidden="true">
        <div className="home-progress-fill" />
      </div>
    </article>
    <article>
      <p>{YEAR_TO_DATE_LABEL}</p>
      <p>{YEAR_TO_DATE_YEAR}</p>
      <strong>{YEAR_TO_DATE_AMOUNT}</strong>
      <span className="home-delta">{REVENUE_DELTA}</span>
    </article>
    <article>
      <p className="home-kicker">{HAPPY_STUDENTS_LABEL}</p>
      <p className="home-rating">
        <strong>{HAPPY_STUDENTS_RATING}</strong>
        <span>{HAPPY_STUDENTS_COUNT}</span>
        <img src={ICON_STAR} alt="" width={STAR_SIZE} height={STAR_SIZE} />
      </p>
      <AvatarStack
        avatars={HERO_AVATARS}
        extraLabel={HAPPY_STUDENTS_EXTRA}
        badgeSrc={AVATAR_MORE}
        size={HERO_AVATAR_SIZE}
      />
    </article>
  </div>
));

RevenueCards.displayName = 'RevenueCards';

const CreatorBenefits = memo(() => (
  <ul className="home-benefits">
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
    <div className="home-wrap home-growth-grid">
      <div>
        <h2>{GROWTH_TITLE}</h2>
        <p>{GROWTH_BODY}</p>
        <GrowthStats />
      </div>
      <GrowthVisual />
    </div>
    <div className="home-wrap home-creator-grid">
      <div className="home-visual">
        <RevenueCards />
        <img className="home-visual-creator" src={GROWTH_CREATOR} alt="Creator wearing headphones" />
      </div>
      <div className="home-creator-copy">
        <h2>{CREATOR_TITLE}</h2>
        <p>
          <strong>{CREATOR_LEAD}</strong> {CREATOR_BODY}
        </p>
        <CreatorBenefits />
      </div>
    </div>
  </section>
));

GrowthSection.displayName = 'GrowthSection';

export default GrowthSection;
