import React, { memo, useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CatalogToolbar } from '../components/CatalogToolbar';
import { CourseGrid } from '../components/CourseCard';
import { SitePage } from '../components/SitePage';
import {
  EMPTY_COURSES_MESSAGE,
  FOLLOW_LABEL,
  MISSING_CREATOR_MESSAGE,
  PORTRAIT_SIZE,
  SEO_CREATOR,
  SEO_MISSING_CREATOR,
  selectCreatorCourses,
  selectCreatorProfile,
} from '../data/creator';
import { ALL_CATEGORIES, ALL_LEVELS, SORT_RELEVANT } from '../data/search';
import { useSEO } from '../hooks/useSEO';
import '../styles/creator.css';

const useCreatorCatalog = (courses) => {
  const [level, setLevel] = useState(ALL_LEVELS);
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [sort, setSort] = useState(SORT_RELEVANT);

  const visibleCourses = useMemo(
    () => selectCreatorCourses(courses, { level, category, sort }),
    [category, courses, level, sort],
  );

  const handleResetFilters = useCallback(() => {
    setLevel(ALL_LEVELS);
    setCategory(ALL_CATEGORIES);
    setSort(SORT_RELEVANT);
  }, []);

  const handleLevelChange = useCallback((nextLevel) => {
    setLevel(nextLevel);
  }, []);

  const handleCategoryChange = useCallback((nextCategory) => {
    setCategory(nextCategory);
  }, []);

  const handleSortChange = useCallback((nextSort) => {
    setSort(nextSort);
  }, []);

  return {
    level,
    category,
    sort,
    visibleCourses,
    handleResetFilters,
    handleLevelChange,
    handleCategoryChange,
    handleSortChange,
  };
};

const useCreatorFollow = () => {
  const [following, setFollowing] = useState(false);

  const handleFollowToggle = useCallback(() => {
    setFollowing((isFollowing) => !isFollowing);
  }, []);

  return { following, handleFollowToggle };
};

const CreatorStat = memo(({ stat }) => (
  <p className="creator-stat">
    <span>{stat.count}</span>
    {stat.label}
  </p>
));

CreatorStat.displayName = 'CreatorStat';

const CreatorIdentity = memo(({ creator }) => (
  <div className="creator-identity">
    <img
      className="creator-portrait"
      src={creator.portrait}
      alt=""
      width={PORTRAIT_SIZE}
      height={PORTRAIT_SIZE}
    />
    <div className="creator-identity-copy">
      <div className="creator-name-row">
        <h1>{creator.name}</h1>
        <span className="creator-badge">{creator.badge}</span>
      </div>
      <p>{creator.role}</p>
    </div>
  </div>
));

CreatorIdentity.displayName = 'CreatorIdentity';

const CreatorBio = memo(({ paragraphs }) => (
  <div className="creator-bio">
    {paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
));

CreatorBio.displayName = 'CreatorBio';

const CreatorActions = memo(({ stats, following, onFollow }) => (
  <div className="creator-actions">
    <div className="creator-stats">
      {stats.map((stat) => (
        <CreatorStat key={stat.id} stat={stat} />
      ))}
    </div>
    <button type="button" className="creator-follow" aria-pressed={following} onClick={onFollow}>
      {FOLLOW_LABEL}
    </button>
  </div>
));

CreatorActions.displayName = 'CreatorActions';

const CreatorIntro = memo(({ creator, following, onFollow }) => (
  <div className="creator-intro">
    <CreatorIdentity creator={creator} />
    <CreatorBio paragraphs={creator.bio} />
    <CreatorActions stats={creator.stats} following={following} onFollow={onFollow} />
  </div>
));

CreatorIntro.displayName = 'CreatorIntro';

const CreatorProfileContent = memo(({ creator }) => {
  const catalog = useCreatorCatalog(creator.courses);
  const follow = useCreatorFollow();

  return (
    <SitePage
      name="creator"
      hero={
        <div className="home-wrap">
          <CreatorIntro
            creator={creator}
            following={follow.following}
            onFollow={follow.handleFollowToggle}
          />
        </div>
      }
    >
      <section className="creator-catalog">
        <div className="home-wrap">
          <CatalogToolbar
            variant="creator"
            level={catalog.level}
            category={catalog.category}
            sort={catalog.sort}
            onReset={catalog.handleResetFilters}
            onLevelChange={catalog.handleLevelChange}
            onCategoryChange={catalog.handleCategoryChange}
            onSortChange={catalog.handleSortChange}
          />
          <CourseGrid
            courses={catalog.visibleCourses}
            emptyMessage={EMPTY_COURSES_MESSAGE}
            className="home-figma-card"
            emptyClassName="creator-empty"
          />
        </div>
      </section>
    </SitePage>
  );
});

CreatorProfileContent.displayName = 'CreatorProfileContent';

const CreatorProfile = memo(() => {
  const { creatorId } = useParams();
  const creator = selectCreatorProfile(creatorId);

  useSEO(creator ? SEO_CREATOR : SEO_MISSING_CREATOR);

  if (!creator) {
    return <p>{MISSING_CREATOR_MESSAGE}</p>;
  }

  return <CreatorProfileContent creator={creator} />;
});

CreatorProfile.displayName = 'CreatorProfile';

export default CreatorProfile;
