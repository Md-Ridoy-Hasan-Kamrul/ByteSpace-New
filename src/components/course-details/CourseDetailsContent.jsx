import React, { memo } from 'react';
import { useCourseDetails } from '../../hooks/useCourseDetails';
import HomeFooter from '../home/HomeFooter';
import HomeHeader from '../home/HomeHeader';
import {
  ABOUT_TAB,
  COURSE_DETAILS,
  LESSONS_TAB,
  REVIEWS_TAB,
} from './courseDetailsCopy';
import CourseAbout from './CourseAbout';
import CourseHero, { CoursePreview } from './CourseHero';
import CourseLessons from './CourseLessons';
import CoursePurchaseCard from './CoursePurchaseCard';
import CourseReviews from './CourseReviews';
import CourseTabList from './CourseTabList';
import '../home/home.css';
import './course-details.css';

const COURSE_PANELS = {
  [ABOUT_TAB]: CourseAbout,
  [LESSONS_TAB]: CourseLessons,
  [REVIEWS_TAB]: CourseReviews,
};

const CourseDetailsContent = memo(({ course = COURSE_DETAILS }) => {
  const details = useCourseDetails();
  const Panel = COURSE_PANELS[details.tab];

  return (
    <div className="home-page course-page">
      <div className="home-hero course-hero">
        <HomeHeader />
        <div className="course-shell">
          <CourseHero course={course} onShare={details.handleShare} />
          <div className="course-stage">
            <CoursePreview poster={course.poster} onPlay={details.handlePlayPreview} />
            <CoursePurchaseCard course={course} onEnroll={details.handleEnroll} />
          </div>
        </div>
      </div>
      <section className="course-body">
        <div className="course-shell course-main">
          <CourseTabList tab={details.tab} onSelect={details.handleTabSelect} />
          <Panel course={course} />
        </div>
      </section>
      <HomeFooter />
    </div>
  );
});

CourseDetailsContent.displayName = 'CourseDetailsContent';

export default CourseDetailsContent;
