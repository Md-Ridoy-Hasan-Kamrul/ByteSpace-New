import { useCallback, useMemo, useState } from 'react';
import { FEATURED_TOPIC } from '../components/home/homeData';
import { filterCourses } from '../components/home/filterCourses';

export const useHomeCatalog = (courses) => {
  const [query, setQuery] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [topic, setTopic] = useState(FEATURED_TOPIC);

  const visibleCourses = useMemo(
    () => filterCourses(courses, { query: activeQuery, topic }),
    [activeQuery, courses, topic],
  );

  const handleQueryChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleSearchSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setActiveQuery(query);
      setTopic(FEATURED_TOPIC);
    },
    [query],
  );

  const handleTopicSelect = useCallback((nextTopic) => {
    setTopic(nextTopic);
  }, []);

  return {
    query,
    topic,
    visibleCourses,
    handleQueryChange,
    handleSearchSubmit,
    handleTopicSelect,
  };
};
