import React, { memo, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CourseAbout, CourseLessons, CourseReviews } from '../components/course/CoursePanels';
import { SitePage } from '../components/SitePage';
import {
  ABOUT_TAB,
  COURSE_DETAILS,
  COURSE_TABS,
  CREATOR_AVATAR_SIZE,
  CREATOR_PREFIX,
  ENROLL_LABEL,
  ENROLL_SUCCESS_MESSAGE,
  ICON_SIZE,
  INCLUDES_HEADING,
  LESSONS_TAB,
  MISSING_COURSE_MESSAGE,
  PLAY_ICON,
  PLAY_ICON_SIZE,
  PLAY_LABEL,
  PRICE_SUFFIX,
  PROFILE_HREF,
  PROFILE_LABEL,
  REVIEWS_TAB,
  SEO_MISSING_COURSE,
  SHARE_ICON,
  SHARE_LABEL,
  SHARE_SUCCESS_MESSAGE,
  courseSeo,
  courseTabLabel,
  selectCourseDetails,
} from '../data/course';
import { useSEO } from '../hooks/useSEO';
import '../styles/course-details.css';

const copyCourseLink = (url) => navigator.clipboard.writeText(url);

const notifyShareSuccess = () => {
  toast.success(SHARE_SUCCESS_MESSAGE);
};

const confirmEnrollment = () => {
  toast.success(ENROLL_SUCCESS_MESSAGE);
};

const useCourseDetails = () => {
  const [tab, setTab] = useState(ABOUT_TAB);

  const handleTabSelect = useCallback((nextTab) => {
    setTab(nextTab);
  }, []);

  const handlePlayPreview = useCallback(() => {
    setTab(LESSONS_TAB);
  }, []);

  const handleEnroll = useCallback(() => {
    confirmEnrollment();
  }, []);

  const handleShare = useCallback(() => {
    copyCourseLink(window.location.href).then(notifyShareSuccess);
  }, []);

  return {
    tab,
    handleTabSelect,
    handlePlayPreview,
    handleEnroll,
    handleShare,
  };
};

const CourseStat = memo(({ icon, label }) => (
  <p className="course-stat">
    <img src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
    <span>{label}</span>
  </p>
));

CourseStat.displayName = 'CourseStat';

const CoursePreview = memo(({ poster, onPlay }) => (
  <div className="course-preview">
    <img className="course-poster" src={poster} alt="" />
    <button type="button" className="course-play" aria-label={PLAY_LABEL} onClick={onPlay}>
      <img src={PLAY_ICON} alt="" width={PLAY_ICON_SIZE} height={PLAY_ICON_SIZE} />
    </button>
  </div>
));

CoursePreview.displayName = 'CoursePreview';

export { CoursePreview };

const CourseHero = memo(({ course, onShare }) => (
  <div className="course-intro-top">
    <div>
      <h1>{course.title}</h1>
      <p className="course-subtitle">{course.subtitle}</p>
      <p className="course-byline">
        {CREATOR_PREFIX} <span>{course.creator}</span>
      </p>
      <div className="course-stats">
        <CourseStat icon={course.levelIcon} label={course.level} />
        <CourseStat icon={course.ratingIcon} label={course.ratingLabel} />
        <CourseStat icon={course.studentsIcon} label={course.studentsLabel} />
      </div>
    </div>
    <button type="button" className="course-share" onClick={onShare}>
      <img src={SHARE_ICON} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      {SHARE_LABEL}
    </button>
  </div>
));

CourseHero.displayName = 'CourseHero';

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

const CourseIncludes = memo(({ items }) => (
  <ul className="course-includes">
    {items.map((item) => (
      <li key={item.id}>
        <img src={item.icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        <span>{item.label}</span>
      </li>
    ))}
  </ul>
));

CourseIncludes.displayName = 'CourseIncludes';

const CourseCreator = memo(({ course }) => (
  <div className="course-creator">
    <div className="course-creator-id">
      <img
        src={course.studioAvatar}
        alt=""
        width={CREATOR_AVATAR_SIZE}
        height={CREATOR_AVATAR_SIZE}
      />
      <p>
        <strong>{course.studioName}</strong>
        <span>{course.studioRole}</span>
      </p>
    </div>
    <p>{course.studioPitch}</p>
    <a className="course-profile" href={PROFILE_HREF}>
      {PROFILE_LABEL}
    </a>
  </div>
));

CourseCreator.displayName = 'CourseCreator';

const CoursePurchaseCard = memo(({ course, onEnroll }) => (
  <aside className="course-card">
    <h2>{course.lessonSummary}</h2>
    <CourseLessonList lessons={course.lessons} moreLabel={course.moreLessonsLabel} />
    <p className="course-pitch">{course.enrollPitch}</p>
    <p className="course-price">
      <strong>{course.price}</strong>
      <span>{PRICE_SUFFIX}</span>
    </p>
    <button type="button" className="course-enroll" onClick={onEnroll}>
      {ENROLL_LABEL}
    </button>
    <h2>{INCLUDES_HEADING}</h2>
    <CourseIncludes items={course.includes} />
    <CourseCreator course={course} />
  </aside>
));

CoursePurchaseCard.displayName = 'CoursePurchaseCard';

const CourseTab = memo(({ tabId, label, isSelected, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(tabId);
  }, [tabId, onSelect]);

  return (
    <button type="button" aria-pressed={isSelected} onClick={handleSelect}>
      {label}
    </button>
  );
});

CourseTab.displayName = 'CourseTab';

const CourseTabList = memo(({ tab, onSelect }) => (
  <div className="course-tabs" role="group" aria-label="Course sections">
    {COURSE_TABS.map((tabId) => (
      <CourseTab
        key={tabId}
        tabId={tabId}
        label={courseTabLabel(tabId, tab)}
        isSelected={tabId === tab}
        onSelect={onSelect}
      />
    ))}
  </div>
));

CourseTabList.displayName = 'CourseTabList';

const COURSE_PANELS = {
  [ABOUT_TAB]: (course) => <CourseAbout course={course} />,
  [LESSONS_TAB]: () => <CourseLessons />,
  [REVIEWS_TAB]: () => <CourseReviews />,
};

const renderCoursePanel = (tab, course) => COURSE_PANELS[tab](course);

const CourseDetailsContent = memo(({ course = COURSE_DETAILS }) => {
  const details = useCourseDetails();

  return (
    <SitePage
      name="course"
      hero={
        <div className="course-shell">
          <CourseHero course={course} onShare={details.handleShare} />
          <CoursePreview poster={course.poster} onPlay={details.handlePlayPreview} />
        </div>
      }
    >
      <section className="course-body" data-tab={details.tab}>
        <div className="course-shell course-layout">
          <CoursePurchaseCard course={course} onEnroll={details.handleEnroll} />
          <div className="course-main">
            <CourseTabList tab={details.tab} onSelect={details.handleTabSelect} />
            {renderCoursePanel(details.tab, course)}
          </div>
        </div>
      </section>
    </SitePage>
  );
});

CourseDetailsContent.displayName = 'CourseDetailsContent';

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
