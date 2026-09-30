import { creatorProfilePath } from '../../config';
import { CREATOR_ID } from '../creator/creatorCopy';
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
export const LESSONS_TAB = 'Lesson';
export const LESSONS_ABOUT_LABEL = 'Lessons';
export const REVIEWS_TAB = 'Reviews';
export const COURSE_TABS = [ABOUT_TAB, LESSONS_TAB, REVIEWS_TAB];

export const courseTabLabel = (tabId, activeTab) =>
  tabId === LESSONS_TAB && activeTab === ABOUT_TAB ? LESSONS_ABOUT_LABEL : tabId;

export const SHARE_LABEL = 'Share';
export const PLAY_LABEL = 'Play preview';
export const ENROLL_LABEL = 'Enroll Now';
export const PROFILE_LABEL = 'See Full Profile';
export const DESCRIPTION_HEADING = 'Description';
export const SNEAK_PEEK_HEADING = 'Sneak Peak';
export const KEY_POINTS_HEADING = 'Key Points';

export const LESSON_COPY = {
  exploreHeading: 'Explore the Modules',
  exploreBody:
    'Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.',
  listHeading: 'Lesson List',
  contentHeading: 'Lesson Content',
  contentBody:
    'Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.',
  trackingHeading: 'Lesson Progress Tracking',
  trackingBody:
    'Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.',
  progressLabel: 'Learning Progress',
  progressValue: '55%',
  progressPercent: 55,
  progressMin: 0,
  progressMax: 100,
};

export const COURSE_MODULES = [
  {
    id: 'module-1',
    title: 'Module 1: Introduction to Digital Assets',
    body: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    id: 'module-2',
    title: 'Module 2: Design Principles for Impact',
    body: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    id: 'module-4',
    title: 'Module 4: User-Centric Design Strategies',
    body: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    id: 'module-5',
    title: 'Module 5: Interactive Media and Engagement',
    body: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    id: 'module-6',
    title: 'Module 6: Project Showcase and Critique',
    body: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    id: 'module-7',
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    body: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const ALL_RATING = 'all';
export const ALL_RATING_LABEL = 'All rating';
export const STAR_TOTAL = 5;
export const STAR_SLOTS = [1, 2, 3, 4, 5];
export const RATING_FILTERS = [5, 4, 3, 2, 1];
export const REVIEW_ROLE = 'UI/UX Designer';
export const REVIEW_TIME = 'a year ago';
export const REVIEW_RATING = STAR_TOTAL;

export const starFilterLabel = (score) => `${score} ${score === STAR_SLOTS[0] ? 'star' : 'stars'}`;

export const REVIEW_COPY = {
  summaryHeading: 'What Learners Are Saying',
  summaryBody:
    "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
  ratingsLabel: 'Ratings',
  ratingsScore: '4.7',
  listHeading: 'Individual Reviews:',
  filtersLabel: 'Filter reviews by rating',
};

export const RATING_ROWS = [
  { id: 'rating-5', count: '720', fillClass: 'course-rating-fill-5' },
  { id: 'rating-4', count: '120', fillClass: 'course-rating-fill-4' },
  { id: 'rating-3', count: '21', fillClass: 'course-rating-fill-3' },
  { id: 'rating-2', count: '12', fillClass: 'course-rating-fill-2' },
  { id: 'rating-1', count: '16', fillClass: 'course-rating-fill-1' },
];

export const COURSE_REVIEWS = [
  {
    id: 'purepearl',
    name: 'PurePearl Studio',
    avatar: 'purepearl',
    body: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    id: 'albert',
    name: 'Albert Flores',
    avatar: 'albert',
    body: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 'cody',
    name: 'Cody Fisher',
    avatar: 'cody',
    body: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn Simmons',
    avatar: 'brooklyn',
    body: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
  },
].map((review) => ({
  ...review,
  role: REVIEW_ROLE,
  time: REVIEW_TIME,
  rating: REVIEW_RATING,
}));
export const INCLUDES_HEADING = 'This course include';
export const CREATOR_PREFIX = 'by';
export const PRICE_SUFFIX = '/lifetime';
export const ENROLL_PITCH = 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!';
export const ENROLL_SUCCESS_MESSAGE = 'You are enrolled in this course.';
export const SHARE_SUCCESS_MESSAGE = 'Course link copied.';
export const PROFILE_HREF = creatorProfilePath(CREATOR_ID);

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
  {
    id: 'lesson-03',
    number: '03',
    title: 'Advanced Techniques in Digital Creation',
    duration: '16 mins',
  },
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
  title: course.title,
  description: course.subtitle,
  keywords: ['ByteSpace', 'course', course.title],
});

export const SEO_MISSING_COURSE = {
  title: 'Course not found',
  description: MISSING_COURSE_MESSAGE,
  keywords: ['ByteSpace', 'course'],
};

export const SEO_COURSE_DETAILS = {
  title: COURSE_DETAILS.title,
  description: COURSE_DETAILS.subtitle,
  keywords: ['ByteSpace', 'course', COURSE_DETAILS.title],
};
