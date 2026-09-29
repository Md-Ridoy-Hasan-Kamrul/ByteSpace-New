import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetailsContent from '../components/course-details/CourseDetailsContent';
import {
  courseSeo,
  MISSING_COURSE_MESSAGE,
  selectCourseDetails,
  SEO_MISSING_COURSE,
} from '../components/course-details/courseDetailsCopy';
import { useSEO } from '../hooks/useSEO';

const CourseDetails = memo(() => {
  const { courseId } = useParams();
  const course = selectCourseDetails(courseId);

  useSEO(course ? courseSeo(course) : SEO_MISSING_COURSE);

  if (!course) {
    return <p>{MISSING_COURSE_MESSAGE}</p>;
  }

  return <CourseDetailsContent course={course} />;
});

CourseDetails.displayName = 'CourseDetails';

export default CourseDetails;
