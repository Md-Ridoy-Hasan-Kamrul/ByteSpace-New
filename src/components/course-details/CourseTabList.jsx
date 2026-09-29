import React, { memo, useCallback } from 'react';
import { COURSE_TABS } from './courseDetailsCopy';

const CourseTab = memo(({ label, isSelected, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(label);
  }, [label, onSelect]);

  return (
    <button type="button" aria-pressed={isSelected} onClick={handleSelect}>
      {label}
    </button>
  );
});

CourseTab.displayName = 'CourseTab';

const CourseTabList = memo(({ tab, onSelect }) => (
  <div className="course-tabs" role="group" aria-label="Course sections">
    {COURSE_TABS.map((label) => (
      <CourseTab key={label} label={label} isSelected={label === tab} onSelect={onSelect} />
    ))}
  </div>
));

CourseTabList.displayName = 'CourseTabList';

export default CourseTabList;
