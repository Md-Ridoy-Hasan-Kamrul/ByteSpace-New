import { useCallback, useMemo, useState } from 'react';
import { FEATURED_TOPIC } from '../components/home/homeData';
import { filterCourses } from '../components/home/filterCourses';

const EMPTY_QUERY = '';

export const useHomeCatalog = (courses) => {
  const [topic, setTopic] = useState(FEATURED_TOPIC);

  const visibleCourses = useMemo(
    () => filterCourses(courses, { query: EMPTY_QUERY, topic }),
    [courses, topic],
  );

  const handleTopicSelect = useCallback((nextTopic) => {
    setTopic(nextTopic);
  }, []);

  return {
    topic,
    visibleCourses,
    handleTopicSelect,
  };
};
