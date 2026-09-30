import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../config';
import {
  AVATAR_MORE,
  HAPPY_STUDENTS_COUNT,
  HAPPY_STUDENTS_EXTRA,
  HAPPY_STUDENTS_LABEL,
  HAPPY_STUDENTS_RATING,
  HERO_AVATARS,
  HERO_AVATAR_SIZE,
  HERO_EDGE_ORNAMENTS,
  HERO_STUDENT,
  HERO_SUBTITLE,
  HERO_TITLE,
  ICON_SEARCH,
  ICON_SIZE,
  ICON_STAR,
  LEARNING_PROGRESS_LABEL,
  SEARCH_BUTTON_LABEL,
  SEARCH_PLACEHOLDER,
  STAR_SIZE,
  UIUX_CARD_TITLE,
  UIUX_COURSE_COUNT,
  UIUX_STUDENT_COUNT,
} from '../../data/home';
import { SEARCH_QUERY_PARAM } from '../../data/search';
import { AvatarStack } from '../CourseCard';
import { HomeHeader } from '../Header';
import { OrnamentField } from '../Ornaments';

const EMPTY_QUERY = '';

const searchResultsPath = (query) => {
  const trimmed = query.trim();
  if (!trimmed) {
    return ROUTES.SEARCH;
  }

  const params = new URLSearchParams({ [SEARCH_QUERY_PARAM]: trimmed });
  return `${ROUTES.SEARCH}?${params.toString()}`;
};

const useHeroSearchRedirect = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(EMPTY_QUERY);

  const handleQueryChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleSearchSubmit = useCallback(
    (event) => {
      event.preventDefault();
      navigate(searchResultsPath(query));
    },
    [navigate, query],
  );

  return { query, handleQueryChange, handleSearchSubmit };
};

const HeroSearch = memo(({ query, onQueryChange, onSubmit }) => (
  <form
    className="mx-auto gap-2 relative z-2 flex flex-row w-[min(100%_-_2rem,_30rem)] mt-7 items-center sm:w-[min(100%_-_2.5rem,_30rem)] md:mx-0 md:gap-3 md:absolute md:z-4 md:w-[min(30rem,_100%_-_5rem)] md:mt-0 md:max-lg:top-[318px] md:max-lg:left-[50%] md:max-lg:[transform:translateX(-50%)] md:max-lg:[transform-origin:left_top] lg:w-[calc(581_/_1440_*_100%)] lg:top-[calc(462_/_1024_*_100%)] lg:left-[calc(429.5_/_1440_*_100%)]"
    role="search"
    onSubmit={onSubmit}
  >
    <label
      className="transition-[box-shadow] duration-[180ms] ease-[ease] px-3.5 gap-2 rounded-[1.5rem] border-none flex items-center h-12 bg-white grow shrink basis-[0%] max-md:min-w-0 xs:px-4 md:px-6 md:h-13 focus-within:shadow-[0_0_0_3px_#d4fb20]"
      htmlFor="home-course-search"
    >
      <span className="sr-only">{SEARCH_PLACEHOLDER}</span>
      <img
        className="max-md:grow-0 max-md:shrink-0 max-md:basis-auto max-md:w-5 max-md:h-5"
        src={ICON_SEARCH}
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
      <input
        className="border-none w-full text-ink text-[0.875rem] outline-none max-md:min-w-0 max-md:text-ellipsis xs:text-[0.9375rem] md:text-[1.125rem] focus-visible:outline-offset-[3px]"
        id="home-course-search"
        type="search"
        placeholder={SEARCH_PLACEHOLDER}
        value={query}
        onChange={onQueryChange}
      />
    </label>
    <button
      type="submit"
      className="px-4 rounded-[1.5rem] border-none inline-flex items-center justify-center min-h-12 bg-brand-lime text-ink text-[1rem] font-medium leading-[1.2] no-underline cursor-pointer max-md:grow-0 max-md:shrink-0 max-md:basis-auto xs:px-5 md:py-3 md:px-6 md:min-h-11.5 md:text-[1.125rem] hover:[filter:brightness(0.96)] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]"
    >
      {SEARCH_BUTTON_LABEL}
    </button>
  </form>
));

HeroSearch.displayName = 'HeroSearch';

const ProgressCard = memo(() => (
  <article className="py-2.5 px-3 rounded-[0.75rem] w-31 bg-[rgba(255,_255,_255,_0.96)] text-ink shadow-[rgba(0,_0,_0,_0.12)_0px_0.75rem_1.5rem] absolute z-3 top-[calc(3.25rem_+_min(100vw_-_4rem,_21rem)_*_0.34)] max-md:right-0 md:p-4 md:rounded-[1rem] md:w-[calc(232_*_1px)] md:shadow-none md:top-[520px] md:max-lg:left-[calc(50%_+_125px)] md:max-lg:[transform:scale(0.85)] md:max-2xl:[transform-origin:left_top] lg:top-[calc(651_/_1024_*_100%)] lg:left-[calc(842_/_1440_*_100%)] lg:max-2xl:[transform:scale(tan(atan2(100cqi,_1440px)))] 2xl:w-[calc(232_/_1440_*_100%)]">
    <p className="text-[0.75rem] font-medium md:text-[0.875rem]">Learning Progress</p>
    <p className="font-display text-[1.75rem] font-semibold tracking-[-0.01em] leading-[1.2] md:text-[3rem]">
      {LEARNING_PROGRESS_LABEL}
    </p>
    <div
      className="overflow-hidden rounded-[1.5rem] w-full h-1.5 mt-1 bg-[rgb(246,_246,_246)] md:h-2 md:mt-2"
      aria-hidden="true"
    >
      <div className="rounded-[inherit] w-[56%] h-full bg-brand-lime" />
    </div>
  </article>
));

ProgressCard.displayName = 'ProgressCard';

const TopicCard = memo(() => (
  <article className="py-2.5 px-3 rounded-[0.75rem] w-max bg-[rgba(255,_255,_255,_0.96)] text-ink shadow-[rgba(0,_0,_0,_0.12)_0px_0.75rem_1.5rem] absolute z-3 top-0 left-0 md:p-4 md:rounded-[1rem] md:w-[calc(208_*_1px)] md:shadow-none md:top-[470px] md:left-[calc(50%_-_330px)] md:max-lg:[transform:scale(0.85)] md:max-2xl:[transform-origin:left_top] lg:top-[calc(639_/_1024_*_100%)] lg:left-[calc(404_/_1440_*_100%)] lg:max-2xl:[transform:scale(tan(atan2(100cqi,_1440px)))] 2xl:w-[calc(208_/_1440_*_100%)]">
    <p className="text-[0.8125rem] font-medium md:text-[0.875rem]">{UIUX_CARD_TITLE}</p>
    <p className="gap-1.5 flex text-muted text-[0.6875rem] max-md:whitespace-nowrap max-md:mt-0.5 md:gap-2 md:text-[0.75rem]">
      <span>{UIUX_COURSE_COUNT}</span>
      <span aria-hidden="true">•</span>
      <span>{UIUX_STUDENT_COUNT}</span>
    </p>
  </article>
));

TopicCard.displayName = 'TopicCard';

const StudentsCard = memo(() => (
  <article className="py-2.5 px-3 rounded-[0.75rem] w-max bg-[rgba(255,_255,_255,_0.96)] text-ink shadow-[rgba(0,_0,_0,_0.12)_0px_0.75rem_1.5rem] absolute z-3 left-0 max-md:bottom-3 md:p-4 md:rounded-[1rem] md:w-[calc(258_*_1px)] md:shadow-none md:left-[calc(50%_-_290px)] md:max-lg:top-[660px] md:max-lg:[transform:scale(0.85)] md:max-2xl:[transform-origin:left_top] lg:left-[calc(328_/_1440_*_100%)] lg:top-[calc(837_/_1024_*_100%)] lg:max-2xl:[transform:scale(tan(atan2(100cqi,_1440px)))] 2xl:w-[calc(258_/_1440_*_100%)]">
    <p className="text-[0.75rem] font-medium md:text-[0.875rem]">{HAPPY_STUDENTS_LABEL}</p>
    <p className="gap-[0.15rem] flex items-center text-[0.75rem]">
      <strong className="text-ink font-normal">{HAPPY_STUDENTS_RATING}</strong>
      <span>{HAPPY_STUDENTS_COUNT}</span>
      <img src={ICON_STAR} alt="" width={STAR_SIZE} height={STAR_SIZE} />
    </p>
    <AvatarStack
      variant="hero"
      avatars={HERO_AVATARS}
      extraLabel={HAPPY_STUDENTS_EXTRA}
      badgeSrc={AVATAR_MORE}
      size={HERO_AVATAR_SIZE}
    />
  </article>
));

StudentsCard.displayName = 'StudentsCard';

export const HomeHero = memo(() => {
  const search = useHeroSearchRedirect();

  return (
    <section
      className="overflow-hidden bg-top relative bg-brand-blue bg-[url(/home/hero-grid.svg)] bg-no-repeat [background-size:90rem_64rem] text-white md:bg-repeat-x md:min-h-0 md:max-lg:h-[820px] lg:[background-size:min(100%,_90rem)_100%] lg:h-[calc(min(100vw,_90rem)_*_1024_/_1440)]"
      aria-label="Introduction"
    >
      <div className="inset-0 absolute pointer-events-none">
        <OrnamentField ornaments={HERO_EDGE_ORNAMENTS} />
      </div>
      <div className="relative md:mx-auto md:w-[min(100%,_90rem)] md:h-full md:[container-type:size]">
        <div className="bg-center absolute left-[50%] bottom-[calc(min(100vw_-_4rem,_21rem)_*_-1.173)] w-[calc(min(100vw_-_4rem,_21rem)_*_1.988)] h-[calc(min(100vw_-_4rem,_21rem)_*_1.988)] [transform:translateX(-50%)] bg-[url(/home/hero-glow.svg)] [background-size:contain] bg-no-repeat pointer-events-none md:left-[calc(50%_-_330px)] md:bottom-auto md:w-[660px] md:h-[660px] md:transform-none md:max-lg:top-[450px] lg:left-[calc(145_/_1440_*_100%)] lg:w-[calc(1149_/_1440_*_100%)] lg:h-[calc(1149_/_1024_*_100%)] lg:top-[calc(582_/_1024_*_100%)]" />
        <OrnamentField />
        <HomeHeader overHero />
        <div className="mx-auto w-[min(100%_-_2rem,_75rem)] relative z-2 max-w-232 mt-6 text-center sm:w-[min(100%_-_2.5rem,_75rem)] md:mx-0 md:w-[min(37.5rem,_100%_-_5rem)] md:absolute md:z-4 md:max-w-none md:mt-0 md:max-lg:top-[120px] md:max-lg:left-[50%] md:max-lg:[transform:translateX(-50%)] lg:w-[calc(935_/_1440_*_100%)] lg:top-[calc(169_/_1024_*_100%)] lg:left-[calc(252.5_/_1440_*_100%)]">
          <h1 className="font-display font-semibold tracking-[-0.01em] leading-[1.2] text-[clamp(1.625rem,_7.5vw,_1.875rem)] md:text-[2.75rem] lg:leading-[1.194] lg:text-[calc(72_/_1440_*_100cqi)]">
            {HERO_TITLE}
          </h1>
          <p className="mt-4 text-[rgb(229,_230,_232)] text-[1rem] leading-[1.6] max-md:mx-auto max-md:max-w-88 lg:mt-[calc(32_/_1440_*_100cqi)] lg:text-[calc(18_/_1440_*_100cqi)] lg:leading-[1.61]">
            {HERO_SUBTITLE}
          </p>
        </div>
        <HeroSearch
          query={search.query}
          onQueryChange={search.handleQueryChange}
          onSubmit={search.handleSearchSubmit}
        />
        <div className="mx-auto gap-4 w-[min(100%_-_2rem,_75rem)] relative z-2 block flex-col items-center mt-8 max-md:max-w-96 max-md:pt-13 sm:w-[min(100%_-_2.5rem,_75rem)] md:m-0 md:static md:flex md:h-0 md:min-h-0">
          <TopicCard />
          <img
            className="mx-auto w-[min(100vw_-_4rem,_21rem)] h-auto relative z-1 object-contain object-[center_bottom] max-md:block max-md:aspect-[578/541] md:m-0 md:w-[400px] md:h-[410px] md:absolute md:max-lg:top-[410px] md:max-lg:left-[calc(50%_-_200px)] lg:w-[calc(578_/_1440_*_100%)] lg:h-[calc(541_/_1024_*_100%)] lg:top-[calc(512_/_1024_*_100%)] lg:left-[calc(431_/_1440_*_100%)]"
            src={HERO_STUDENT}
            alt="Student with headphones holding a laptop"
          />
          <ProgressCard />
          <StudentsCard />
        </div>
      </div>
    </section>
  );
});

HomeHero.displayName = 'HomeHero';
