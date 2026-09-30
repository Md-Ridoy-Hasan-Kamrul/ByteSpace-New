import { memo, useCallback, useState } from 'react';
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
  <p className="py-2 px-6 gap-2 rounded-[1.5rem] border-none inline-flex items-center text-[1rem] font-medium leading-[1.2] bg-white text-ink">
    <img src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
    <span>{label}</span>
  </p>
));

CourseStat.displayName = 'CourseStat';

const CoursePreview = memo(({ poster, onPlay }) => (
  <div className="overflow-hidden rounded-[1.5rem] relative mt-10 aspect-[720/479] bg-[#443131] lg:mt-[59px] lg:w-[min(calc(720_*_1px),_100%_-_25.75rem_-_3.75rem)] lg:mr-0 lg:mb-0 lg:ml-[5px]">
    <img className="w-full h-full object-contain" src={poster} alt="" />
    <button
      type="button"
      className="p-[calc(1rem_-_1px)] rounded-[1.5rem] border border-solid border-copy absolute top-1/2 left-1/2 -translate-1/2 md:top-[calc(204_/_479_*_100%)] md:left-[calc(324_/_720_*_100%)] md:translate-none z-2 grid items-center justify-items-center bg-[rgb(61_61_61_/_24%)] [backdrop-filter:blur(20px)] cursor-pointer focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]"
      aria-label={PLAY_LABEL}
      onClick={onPlay}
    >
      <img src={PLAY_ICON} alt="" width={PLAY_ICON_SIZE} height={PLAY_ICON_SIZE} />
    </button>
  </div>
));

CoursePreview.displayName = 'CoursePreview';

export { CoursePreview };

const CourseHero = memo(({ course, onShare }) => (
  <div className="gap-6 flex flex-wrap items-start justify-between lg:flex-nowrap lg:mt-[52px] lg:mr-[calc(-1_*_min(85px,_(100vw_-_100%)_/_2_-_35px))] lg:mb-0 lg:ml-[2px]">
    <div>
      <h1 className="font-display font-semibold tracking-[-0.01em] leading-[1.2] text-canvas text-[clamp(1.625rem,_7.5vw,_1.875rem)] md:text-[clamp(1.75rem,_4vw,_2.25rem)] lg:whitespace-nowrap">
        {course.title}
      </h1>
      <p className="mt-2 text-canvas font-display font-semibold leading-[1.2] text-[1.125rem] tracking-[-0.2px] md:text-[1.25rem] lg:whitespace-nowrap">
        {course.subtitle}
      </p>
      <p className="mt-6 text-[#f1f4fe] text-[1rem] font-medium leading-[1.2] md:text-[1.125rem]">
        {CREATOR_PREFIX} <span className="text-brand-lime">{course.creator}</span>
      </p>
      <div className="gap-4 flex flex-wrap mt-6">
        <CourseStat icon={course.levelIcon} label={course.level} />
        <CourseStat icon={course.ratingIcon} label={course.ratingLabel} />
        <CourseStat icon={course.studentsIcon} label={course.studentsLabel} />
      </div>
    </div>
    <button
      type="button"
      className="py-2 px-6 gap-2 rounded-[1.5rem] border-none inline-flex items-center text-[1rem] font-medium leading-[24px] bg-brand-lime text-ink cursor-pointer grow-0 shrink-0 basis-auto focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]"
      onClick={onShare}
    >
      <img src={SHARE_ICON} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      {SHARE_LABEL}
    </button>
  </div>
));

CourseHero.displayName = 'CourseHero';

const CourseLesson = memo(({ lesson }) => (
  <li className="grid grid-cols-[1.5rem_minmax(0,_12.375rem)_auto] gap-x-2 [align-items:start] text-ink text-[1rem] font-medium leading-[19px]">
    <span>{lesson.number}</span>
    <span>{lesson.title}</span>
    <span className="whitespace-nowrap ml-[33px] text-brand-blue font-normal leading-[1.625]">
      {lesson.duration}
    </span>
  </li>
));

CourseLesson.displayName = 'CourseLesson';

const CourseLessonList = memo(({ lessons, moreLabel }) => (
  <div>
    <ol className="gap-3 flex flex-col">
      {lessons.map((lesson) => (
        <CourseLesson key={lesson.id} lesson={lesson} />
      ))}
    </ol>
    <p className="mt-3 text-body text-[1rem] font-normal leading-[1.625]">{moreLabel}</p>
  </div>
));

CourseLessonList.displayName = 'CourseLessonList';

const CourseIncludes = memo(({ items }) => (
  <ul className="gap-3 text-body text-[1rem] font-normal leading-[1.625] flex flex-col">
    {items.map((item) => (
      <li className="gap-2 flex items-start" key={item.id}>
        <img src={item.icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        <span>{item.label}</span>
      </li>
    ))}
  </ul>
));

CourseIncludes.displayName = 'CourseIncludes';

const CourseCreator = memo(({ course }) => (
  <div className="gap-6 text-body text-[1rem] font-normal leading-[1.625] flex flex-col pt-6 [border-top-style:solid] border-t border-t-[#d1d1d1]">
    <div className="gap-3 flex items-start">
      <img
        className="rounded-[50%]"
        src={course.studioAvatar}
        alt=""
        width={CREATOR_AVATAR_SIZE}
        height={CREATOR_AVATAR_SIZE}
      />
      <p className="flex flex-col">
        <strong className="text-ink text-[1rem] font-medium leading-[1.2] md:text-[1.125rem]">
          {course.studioName}
        </strong>
        <span>{course.studioRole}</span>
      </p>
    </div>
    <p>{course.studioPitch}</p>
    <a
      className="py-[calc(0.5rem_-_1px)] px-[calc(1rem_-_1px)] gap-2 rounded-[1.5rem] border border-solid border-line inline-flex items-center self-start text-body text-[1rem] font-medium leading-[1.2] no-underline focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]"
      href={PROFILE_HREF}
    >
      {PROFILE_LABEL}
    </a>
  </div>
));

CourseCreator.displayName = 'CourseCreator';

const CoursePurchaseCard = memo(({ course, onEnroll }) => (
  <aside className="flex flex-col gap-6 rounded-[1.5rem] border border-solid border-line bg-white p-[calc(2.5rem_-_1px)] text-ink lg:relative lg:z-2 lg:col-start-2 lg:row-start-1 lg:mt-[calc(416px_-_957px_-_62.5px)] lg:group-data-[tab=Lesson]/body:mt-[calc(416px_-_957px_-_79px)] lg:group-data-[tab=Reviews]/body:mt-[calc(416px_-_957px_-_79px)]">
    <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem]">
      {course.lessonSummary}
    </h2>
    <CourseLessonList lessons={course.lessons} moreLabel={course.moreLessonsLabel} />
    <p className="text-body text-[1rem] font-normal leading-[1.625]">{course.enrollPitch}</p>
    <p className="flex items-end h-[38px]">
      <strong className="text-brand-blue font-display text-[2rem] font-semibold leading-[38px] tracking-[-0.01em] md:text-[2.25rem]">
        {course.price}
      </strong>
      <span className="text-body leading-[1.625]">{PRICE_SUFFIX}</span>
    </p>
    <button
      type="button"
      className="py-3 px-6 gap-2 rounded-[1.5rem] border-none inline-flex items-center bg-brand-lime text-ink cursor-pointer font-medium w-full justify-center text-[1rem] leading-[1.2] md:text-[1.125rem] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]"
      onClick={onEnroll}
    >
      {ENROLL_LABEL}
    </button>
    <h2 className="font-display font-semibold tracking-[-0.2px] leading-[1.2] text-ink text-[1.25rem]">
      {INCLUDES_HEADING}
    </h2>
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
    <button
      type="button"
      className="inline-flex cursor-pointer items-center gap-2 rounded-[1.5rem] border-none bg-canvas px-4 py-3 text-[1rem] leading-[1.2] font-medium text-body aria-pressed:bg-brand-lime aria-pressed:text-ink focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]"
      aria-pressed={isSelected}
      onClick={handleSelect}
    >
      {label}
    </button>
  );
});

CourseTab.displayName = 'CourseTab';

const CourseTabList = memo(({ tab, onSelect }) => (
  <div className="gap-4 flex flex-wrap lg:max-xl:min-w-0" role="group" aria-label="Course sections">
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
        <div className="mx-auto w-[min(100%_-_2rem,_75rem)]">
          <CourseHero course={course} onShare={details.handleShare} />
          <CoursePreview poster={course.poster} onPlay={details.handlePlayPreview} />
        </div>
      }
    >
      <section
        className="group/body bg-white py-10 lg:pt-[62.5px] lg:pb-[64.5px] lg:data-[tab=Lesson]:pt-[79px] lg:data-[tab=Lesson]:pb-[83px] lg:data-[tab=Reviews]:pt-[79px] lg:data-[tab=Reviews]:pb-[91px]"
        data-tab={details.tab}
      >
        <div className="mx-auto gap-10 w-[min(100%_-_2rem,_75rem)] grid grid-cols-[minmax(0px,_1fr)] [align-items:start] lg:grid-cols-[minmax(0,_45.3125rem)_25.75rem] lg:justify-between">
          <CoursePurchaseCard course={course} onEnroll={details.handleEnroll} />
          <div className="gap-10 grid min-w-0 lg:[grid-column-start:1] lg:[grid-column-end:auto] lg:[grid-row-start:1] lg:[grid-row-end:auto] lg:max-xl:grid-cols-[minmax(0px,_1fr)]">
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
