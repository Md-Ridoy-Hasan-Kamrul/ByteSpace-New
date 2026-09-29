import React, { memo, useCallback } from 'react';
import {
  COURSE_TOPIC_ROWS,
  DISCOVERY_BODY,
  DISCOVERY_TITLE,
  EMPTY_COURSES_MESSAGE,
  MORE_TOPICS_LABEL,
} from './homeData';
import CourseCard from './CourseCard';

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

const CourseGrid = memo(({ courses }) => {
  if (courses.length === 0) {
    return <p className="home-empty">{EMPTY_COURSES_MESSAGE}</p>;
  }

  return (
    <div className="home-course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
});

CourseGrid.displayName = 'CourseGrid';

const CourseDiscovery = memo(({ catalog }) => (
  <section id="courses" className="home-section home-discovery">
    <div className="home-wrap">
      <div className="home-section-copy">
        <h2>{DISCOVERY_TITLE}</h2>
        <p>{DISCOVERY_BODY}</p>
      </div>
      <TopicList topic={catalog.topic} onTopicSelect={catalog.handleTopicSelect} />
      <CourseGrid courses={catalog.visibleCourses} />
    </div>
  </section>
));

CourseDiscovery.displayName = 'CourseDiscovery';

export default CourseDiscovery;
