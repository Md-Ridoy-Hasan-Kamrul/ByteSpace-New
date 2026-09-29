import React, { memo } from 'react';
import { useHeroSearchRedirect } from '../../hooks/useHeroSearchRedirect';
import {
  AVATAR_MORE,
  HERO_AVATAR_SIZE,
  HERO_STUDENT,
  ICON_SEARCH,
  ICON_SIZE,
  ICON_STAR,
  STAR_SIZE,
} from './homeAssets';
import {
  HAPPY_STUDENTS_COUNT,
  HAPPY_STUDENTS_EXTRA,
  HAPPY_STUDENTS_LABEL,
  HAPPY_STUDENTS_RATING,
  HERO_AVATARS,
  HERO_SUBTITLE,
  HERO_TITLE,
  LEARNING_PROGRESS_LABEL,
  SEARCH_BUTTON_LABEL,
  SEARCH_PLACEHOLDER,
  UIUX_CARD_TITLE,
  UIUX_COURSE_COUNT,
  UIUX_STUDENT_COUNT,
} from './homeData';
import AvatarStack from './AvatarStack';
import HomeHeader from './HomeHeader';
import OrnamentField from './OrnamentField';

const HeroSearch = memo(({ query, onQueryChange, onSubmit }) => (
  <form className="home-search" role="search" onSubmit={onSubmit}>
    <label className="home-search-field" htmlFor="home-course-search">
      <span className="sr-only">{SEARCH_PLACEHOLDER}</span>
      <img src={ICON_SEARCH} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      <input
        id="home-course-search"
        type="search"
        placeholder={SEARCH_PLACEHOLDER}
        value={query}
        onChange={onQueryChange}
      />
    </label>
    <button type="submit" className="home-button">
      {SEARCH_BUTTON_LABEL}
    </button>
  </form>
));

HeroSearch.displayName = 'HeroSearch';

const ProgressCard = memo(() => (
  <article className="home-float-card home-float-progress">
    <p className="home-kicker">Learning Progress</p>
    <p className="home-progress-value">{LEARNING_PROGRESS_LABEL}</p>
    <div className="home-progress" aria-hidden="true">
      <div className="home-progress-fill" />
    </div>
  </article>
));

ProgressCard.displayName = 'ProgressCard';

const TopicCard = memo(() => (
  <article className="home-float-card home-float-topic">
    <p className="home-kicker">{UIUX_CARD_TITLE}</p>
    <p className="home-meta">
      <span>{UIUX_COURSE_COUNT}</span>
      <span aria-hidden="true">•</span>
      <span>{UIUX_STUDENT_COUNT}</span>
    </p>
  </article>
));

TopicCard.displayName = 'TopicCard';

const StudentsCard = memo(() => (
  <article className="home-float-card home-float-students">
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
));

StudentsCard.displayName = 'StudentsCard';

const HomeHero = memo(() => {
  const search = useHeroSearchRedirect();

  return (
    <section className="home-hero" aria-label="Introduction">
      <div className="home-hero-glow" />
      <OrnamentField />
      <HomeHeader />
      <div className="home-wrap home-hero-copy">
        <h1>{HERO_TITLE}</h1>
        <p>{HERO_SUBTITLE}</p>
      </div>
      <HeroSearch
        query={search.query}
        onQueryChange={search.handleQueryChange}
        onSubmit={search.handleSearchSubmit}
      />
      <div className="home-wrap home-hero-stage">
        <TopicCard />
        <img
          className="home-hero-student"
          src={HERO_STUDENT}
          alt="Student with headphones holding a laptop"
        />
        <ProgressCard />
        <StudentsCard />
      </div>
    </section>
  );
});

HomeHero.displayName = 'HomeHero';

export default HomeHero;
