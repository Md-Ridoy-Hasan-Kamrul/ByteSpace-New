import React, { memo } from 'react';
import { useCourseDetails } from '../../hooks/useCourseDetails';
import HomeFooter from '../home/HomeFooter';
import HomeHeader from '../home/HomeHeader';
import { ABOUT_TAB, COURSE_DETAILS, LESSONS_TAB, REVIEWS_TAB } from './courseDetailsCopy';
import CourseAbout from './CourseAbout';
import CourseHero, { CoursePreview } from './CourseHero';
import CourseLessons from './CourseLessons';
import CoursePurchaseCard from './CoursePurchaseCard';
import CourseReviews from './CourseReviews';
import CourseTabList from './CourseTabList';
import '../home/home.css';
import './course-details.css';

const COURSE_PANELS = {
  [ABOUT_TAB]: (course) => <CourseAbout course={course} />,
  [LESSONS_TAB]: () => <CourseLessons />,
  [REVIEWS_TAB]: () => <CourseReviews />,
};

const renderCoursePanel = (tab, course) => COURSE_PANELS[tab](course);

const CourseDetailsContent = memo(({ course = COURSE_DETAILS }) => {
  const details = useCourseDetails();

  return (
    <div className="home-page course-page">
      <div className="course-hero">
        <HomeHeader />
        <div className="course-shell">
          <CourseHero course={course} onShare={details.handleShare} />
          <CoursePreview poster={course.poster} onPlay={details.handlePlayPreview} />
        </div>
      </div>
      <section className="course-body" data-tab={details.tab}>
        <div className="course-shell course-layout">
          <CoursePurchaseCard course={course} onEnroll={details.handleEnroll} />
          <div className="course-main">
            <CourseTabList tab={details.tab} onSelect={details.handleTabSelect} />
            {renderCoursePanel(details.tab, course)}
          </div>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
});

CourseDetailsContent.displayName = 'CourseDetailsContent';

export default CourseDetailsContent;
