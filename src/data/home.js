import { PRIMARY_CREATOR_ID, ROUTES, creatorProfilePath } from '../config';

export const HOME_ASSET_BASE = '/home';
export const LOGO_WIDTH = 29;
export const LOGO_HEIGHT = 32;
export const ICON_SIZE = 24;
export const STAR_SIZE = 16;
export const HERO_AVATAR_SIZE = 43;
export const COURSE_AVATAR_SIZE = 32;
export const CATEGORY_ICON_SIZE = 36;
export const PARTNER_LOGO_WIDTH = 168;
export const PARTNER_LOGO_HEIGHT = 42;
export const PORTRAIT_SIZE = 80;
export const LEVEL_ICON_SIZE = 20;
export const ORNAMENT_TONE_LIME = 'lime';
export const ORNAMENT_TONE_PAPER = 'paper';

const asset = (fileName) => `${HOME_ASSET_BASE}/${fileName}`;

export const HOME_LOGO = asset('logo.svg');
export const ICON_SEARCH = asset('icon-search.svg');
export const ICON_BAG = asset('icon-bag.svg');
export const ICON_STAR = asset('icon-star.svg');
export const ICON_STAR_OUTLINE = asset('icon-star-outline.svg');
export const ICON_LEVEL = asset('icon-level.svg');
export const ICON_CHECK = asset('icon-check.svg');
export const HERO_STUDENT = asset('hero-student.png');
export const GROWTH_CREATOR = asset('growth-creator.png');
export const AVATAR_MORE = asset('avatar-more.svg');
export const LEARNER_MORE = asset('learner-more.svg');
export const LEARNER_MORE_DARK = asset('learner-more-dark.svg');
export const ICON_STAR_LIME = asset('icon-star-lime.svg');
export const ICON_STAR_BLUE = asset('icon-star-blue.svg');
export const AVATAR_MORE_DARK = asset('avatar-more-dark.svg');
export const GROWTH_GLOW = asset('growth-glow.svg');
export const GROWTH_GLOW_LIME = asset('growth-glow-lime.svg');

const portrait = (fileName, id) => ({ id, src: asset(fileName) });

export const HERO_STUDENT_AVATARS = [
  portrait('avatar-1.png', 'hero-avatar-1'),
  portrait('avatar-2.png', 'hero-avatar-2'),
  portrait('avatar-3.png', 'hero-avatar-3'),
  portrait('avatar-4.png', 'hero-avatar-4'),
  portrait('avatar-5.png', 'hero-avatar-5'),
  portrait('avatar-6.png', 'hero-avatar-6'),
  portrait('avatar-7.png', 'hero-avatar-7'),
];

const COURSE_LEARNER_AVATARS = [
  portrait('learner-1.png', 'learner-1'),
  portrait('learner-2.png', 'learner-2'),
  portrait('learner-3.png', 'learner-3'),
  portrait('learner-4.png', 'learner-4'),
];

const PARTNER_LOGOS = [
  asset('partner-1.svg'),
  asset('partner-2.svg'),
  asset('partner-3.svg'),
  asset('partner-4.svg'),
  asset('partner-5.svg'),
];

const CATEGORY_ICONS = {
  design: asset('cat-design.svg'),
  development: asset('cat-dev.svg'),
  it: asset('cat-it.svg'),
  business: asset('cat-business.svg'),
  marketing: asset('cat-marketing.svg'),
  photography: asset('cat-photo.svg'),
};

const COURSE_IMAGES = {
  figma: asset('course-1.png'),
  digitalAsset: asset('course-2.png'),
  bigData: asset('course-3.png'),
  productivity: asset('course-4.png'),
  money: asset('course-5.png'),
  startup: asset('course-6.png'),
};

const TESTIMONIAL_PORTRAITS = {
  sarah: asset('testimonial-sarah.png'),
  james: asset('testimonial-james.png'),
  alex: asset('testimonial-alex.png'),
};

// Figma "3d ornament". The left and mid coils use a different source image than the
// right coil; the file shipped as ornament-ring.png is that coil (shared with sign-in/register).
// Bleed off the hero's left/right edges (Figma crops them at the frame edge), so they are
// anchored to the hero edges rather than the centred 1440 artboard on wide screens.
export const HERO_EDGE_ORNAMENTS = [
  {
    id: 'squiggle-left',
    src: asset('ornament-ring.png'),
    className:
      'hidden absolute isolate pointer-events-none md:block md:z-2 md:left-[calc(-118_/_1440_*_min(100%,_90rem))] md:top-[calc(221_/_1024_*_100%)] md:w-[calc(385_/_1440_*_min(100%,_90rem))] md:aspect-[1/1] md:max-lg:h-auto',
    tone: ORNAMENT_TONE_LIME,
    width: 385,
    height: 385,
  },
  {
    id: 'cylinder',
    src: asset('cone-b.png'),
    className:
      'hidden absolute isolate pointer-events-none md:block md:z-2 md:right-[calc(-161_/_1440_*_min(100%,_90rem))] md:top-[calc(221_/_1024_*_100%)] md:w-[calc(370_/_1440_*_min(100%,_90rem))] md:aspect-[1/1] md:max-lg:h-auto',
    cone: true,
    tone: ORNAMENT_TONE_LIME,
    width: 370,
    height: 370,
  },
];

export const HERO_ORNAMENTS = [
  {
    id: 'squiggle-mid',
    src: asset('ornament-ring.png'),
    className:
      'block absolute isolate pointer-events-none [transform:scaleX(-1)] z-3 left-[calc(50%_-_min(100vw_-_4rem,_21rem)_*_0.5_-_0.25rem)] w-12 max-lg:aspect-[1/1] max-md:bottom-[calc(min(100vw_-_4rem,_21rem)_*_0.49)] md:z-2 md:left-[calc(50%_-_318px)] md:w-[76px] md:max-lg:top-[386px] md:max-lg:h-auto lg:left-[calc(183_/_1440_*_100%)] lg:w-[calc(175_/_1440_*_100%)] lg:top-[calc(477_/_1024_*_100%)] lg:h-[calc(175_/_1024_*_100%)]',
    tone: ORNAMENT_TONE_PAPER,
    width: 175,
    height: 175,
  },
  {
    id: 'ring',
    src: asset('cone-a.png'),
    className:
      'hidden absolute isolate pointer-events-none md:block md:z-2 md:max-lg:left-[calc(50%_-_426px)] md:max-lg:top-[712px] md:max-lg:w-[132px] md:max-lg:h-auto md:max-lg:aspect-[1/1] lg:left-[calc(18_/_1440_*_100%)] lg:top-[calc(682_/_1024_*_100%)] lg:w-[calc(342_/_1440_*_100%)] lg:h-[calc(342_/_1024_*_100%)]',
    cone: true,
    tone: ORNAMENT_TONE_PAPER,
    width: 342,
    height: 342,
  },
  {
    id: 'prism',
    src: asset('cone-c.png'),
    className:
      'block absolute isolate pointer-events-none z-3 left-[calc(50%_+_min(100vw_-_4rem,_21rem)_*_0.26)] w-13 max-lg:aspect-[1/1] max-md:bottom-[calc(min(100vw_-_4rem,_21rem)_*_0.62)] md:z-2 md:left-[calc(50%_+_236px)] md:w-[96px] md:max-lg:top-[404px] md:max-lg:h-auto lg:left-[calc(1106_/_1440_*_100%)] lg:w-[calc(188_/_1440_*_100%)] lg:top-[calc(464_/_1024_*_100%)] lg:h-[calc(188_/_1024_*_100%)]',
    cone: true,
    tone: ORNAMENT_TONE_PAPER,
    width: 188,
    height: 188,
  },
  {
    id: 'squiggle-right',
    src: asset('ornament-squiggle.png'),
    className:
      'hidden absolute isolate pointer-events-none md:block md:z-2 md:max-lg:left-[calc(50%_+_250px)] md:max-lg:top-[652px] md:max-lg:w-[110px] md:max-lg:h-auto md:max-lg:aspect-[1/1] lg:left-[calc(1127_/_1440_*_100%)] lg:top-[calc(672_/_1024_*_100%)] lg:w-[calc(330_/_1440_*_100%)] lg:h-[calc(330_/_1024_*_100%)]',
    tone: ORNAMENT_TONE_PAPER,
    width: 330,
    height: 330,
  },
];

// Figma Frame 15 lime squiggles, positioned inside their illustration boxes.
export const GROWTH_ORNAMENTS = {
  course: [
    {
      id: 'growth-squiggle-course',
      src: asset('ornament-squiggle.png'),
      className:
        'block absolute isolate pointer-events-none top-[67px] left-[406px] w-[215px] h-[215px] lg:z-2',
      tone: ORNAMENT_TONE_LIME,
      width: 215,
      height: 215,
    },
  ],
  creator: [
    {
      id: 'growth-squiggle-creator',
      src: asset('ornament-ring.png'),
      className:
        'block absolute isolate pointer-events-none top-[114px] left-[305px] w-[215px] h-[215px] lg:z-2',
      tone: ORNAMENT_TONE_LIME,
      width: 215,
      height: 215,
    },
  ],
};

// Figma CTA_Frame "Group 6", in Figma paint order.
const CTA_ORNAMENT_CLASSES = {
  prism:
    'hidden absolute isolate pointer-events-none lg:block lg:right-[calc(172_*_min(100cqw,_90rem)_/_1440)] lg:z-2 lg:w-[calc(188_*_min(100cqw,_90rem)_/_1440)] lg:aspect-[1/1] lg:top-[calc(0_*_min(100cqw,_90rem)_/_1440)]',
  'coil-right':
    'hidden absolute isolate pointer-events-none lg:block lg:right-[calc(0_*_min(100cqw,_90rem)_/_1440)] lg:z-2 lg:w-[calc(330_*_min(100cqw,_90rem)_/_1440)] lg:aspect-[1/1] lg:top-[calc(289_*_min(100cqw,_90rem)_/_1440)]',
  'coil-left':
    'hidden absolute isolate pointer-events-none lg:block lg:left-[calc(-118_*_min(100cqw,_90rem)_/_1440)] lg:z-2 lg:w-[calc(385_*_min(100cqw,_90rem)_/_1440)] lg:aspect-[1/1] lg:top-[calc(-162_*_min(100cqw,_90rem)_/_1440)]',
  'coil-small':
    'hidden absolute isolate pointer-events-none lg:block lg:left-[calc(178_*_min(100cqw,_90rem)_/_1440)] lg:[transform:scaleX(-1)] lg:z-2 lg:w-[calc(175_*_min(100cqw,_90rem)_/_1440)] lg:aspect-[1/1] lg:top-[calc(5_*_min(100cqw,_90rem)_/_1440)]',
  cone: 'hidden absolute isolate pointer-events-none lg:block lg:left-[calc(-48_*_min(100cqw,_90rem)_/_1440)] lg:z-2 lg:w-[calc(188_*_min(100cqw,_90rem)_/_1440)] lg:aspect-[1/1] lg:top-[calc(225_*_min(100cqw,_90rem)_/_1440)]',
  ring: 'hidden absolute isolate pointer-events-none lg:block lg:left-[calc(20_*_min(100cqw,_90rem)_/_1440)] lg:z-2 lg:w-[calc(342_*_min(100cqw,_90rem)_/_1440)] lg:aspect-[1/1] lg:top-[calc(299_*_min(100cqw,_90rem)_/_1440)]',
  cylinder:
    'hidden absolute isolate pointer-events-none lg:block lg:right-[calc(-156_*_min(100cqw,_90rem)_/_1440)] lg:z-2 lg:w-[calc(370_*_min(100cqw,_90rem)_/_1440)] lg:aspect-[1/1] lg:top-[calc(6_*_min(100cqw,_90rem)_/_1440)]',
};

const ctaOrnament = (id, fileName, tone, size, cone = false) => ({
  id,
  src: asset(fileName),
  className: CTA_ORNAMENT_CLASSES[id],
  cone,
  tone,
  width: size,
  height: size,
});

export const CTA_ORNAMENTS = [
  ctaOrnament('prism', 'cone-c.png', ORNAMENT_TONE_LIME, 188, true),
  ctaOrnament('coil-right', 'ornament-squiggle.png', ORNAMENT_TONE_LIME, 330),
  ctaOrnament('coil-left', 'ornament-ring.png', ORNAMENT_TONE_LIME, 385),
  ctaOrnament('coil-small', 'ornament-ring.png', ORNAMENT_TONE_PAPER, 175),
  ctaOrnament('cone', 'cone-d.png', ORNAMENT_TONE_PAPER, 188, true),
  ctaOrnament('ring', 'cone-a.png', ORNAMENT_TONE_LIME, 342, true),
  ctaOrnament('cylinder', 'cone-b.png', ORNAMENT_TONE_PAPER, 370, true),
];

// Figma Testimonials_Frame blurred ellipses.
export const COMMUNITY_GLOWS = [
  {
    id: 'lime',
    src: asset('glow-lime.svg'),
    className: 'top-[-281px] left-[calc(50%_+_82px)] h-[1217px] w-[1217px]',
  },
  {
    id: 'soft',
    src: asset('glow-soft.svg'),
    className: 'top-[-178px] left-[calc(50%_-_365px)] h-[752px] w-[752px]',
  },
  {
    id: 'blue',
    src: asset('glow-blue.svg'),
    className: 'top-[109px] left-[calc(50%_-_1202px)] h-[1217px] w-[1217px]',
  },
];

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
  { label: 'Courses', to: ROUTES.SEARCH },
  { label: 'Creators', to: creatorProfilePath(PRIMARY_CREATOR_ID) },
];

export const HEADER_ACTIONS = [
  { label: 'Sign In', to: ROUTES.SIGN_IN },
  { label: 'Join Us', to: ROUTES.REGISTER },
];

export const HEADER_BAG = {
  label: 'Shopping bag',
  href: '#courses',
};

// Rows as laid out in Figma (Tab_Categories, Frame 6, Frame 7); "+ More" closes the last row.
export const COURSE_TOPIC_ROWS = [
  [
    FEATURED_TOPIC,
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ],
  [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
  ],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
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
    { label: 'Contact', href: '#newsletter' },
    { label: 'Help', href: '#newsletter' },
    { label: 'About', href: '#creators' },
  ],
];

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#newsletter' },
  { label: 'Terms of Service', href: '#newsletter' },
  { label: 'Cookies Settings', href: '#newsletter' },
];

export const HERO_AVATARS = HERO_STUDENT_AVATARS;

// No page title: the home tab shows just the site name.
export const SEO_HOME = {
  description: HERO_SUBTITLE,
  keywords: ['bytespace', 'courses', 'creators', 'learning'],
};

const normalizeSearchText = (value) => value.trim().toLowerCase();

const courseSearchText = (course) =>
  [course.title, course.creator, course.level, ...course.topics].join(' ');

const courseMatchesQuery = (course, query) => {
  const needle = normalizeSearchText(query);
  if (!needle) {
    return true;
  }
  return normalizeSearchText(courseSearchText(course)).includes(needle);
};

const courseMatchesTopic = (course, topic) =>
  topic === FEATURED_TOPIC || course.topics.includes(topic);

export const filterCourses = (courses, { query, topic }) =>
  courses.filter(
    (course) => courseMatchesTopic(course, topic) && courseMatchesQuery(course, query),
  );
