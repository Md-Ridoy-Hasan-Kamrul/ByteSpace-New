import { useCallback, useMemo, useState } from 'react';
import { FEATURED_TOPIC } from '../components/home/homeData';
import { selectSearchPage } from '../components/search/filterSearchResults';
import {
  ALL_CATEGORIES,
  ALL_LEVELS,
  FIRST_PAGE,
  SORT_RELEVANT,
} from '../components/search/searchCopy';

const INITIAL_FILTERS = {
  query: '',
  activeQuery: '',
  topic: FEATURED_TOPIC,
  level: ALL_LEVELS,
  category: ALL_CATEGORIES,
  sort: SORT_RELEVANT,
  page: FIRST_PAGE,
};

export const useSearchCatalog = (courses) => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

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
