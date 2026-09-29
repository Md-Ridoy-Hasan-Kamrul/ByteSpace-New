import React, { memo, useCallback } from 'react';
import { COURSE_TABS, courseTabLabel } from './courseDetailsCopy';

const CourseTab = memo(({ tabId, label, isSelected, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(tabId);
  }, [tabId, onSelect]);

  return (
    <button type="button" aria-pressed={isSelected} onClick={handleSelect}>
      {label}
    </button>
  );
});

CourseTab.displayName = 'CourseTab';

const CourseTabList = memo(({ tab, onSelect }) => (
  <div className="course-tabs" role="group" aria-label="Course sections">
    {COURSE_TABS.map((tabId) => (
      <CourseTab
        key={tabId}
        tabId={tabId}
        label={courseTabLabel(tabId, tab)}
        isSelected={tabId === tab}
        onSelect={onSelect}
      />
    ))}
  </div>
));

CourseTabList.displayName = 'CourseTabList';

export default CourseTabList;
