import { ROUTES } from '../../config';
import { HOME_COURSES } from '../home/homeData';
import {
  CHECK_ICON,
  CREATOR_AVATAR,
  INCLUDE_ICONS,
  LEVEL_ICON,
  PREVIEW_POSTER,
  RATING_ICON,
  SNEAK_PEEK_IMAGES,
  STUDENTS_ICON,
} from './courseDetailsAssets';

export const ABOUT_TAB = 'About';
export const LESSONS_TAB = 'Lessons';
export const REVIEWS_TAB = 'Reviews';
export const COURSE_TABS = [ABOUT_TAB, LESSONS_TAB, REVIEWS_TAB];

export const SHARE_LABEL = 'Share';
export const PLAY_LABEL = 'Play preview';
export const ENROLL_LABEL = 'Enroll Now';
export const PROFILE_LABEL = 'See Full Profile';
export const DESCRIPTION_HEADING = 'Description';
export const SNEAK_PEEK_HEADING = 'Sneak Peak';
export const KEY_POINTS_HEADING = 'Key Points';
export const INCLUDES_HEADING = 'This course include';
export const CREATOR_PREFIX = 'by';
export const PRICE_SUFFIX = '/lifetime';
export const ENROLL_PITCH = 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!';
export const ENROLL_SUCCESS_MESSAGE = 'You are enrolled in this course.';
export const SHARE_SUCCESS_MESSAGE = 'Course link copied.';
export const PROFILE_HREF = `${ROUTES.HOME}#creators`;

const DESCRIPTION = [
  'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

const KEY_POINTS = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
];

const LESSONS = [
  { id: 'lesson-01', number: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
  { id: 'lesson-02', number: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
  { id: 'lesson-03', number: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
];

const INCLUDES = [
  { id: 'resources', label: 'Learning Resources', icon: INCLUDE_ICONS.resources },
  { id: 'videos', label: 'Quality Lesson Videos', icon: INCLUDE_ICONS.videos },
  { id: 'certificate', label: 'Certificate of Completion', icon: INCLUDE_ICONS.certificate },
  { id: 'consultation', label: 'Private Consultation', icon: INCLUDE_ICONS.consultation },
];

const FIRST_PEEK_NUMBER = 1;

const SNEAK_PEEKS = SNEAK_PEEK_IMAGES.map((src, index) => {
  const peekNumber = index + FIRST_PEEK_NUMBER;
  return {
    id: `sneak-peek-${peekNumber}`,
    src,
    alt: `Sneak peek ${peekNumber}`,
  };
});

export const COURSE_DETAILS = {
  id: 'digital-asset',
  title: 'Build Digital Asset: A Comprehensive Guide',
  subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
  creator: 'purepearl studio',
  level: 'Intermediate',
  levelIcon: LEVEL_ICON,
  ratingLabel: '4.8 (172 reviews)',
  ratingIcon: RATING_ICON,
  studentsLabel: '199 Students',
  studentsIcon: STUDENTS_ICON,
  reviewSummary: '4.8 from 172 reviews',
  poster: PREVIEW_POSTER,
  lessonSummary: '112 Lessons (24 hours)',
  lessons: LESSONS,
  moreLessonsLabel: '99 more videos',
  enrollPitch: ENROLL_PITCH,
  price: '$25',
  includes: INCLUDES,
  description: DESCRIPTION,
  sneakPeeks: SNEAK_PEEKS,
  keyPoints: KEY_POINTS,
  checkIcon: CHECK_ICON,
  studioName: 'PurePearl Studio',
  studioRole: 'Professional Creator',
  studioAvatar: CREATOR_AVATAR,
  studioPitch: ENROLL_PITCH,
};

export const MISSING_COURSE_MESSAGE = 'Course not found.';

export const selectCourseDetails = (courseId) => {
  const course = HOME_COURSES.find((item) => item.id === courseId);
  if (!course) {
    return null;
  }
  if (course.id === COURSE_DETAILS.id) {
    return COURSE_DETAILS;
  }

  return {
    ...COURSE_DETAILS,
    id: course.id,
    title: course.title,
    poster: course.image,
    creator: course.creator,
    level: course.level,
    price: course.priceLabel,
  };
};

export const courseSeo = (course) => ({
  title: `${course.title} | ByteSpace`,
  description: course.subtitle,
  keywords: ['ByteSpace', 'course', course.title],
});

export const SEO_MISSING_COURSE = {
  title: 'Course not found | ByteSpace',
  description: MISSING_COURSE_MESSAGE,
  keywords: ['ByteSpace', 'course'],
};

export const SEO_COURSE_DETAILS = {
  title: `${COURSE_DETAILS.title} | ByteSpace`,
  description: COURSE_DETAILS.subtitle,
  keywords: ['ByteSpace', 'course', COURSE_DETAILS.title],
};
