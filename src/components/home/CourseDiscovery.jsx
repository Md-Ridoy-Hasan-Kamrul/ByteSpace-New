import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  COURSE_TOPIC_ROWS,
  DISCOVERY_BODY,
  DISCOVERY_TITLE,
  EMPTY_COURSES_MESSAGE,
  FEATURED_TOPIC,
  MORE_TOPICS_LABEL,
  filterCourses,
} from '../../data/home';
import { CourseGrid } from '../CourseCard';

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

const TopicButton = memo(({ topic, isSelected, onTopicSelect }) => {
  const handleSelect = useCallback(() => {
    onTopicSelect(topic);
  }, [onTopicSelect, topic]);

  return (
    <button type="button" className="home-topic" aria-pressed={isSelected} onClick={handleSelect}>
      {topic}
    </button>
  );
});

TopicButton.displayName = 'TopicButton';

const TopicList = memo(({ topic, onTopicSelect }) => (
  <div className="home-topics">
    {COURSE_TOPIC_ROWS.map((row, rowIndex) => (
      <ul key={row[0]} className="home-topic-row">
        {row.map((courseTopic) => (
          <li key={courseTopic}>
            <TopicButton
              topic={courseTopic}
              isSelected={courseTopic === topic}
              onTopicSelect={onTopicSelect}
            />
          </li>
        ))}
        {rowIndex === COURSE_TOPIC_ROWS.length - 1 && (
          <li>
            <a className="home-topic-more" href="#categories">
              {MORE_TOPICS_LABEL}
            </a>
          </li>
        )}
      </ul>
    ))}
  </div>
));

TopicList.displayName = 'TopicList';

export const CourseDiscovery = memo(({ catalog }) => (
  <section id="courses" className="home-section home-discovery">
    <div className="home-wrap">
      <div className="home-section-copy">
        <h2>{DISCOVERY_TITLE}</h2>
        <p>{DISCOVERY_BODY}</p>
      </div>
      <TopicList topic={catalog.topic} onTopicSelect={catalog.handleTopicSelect} />
      <CourseGrid courses={catalog.visibleCourses} emptyMessage={EMPTY_COURSES_MESSAGE} />
    </div>
  </section>
));

CourseDiscovery.displayName = 'CourseDiscovery';
