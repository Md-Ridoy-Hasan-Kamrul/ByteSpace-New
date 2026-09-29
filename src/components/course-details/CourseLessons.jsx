import React, { memo } from 'react';
import { LESSON_COPY } from './courseDetailsCopy';
import CourseModuleList from './CourseModuleList';
import CourseProgress from './CourseProgress';

const CourseLessons = memo(() => (
  <div className="course-panel course-lessons-panel">
    <h2>{LESSON_COPY.exploreHeading}</h2>
    <p>{LESSON_COPY.exploreBody}</p>
    <h2>{LESSON_COPY.listHeading}</h2>
    <CourseModuleList />
    <h2>{LESSON_COPY.contentHeading}</h2>
    <p>{LESSON_COPY.contentBody}</p>
    <h2>{LESSON_COPY.trackingHeading}</h2>
    <p>{LESSON_COPY.trackingBody}</p>
    <CourseProgress />
  </div>
));

CourseLessons.displayName = 'CourseLessons';

export default CourseLessons;
