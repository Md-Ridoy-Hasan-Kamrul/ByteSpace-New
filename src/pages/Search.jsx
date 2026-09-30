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
import '../styles/search.css';

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
  <div className="search-hero-copy">
    <h1>{SEARCH_TITLE}</h1>
    <form className="search-bar" role="search" onSubmit={onSubmit}>
      <label className="search-field" htmlFor="search-course-query">
        <img src={ICON_SEARCH} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        <span className="sr-only">{SEARCH_FIELD_LABEL}</span>
        <input
          id="search-course-query"
          type="search"
          placeholder={SEARCH_FIELD_LABEL}
          value={query}
          onChange={onQueryChange}
        />
      </label>
      <button type="submit">
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
    <button type="button" className="home-topic" aria-pressed={isSelected} onClick={handleSelect}>
      {topic}
    </button>
  );
});

TopicButton.displayName = 'TopicButton';

const SearchTopicList = memo(({ topic, onSelect }) => (
  <ul className="home-topics search-topics">
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
      className="search-page-number"
      aria-label={`Page ${page}`}
      aria-current={isCurrent ? 'page' : undefined}
      onClick={handleChange}
    >
      {page}
    </button>
  );
});

PageButton.displayName = 'PageButton';

const SearchPagination = memo(({ page, pageCount, onPageChange }) => {
  const handlePrevious = useCallback(() => {
    onPageChange(page - FIRST_PAGE);
  }, [onPageChange, page]);

  const handleNext = useCallback(() => {
    onPageChange(page + FIRST_PAGE);
  }, [onPageChange, page]);

  return (
    <nav className="search-pagination" aria-label="Pages">
      <button
        type="button"
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
      <section id="courses" className="home-section">
        <div className="home-wrap">
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
            className="search-results"
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
