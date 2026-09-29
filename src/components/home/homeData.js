import { ROUTES } from '../../config';
import {
  CATEGORY_ICONS,
  COURSE_IMAGES,
  COURSE_LEARNER_AVATARS,
  HERO_STUDENT_AVATARS,
  PARTNER_LOGOS,
  TESTIMONIAL_PORTRAITS,
} from './homeAssets';

export const FEATURED_TOPIC = 'Featured';

export const HERO_TITLE = 'Get Access to Hundreds Courses Available';
export const HERO_SUBTITLE =
  'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.';
export const SEARCH_PLACEHOLDER = 'Course, topic, creator';
export const EMAIL_PLACEHOLDER = 'Enter your email';
export const SEARCH_BUTTON_LABEL = 'Search';

export const DISCOVERY_TITLE = 'Discover Your Passion, Build Your Skills';
export const DISCOVERY_BODY =
  'At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.';

export const PATHS_TITLE = 'Explore Diverse Learning Paths at Bytespace';
export const PATHS_BODY =
  "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.";

export const GROWTH_TITLE = 'Your Path to Professional Growth Starts Here!';
export const GROWTH_BODY =
  'Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.';

export const CREATOR_TITLE = 'Create & Manage Courses Easily.';
export const CREATOR_LEAD = 'ByteSpace';
export const CREATOR_BODY =
  'supports individuals or entities in the creation, publication, and administration of educational courses.';

export const CTA_TITLE = 'Unlock Your Potential as a Creator with ByteSpace';
export const CTA_BODY =
  'Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.';
export const CTA_BUTTON_LABEL = 'Join as Creator';

export const COMMUNITY_TITLE = 'Discover What Our Community Is Saying';
export const COMMUNITY_BODY =
  'At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.';

export const EMPTY_COURSES_MESSAGE = 'No courses match your search.';
export const NEWSLETTER_EMAIL_REQUIRED = 'Enter your email to subscribe.';
export const NEWSLETTER_EMAIL_INVALID = 'Enter a valid email address.';
export const NEWSLETTER_SUCCESS = 'You are subscribed.';
export const NEWSLETTER_PROMPT =
  'Stay Up to date with our latest features and releases by joining our newsletter.';
export const NEWSLETTER_CONSENT =
  'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.';
export const COPYRIGHT_TEXT = '© 2023 ByteSpace. All rights reserved.';

export const BRAND_NAME = 'ByteSpace';
export const LEARNING_PROGRESS_LABEL = '55%';
export const UIUX_CARD_TITLE = 'UI/UX Design';
export const UIUX_COURSE_COUNT = '200 Courses';
export const UIUX_STUDENT_COUNT = '1000+ Students';
export const HAPPY_STUDENTS_LABEL = 'Happy Students';
export const HAPPY_STUDENTS_RATING = '4.5';
export const HAPPY_STUDENTS_COUNT = '(240)';
export const HAPPY_STUDENTS_EXTRA = '2K+';
export const REVENUE_LABEL = 'Total Revenue';
export const REVENUE_RANGE = 'July 1-28';
export const REVENUE_AMOUNT = '$120.29';
export const REVENUE_DELTA = '+12$';
export const YEAR_TO_DATE_LABEL = 'Year to Date';
export const YEAR_TO_DATE_YEAR = '2023';
export const YEAR_TO_DATE_AMOUNT = '$1,200.38';

export const HEADER_LINKS = [
  { label: 'Home', to: ROUTES.HOME },
  { label: 'Courses', href: '#courses' },
  { label: 'Creators', href: '#creators' },
];

export const HEADER_ACTIONS = [
  { label: 'Sign In', to: ROUTES.SIGN_IN },
  { label: 'Join Us', to: ROUTES.REGISTER },
];

export const HEADER_BAG = {
  label: 'Shopping bag',
  href: '#courses',
};

export const COURSE_TOPICS = [
  FEATURED_TOPIC,
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

export const MORE_TOPICS_LABEL = '+ More';

const SHARED_COURSE = {
  creator: 'purepearl studio',
  lessonsLabel: '17 Lessons',
  durationLabel: '2 hours 16 mins',
  commentsLabel: '59 Comments',
  level: 'Beginner',
  priceLabel: '$25',
  billingLabel: '/lifetime',
  ratingLabel: '4.5',
  extraLearnersLabel: '26+',
  learnerAvatars: COURSE_LEARNER_AVATARS,
};

const defineCourse = (course) => ({
  ...SHARED_COURSE,
  ...course,
});

export const HOME_COURSES = [
  defineCourse({
    id: 'learn-figma',
    title: 'Learn Figma from Basic',
    image: COURSE_IMAGES.figma,
    topics: [FEATURED_TOPIC, 'UI/UX Design', 'Graphic Design'],
  }),
  defineCourse({
    id: 'digital-asset',
    title: 'Build Digital Asset',
    image: COURSE_IMAGES.digitalAsset,
    topics: [FEATURED_TOPIC, 'Digital Illustration'],
  }),
  defineCourse({
    id: 'big-data',
    title: 'the Power of Big Data',
    image: COURSE_IMAGES.bigData,
    topics: [FEATURED_TOPIC, 'Data Science'],
  }),
  defineCourse({
    id: 'productivity',
    title: 'Balancing Productivity and Self-Care',
    image: COURSE_IMAGES.productivity,
    topics: [FEATURED_TOPIC, 'Productivity'],
  }),
  defineCourse({
    id: 'money',
    title: 'Mastering Money Management',
    image: COURSE_IMAGES.money,
    topics: [FEATURED_TOPIC, 'Freelance & Entrepreneurship'],
  }),
  defineCourse({
    id: 'startup',
    title: 'From Idea to Startup Success',
    image: COURSE_IMAGES.startup,
    topics: [FEATURED_TOPIC, 'Marketing', 'Freelance & Entrepreneurship'],
  }),
];

export const HOME_CATEGORIES = [
  { id: 'design', label: 'Design', icon: CATEGORY_ICONS.design },
  { id: 'development', label: 'Development', icon: CATEGORY_ICONS.development },
  { id: 'it-software', label: 'IT & Software', icon: CATEGORY_ICONS.it },
  { id: 'business', label: 'Business', icon: CATEGORY_ICONS.business },
  { id: 'marketing', label: 'Marketing', icon: CATEGORY_ICONS.marketing },
  { id: 'photography', label: 'Photography', icon: CATEGORY_ICONS.photography },
];

export const PARTNERS = PARTNER_LOGOS.map((src, index) => ({
  id: `partner-${index + 1}`,
  src,
  name: 'Logoipsum',
}));

export const GROWTH_STATS = [
  { id: 'students', value: '12K', label: 'Students' },
  { id: 'courses', value: '70+', label: 'Courses' },
  { id: 'creators', value: '16', label: 'Creators' },
];

export const CREATOR_BENEFITS = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export const TESTIMONIALS = [
  {
    id: 'sarah',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    portrait: TESTIMONIAL_PORTRAITS.sarah,
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    id: 'james',
    name: 'James L.',
    role: 'Lifelong Learner',
    portrait: TESTIMONIAL_PORTRAITS.james,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 'alex',
    name: 'Alex B.',
    role: 'Inspired Creator',
    portrait: TESTIMONIAL_PORTRAITS.alex,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const FOOTER_LINK_GROUPS = [
  [
    { label: 'Featured Courses', href: '#courses' },
    { label: 'Featured Categories', href: '#categories' },
    { label: 'Business', href: '#categories' },
    { label: 'IT', href: '#categories' },
    { label: 'Design', href: '#categories' },
  ],
  [
    { label: 'Development', href: '#categories' },
    { label: 'Marketing', href: '#categories' },
    { label: 'Photography', href: '#categories' },
    { label: 'Finance', href: '#categories' },
    { label: 'Sport', href: '#categories' },
  ],
  [
    { label: 'Become a Creator', to: ROUTES.REGISTER },
    { label: 'Affiliate Program', href: '#creators' },
    { label: 'Contact', to: ROUTES.CONTACT },
    { label: 'Help', href: '#newsletter' },
    { label: 'About', to: ROUTES.ABOUT },
  ],
];

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#newsletter' },
  { label: 'Terms of Service', href: '#newsletter' },
  { label: 'Cookies Settings', href: '#newsletter' },
];

export const HERO_AVATARS = HERO_STUDENT_AVATARS;

export const SEO_HOME = {
  title: 'ByteSpace Courses',
  description: HERO_SUBTITLE,
  keywords: ['bytespace', 'courses', 'creators', 'learning'],
};
