import { useCallback, useMemo, useState } from 'react';
import { ALL_CATEGORIES, ALL_LEVELS, SORT_RELEVANT } from '../components/search/searchCopy';
import { selectCreatorCourses } from '../components/creator/selectCreatorCourses';

export const useCreatorCatalog = (courses) => {
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
