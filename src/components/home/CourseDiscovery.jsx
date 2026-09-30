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
    <button type="button" className="cursor-pointer rounded-[1.5rem] border-none bg-canvas px-3.5 py-2.5 font-body text-[0.875rem] leading-[1.2] font-medium whitespace-nowrap text-body aria-pressed:bg-brand-lime aria-pressed:text-ink md:px-4 md:py-3 md:text-[1rem] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]" aria-pressed={isSelected} onClick={handleSelect}>
      {topic}
    </button>
  );
});

TopicButton.displayName = 'TopicButton';

const TopicList = memo(({ topic, onTopicSelect }) => (
  <div className="mx-auto flex flex-wrap justify-center gap-y-[1.3125rem] gap-x-4 max-w-none mt-10.5 flex-row max-xl:items-center xl:gap-x-[1.3125rem] xl:flex-col">
    {COURSE_TOPIC_ROWS.map((row, rowIndex) => (
      <ul key={row[0]} className="contents flex-wrap justify-center items-center gap-y-[1.3125rem] gap-x-4 xl:flex">
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
            <a className="whitespace-nowrap py-2.5 px-3.5 rounded-[999px] border-none text-brand-blue font-medium text-[0.875rem] leading-[1.2] cursor-pointer block no-underline md:p-0 md:text-[1rem] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]" href="#categories">
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
  <section id="courses" className="pt-18 pb-2 [-webkit-font-smoothing:antialiased]">
    <div className="mx-auto w-[min(100%_-_2rem,_75rem)] sm:w-[min(100%_-_2.5rem,_75rem)]">
      <div className="mx-auto max-w-[57.3125rem] text-center">
        <h2 className="mx-auto font-display font-semibold tracking-[-0.01em] leading-[1.25] text-ink-deep text-[clamp(1.5rem,_6.5vw,_1.75rem)] max-w-147 md:leading-[1.2] md:text-[clamp(1.75rem,_4vw,_2.75rem)]">{DISCOVERY_TITLE}</h2>
        <p className="mt-4 text-muted text-[1rem] leading-[1.6] font-normal md:text-[1.125rem]">{DISCOVERY_BODY}</p>
      </div>
      <TopicList topic={catalog.topic} onTopicSelect={catalog.handleTopicSelect} />
      <CourseGrid courses={catalog.visibleCourses} emptyMessage={EMPTY_COURSES_MESSAGE} />
    </div>
  </section>
));

CourseDiscovery.displayName = 'CourseDiscovery';
