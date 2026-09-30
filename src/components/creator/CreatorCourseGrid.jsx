import React, { memo } from 'react';
import CourseCard from '../home/CourseCard';
import { EMPTY_COURSES_MESSAGE } from './creatorCopy';

const CreatorCourseGrid = memo(({ courses }) => {
  if (courses.length === 0) {
    return <p className="creator-empty">{EMPTY_COURSES_MESSAGE}</p>;
  }

  return (
    <div className="home-course-grid home-figma-card">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
});

CreatorCourseGrid.displayName = 'CreatorCourseGrid';

export default CreatorCourseGrid;
