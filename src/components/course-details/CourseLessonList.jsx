import React, { memo } from 'react';

const CourseLesson = memo(({ lesson }) => (
  <li className="course-lesson">
    <span className="course-lesson-number">{lesson.number}</span>
    <span className="course-lesson-title">{lesson.title}</span>
    <span className="course-lesson-duration">{lesson.duration}</span>
  </li>
));

CourseLesson.displayName = 'CourseLesson';

const CourseLessonList = memo(({ lessons, moreLabel }) => (
  <div className="course-lessons">
    <ol>
      {lessons.map((lesson) => (
        <CourseLesson key={lesson.id} lesson={lesson} />
      ))}
    </ol>
    <p>{moreLabel}</p>
  </div>
));

CourseLessonList.displayName = 'CourseLessonList';

export default CourseLessonList;
