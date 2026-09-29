import React, { memo } from 'react';
import CourseCard from '../home/CourseCard';
import { EMPTY_RESULTS_MESSAGE } from './searchCopy';

const SearchCourseGrid = memo(({ courses }) => {
  if (courses.length === 0) {
    return <p className="home-empty">{EMPTY_RESULTS_MESSAGE}</p>;
  }

  return (
    <div className="home-course-grid search-results">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
});

SearchCourseGrid.displayName = 'SearchCourseGrid';

export default SearchCourseGrid;
