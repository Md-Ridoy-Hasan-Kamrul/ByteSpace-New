import React, { memo } from 'react';
import CourseLessonList from './CourseLessonList';

const CourseLessons = memo(({ course }) => (
  <section className="course-panel" aria-label={course.lessonSummary}>
    <h2>{course.lessonSummary}</h2>
    <CourseLessonList lessons={course.lessons} moreLabel={course.moreLessonsLabel} />
  </section>
));

CourseLessons.displayName = 'CourseLessons';

export default CourseLessons;
