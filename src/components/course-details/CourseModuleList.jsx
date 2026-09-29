import React, { memo } from 'react';
import { COURSE_MODULES } from './courseDetailsCopy';
import CourseModule from './CourseModule';

const CourseModuleList = memo(() => (
  <div className="course-modules">
    {COURSE_MODULES.map((module) => (
      <CourseModule key={module.id} module={module} />
    ))}
  </div>
));

CourseModuleList.displayName = 'CourseModuleList';

export default CourseModuleList;
