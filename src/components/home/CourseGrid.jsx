import React, { memo } from 'react';
import CourseCard from './CourseCard';

const joinClassNames = (...names) => names.filter(Boolean).join(' ');

// Course cards in the shared grid, or a message when no course matches.
// Used by the home discovery section, the search results and the creator catalog.
const CourseGrid = memo(({ courses, emptyMessage, className, emptyClassName = 'home-empty' }) => {
  if (courses.length === 0) {
    return <p className={emptyClassName}>{emptyMessage}</p>;
  }

  return (
    <div className={joinClassNames('home-course-grid', className)}>
      {courses.map((course) => (
        <CourseCard key={course.listingKey ?? course.id} course={course} />
      ))}
    </div>
  );
});

CourseGrid.displayName = 'CourseGrid';

export default CourseGrid;
