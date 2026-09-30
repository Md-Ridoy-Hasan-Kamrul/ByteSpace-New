import { memo, useCallback, useMemo, useState } from 'react';
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
  <p className="py-3 px-6 gap-2 rounded-[1.5rem] inline-flex items-center bg-white text-ink text-[1rem] font-medium leading-[1.2] md:text-[1.125rem]">
    <span className="text-brand-blue">{stat.count}</span>
    {stat.label}
  </p>
));

CreatorStat.displayName = 'CreatorStat';

const CreatorIdentity = memo(({ creator }) => (
  <div className="gap-6 flex flex-wrap items-center">
    <img
      className="rounded-[1.5rem] w-24 h-24 grow-0 shrink-0 basis-auto object-cover"
      src={creator.portrait}
      alt=""
      width={PORTRAIT_SIZE}
      height={PORTRAIT_SIZE}
    />
    <div className="gap-2 grid">
      <div className="gap-2 flex flex-wrap items-start">
        <h1 className="font-display font-semibold tracking-[-0.36px] leading-[1.2] text-canvas text-[clamp(1.625rem,_7.5vw,_1.875rem)] md:text-[2.25rem]">
          {creator.name}
        </h1>
        <span className="py-2 px-6 rounded-[1.5rem] inline-flex items-center justify-center bg-brand-lime text-ink text-[1rem] font-medium leading-[1.2]">
          {creator.badge}
        </span>
      </div>
      <p className="text-canvas text-[1rem] font-normal leading-[29px] md:text-[1.125rem]">
        {creator.role}
      </p>
    </div>
  </div>
));

CreatorIdentity.displayName = 'CreatorIdentity';

const CreatorBio = memo(({ paragraphs }) => (
  <div className="grid max-w-[74.8125rem]">
    {paragraphs.map((paragraph) => (
      <p
        className="text-canvas text-[1rem] font-normal leading-[29px] md:text-[1.125rem]"
        key={paragraph}
      >
        {paragraph}
      </p>
    ))}
  </div>
));

CreatorBio.displayName = 'CreatorBio';

const CreatorActions = memo(({ stats, following, onFollow }) => (
  <div className="gap-4 flex flex-wrap items-center justify-between">
    <div className="gap-4 flex flex-wrap">
      {stats.map((stat) => (
        <CreatorStat key={stat.id} stat={stat} />
      ))}
    </div>
    <button
      type="button"
      className="py-3 px-6 rounded-[1.5rem] border-none bg-brand-lime text-ink-deep text-[1rem] font-medium leading-[1.2] cursor-pointer md:text-[1.125rem] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]"
      aria-pressed={following}
      onClick={onFollow}
    >
      {FOLLOW_LABEL}
    </button>
  </div>
));

CreatorActions.displayName = 'CreatorActions';

const CreatorIntro = memo(({ creator, following, onFollow }) => (
  <div className="gap-10 grid mt-10 text-canvas lg:mt-[52px] lg:mr-0 lg:mb-0 lg:ml-[2px]">
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
        <div className="mx-auto w-[min(100%_-_2rem,_75rem)] sm:w-[min(100%_-_2.5rem,_75rem)]">
          <CreatorIntro
            creator={creator}
            following={follow.following}
            onFollow={follow.handleFollowToggle}
          />
        </div>
      }
    >
      <section className="pt-10 pb-[61px] lg:pt-[62px]">
        <div className="mx-auto w-[min(100%_-_2rem,_75rem)] sm:w-[min(100%_-_2.5rem,_75rem)]">
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
            variant="creator"
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
