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
export const ORNAMENT_RENDER_SIZE = 220;

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

export const COURSE_LEARNER_AVATARS = [
  portrait('learner-1.png', 'learner-1'),
  portrait('learner-2.png', 'learner-2'),
  portrait('learner-3.png', 'learner-3'),
  portrait('learner-4.png', 'learner-4'),
];

export const PARTNER_LOGOS = [
  asset('partner-1.svg'),
  asset('partner-2.svg'),
  asset('partner-3.svg'),
  asset('partner-4.svg'),
  asset('partner-5.svg'),
];

export const CATEGORY_ICONS = {
  design: asset('cat-design.svg'),
  development: asset('cat-dev.svg'),
  it: asset('cat-it.svg'),
  business: asset('cat-business.svg'),
  marketing: asset('cat-marketing.svg'),
  photography: asset('cat-photo.svg'),
};

export const COURSE_IMAGES = {
  figma: asset('course-1.png'),
  digitalAsset: asset('course-2.png'),
  bigData: asset('course-3.png'),
  productivity: asset('course-4.png'),
  money: asset('course-5.png'),
  startup: asset('course-6.png'),
};

export const TESTIMONIAL_PORTRAITS = {
  sarah: asset('testimonial-sarah.png'),
  james: asset('testimonial-james.png'),
  alex: asset('testimonial-alex.png'),
};

export const HERO_ORNAMENTS = [
  { id: 'ring-left', src: asset('ornament-ring.png'), className: 'home-ornament-ring-left' },
  { id: 'squiggle-left', src: asset('ornament-squiggle.png'), className: 'home-ornament-squiggle-left' },
  { id: 'cone-left', src: asset('cone-a.png'), className: 'home-ornament-cone-left' },
  { id: 'cone-right', src: asset('cone-b.png'), className: 'home-ornament-cone-right' },
  { id: 'prism', src: asset('cone-c.png'), className: 'home-ornament-prism' },
  { id: 'squiggle-right', src: asset('ornament-squiggle.png'), className: 'home-ornament-squiggle-right' },
];
