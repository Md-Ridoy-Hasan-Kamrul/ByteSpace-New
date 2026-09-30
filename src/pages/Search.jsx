import React, { memo, useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CatalogToolbar } from '../components/CatalogToolbar';
import { CourseGrid } from '../components/CourseCard';
import { SitePage } from '../components/SitePage';
import { FEATURED_TOPIC, ICON_SEARCH, ICON_SIZE } from '../data/home';
import {
  ALL_CATEGORIES,
  ALL_LEVELS,
  EMPTY_RESULTS_MESSAGE,
  FIRST_PAGE,
  NEXT_PAGE_LABEL,
  PREVIOUS_PAGE_LABEL,
  SEARCH_COURSES,
  SEARCH_FIELD_LABEL,
  SEARCH_ICONS,
  SEARCH_QUERY_PARAM,
  SEARCH_SCOPE_LABEL,
  SEARCH_TITLE,
  SEARCH_TOPICS,
  SEO_SEARCH,
  SORT_RELEVANT,
  selectSearchPage,
} from '../data/search';
import { useSEO } from '../hooks/useSEO';
import { smoothScrollTo } from '../hooks/useSmoothScroll';

const EMPTY_QUERY = '';

const INITIAL_FILTERS = {
  query: EMPTY_QUERY,
  activeQuery: EMPTY_QUERY,
  topic: FEATURED_TOPIC,
  level: ALL_LEVELS,
  category: ALL_CATEGORIES,
  sort: SORT_RELEVANT,
  page: FIRST_PAGE,
};

const filtersFromParams = (params) => {
  const query = params.get(SEARCH_QUERY_PARAM) ?? EMPTY_QUERY;
  return { ...INITIAL_FILTERS, query, activeQuery: query };
};

const useSearchCatalog = (courses) => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => filtersFromParams(searchParams));

  const results = useMemo(() => selectSearchPage(courses, filters), [courses, filters]);

  const updateFilters = useCallback((patch) => {
    setFilters((current) => ({ ...current, ...patch, page: FIRST_PAGE }));
  }, []);

  const handleQueryChange = useCallback((event) => {
    const { value } = event.target;
    setFilters((current) => ({ ...current, query: value }));
  }, []);

  const handleSearchSubmit = useCallback((event) => {
    event.preventDefault();
    setFilters((current) => ({ ...current, activeQuery: current.query, page: FIRST_PAGE }));
  }, []);

  const handleTopicSelect = useCallback(
    (topic) => {
      updateFilters({ topic });
    },
    [updateFilters],
  );

  const handleLevelChange = useCallback(
    (level) => {
      updateFilters({ level });
    },
    [updateFilters],
  );

  const handleCategoryChange = useCallback(
    (category) => {
      updateFilters({ category });
    },
    [updateFilters],
  );

  const handleSortChange = useCallback(
    (sort) => {
      updateFilters({ sort });
    },
    [updateFilters],
  );

  const handlePageChange = useCallback((page) => {
    setFilters((current) => ({ ...current, page }));
    smoothScrollTo(0);
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS);
  }, []);

  return {
    query: filters.query,
    topic: filters.topic,
    level: filters.level,
    category: filters.category,
    sort: filters.sort,
    page: results.page,
    pageCount: results.pageCount,
    visibleCourses: results.courses,
    handleQueryChange,
    handleSearchSubmit,
    handleTopicSelect,
    handleLevelChange,
    handleCategoryChange,
    handleSortChange,
    handlePageChange,
    handleResetFilters,
  };
};

const SearchHero = memo(({ query, onQueryChange, onSubmit }) => (
  <div className="mx-auto relative z-2 w-[min(100%_-_2rem,_39rem)] mt-4 text-center sm:mt-6 lg:w-auto lg:mt-[44px]">
    <h1 className="font-display font-semibold tracking-[-0.01em] leading-[1.2] text-canvas text-[clamp(1.5rem,_7vw,_1.625rem)] sm:text-[clamp(1.75rem,_4vw,_2.25rem)]">{SEARCH_TITLE}</h1>
    <form className="gap-2.5 flex items-stretch mt-5 max-sm:flex-col sm:gap-4 sm:items-start sm:mt-8 lg:justify-center" role="search" onSubmit={onSubmit}>
      <label className="transition-[box-shadow] duration-[180ms] ease-[ease] px-4.5 gap-2 rounded-[1.5rem] flex grow-0 shrink-0 basis-auto items-center h-12 bg-white sm:px-6 sm:grow sm:shrink sm:basis-[0%] sm:h-13 lg:grow-0 lg:shrink-0 lg:basis-auto lg:w-[461px] focus-within:shadow-[0_0_0_3px_#d4fb20]" htmlFor="search-course-query">
        <img className="max-sm:w-5 max-sm:h-5" src={ICON_SEARCH} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        <span className="sr-only">{SEARCH_FIELD_LABEL}</span>
        <input className="border-none w-full text-ink text-[1rem] leading-[1.6] outline-none md:text-[1.125rem] focus-visible:outline-offset-[3px]"
          id="search-course-query"
          type="search"
          placeholder={SEARCH_FIELD_LABEL}
          value={query}
          onChange={onQueryChange}
        />
      </label>
      <button className="whitespace-nowrap px-5 gap-2 rounded-[1.5rem] border-none inline-flex items-center justify-center bg-brand-lime text-ink text-[1rem] font-medium leading-[1.2] cursor-pointer max-sm:min-h-12 sm:py-[12px] sm:px-[24px] md:text-[1.125rem] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-white focus-visible:outline-offset-[2px]" type="submit">
        {SEARCH_SCOPE_LABEL}
        <img src={SEARCH_ICONS.chevronDown} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    </form>
  </div>
));

SearchHero.displayName = 'SearchHero';

const TopicButton = memo(({ topic, isSelected, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(topic);
  }, [onSelect, topic]);

  return (
    <button type="button" className="cursor-pointer rounded-[1.5rem] border-none bg-canvas px-3.5 py-2 font-body text-[0.875rem] leading-[1.2] font-medium whitespace-nowrap text-body aria-pressed:bg-brand-lime aria-pressed:text-ink sm:py-2.5 md:px-4 md:py-3 md:text-[1rem] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]" aria-pressed={isSelected} onClick={handleSelect}>
      {topic}
    </button>
  );
});

TopicButton.displayName = 'TopicButton';

const SearchTopicList = memo(({ topic, onSelect }) => (
  <ul className="gap-2 flex flex-wrap justify-start max-w-none mt-5 sm:gap-4 sm:mt-8 xl:justify-between">
    {SEARCH_TOPICS.map((courseTopic) => (
      <li key={courseTopic}>
        <TopicButton topic={courseTopic} isSelected={courseTopic === topic} onSelect={onSelect} />
      </li>
    ))}
  </ul>
));

SearchTopicList.displayName = 'SearchTopicList';

const pageNumbers = (pageCount) =>
  Array.from({ length: pageCount }, (_, index) => index + FIRST_PAGE);

const PageButton = memo(({ page, isCurrent, onPageChange }) => {
  const handleChange = useCallback(() => {
    onPageChange(page);
  }, [onPageChange, page]);

  return (
    <button
      type="button"
      className="cursor-pointer border-none font-display text-[1.125rem] leading-[28px] font-semibold tracking-[-0.01em] text-ink aria-[current=page]:text-line md:text-[1.25rem] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]"
      aria-label={`Page ${page}`}
      aria-current={isCurrent ? 'page' : undefined}
      onClick={handleChange}
    >
      {page}
    </button>
  );
});

PageButton.displayName = 'PageButton';

const PAGE_ARROW =
  'grid cursor-pointer items-center justify-items-center rounded-[1.5rem] border border-solid border-line bg-white px-[13px] py-[9px] disabled:cursor-default md:px-[15px] md:py-[11px] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]';

const SearchPagination = memo(({ page, pageCount, onPageChange }) => {
  const handlePrevious = useCallback(() => {
    onPageChange(page - FIRST_PAGE);
  }, [onPageChange, page]);

  const handleNext = useCallback(() => {
    onPageChange(page + FIRST_PAGE);
  }, [onPageChange, page]);

  return (
    <nav className="gap-3 flex justify-center items-center mt-10 xs:gap-4 md:gap-[24px] md:mt-18" aria-label="Pages">
      <button
        type="button"
        className={PAGE_ARROW}
        aria-label={PREVIOUS_PAGE_LABEL}
        onClick={handlePrevious}
        disabled={page === FIRST_PAGE}
      >
        <img src={SEARCH_ICONS.previous} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      </button>
      {pageNumbers(pageCount).map((pageNumber) => (
        <PageButton
          key={pageNumber}
          page={pageNumber}
          isCurrent={pageNumber === page}
          onPageChange={onPageChange}
        />
      ))}
      <button
        type="button"
        className={PAGE_ARROW}
        aria-label={NEXT_PAGE_LABEL}
        onClick={handleNext}
        disabled={page === pageCount}
      >
        <img src={SEARCH_ICONS.next} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    </nav>
  );
});

SearchPagination.displayName = 'SearchPagination';

const SearchContent = memo(() => {
  const catalog = useSearchCatalog(SEARCH_COURSES);

  return (
    <SitePage
      name="search"
      hero={
        <SearchHero
          query={catalog.query}
          onQueryChange={catalog.handleQueryChange}
          onSubmit={catalog.handleSearchSubmit}
        />
      }
    >
      <section id="courses" className="pt-8 pb-12 sm:pt-18 md:pb-18">
        <div className="mx-auto w-[min(100%_-_2rem,_75rem)] sm:w-[min(100%_-_2.5rem,_75rem)]">
          <CatalogToolbar
            variant="search"
            level={catalog.level}
            category={catalog.category}
            sort={catalog.sort}
            onReset={catalog.handleResetFilters}
            onLevelChange={catalog.handleLevelChange}
            onCategoryChange={catalog.handleCategoryChange}
            onSortChange={catalog.handleSortChange}
          />
          <SearchTopicList topic={catalog.topic} onSelect={catalog.handleTopicSelect} />
          <CourseGrid
            courses={catalog.visibleCourses}
            emptyMessage={EMPTY_RESULTS_MESSAGE}
            variant="search"
          />
          <SearchPagination
            page={catalog.page}
            pageCount={catalog.pageCount}
            onPageChange={catalog.handlePageChange}
          />
        </div>
      </section>
    </SitePage>
  );
});

SearchContent.displayName = 'SearchContent';

const Search = memo(() => {
  useSEO(SEO_SEARCH);

  return <SearchContent />;
});

Search.displayName = 'Search';

export default Search;
