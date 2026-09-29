import React, { memo, useCallback } from 'react';
import { SEARCH_TOPICS } from './searchCopy';

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

export default SearchTopicList;
