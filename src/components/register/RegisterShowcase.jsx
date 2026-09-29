import React, { memo } from 'react';
import CourseCard from '../home/CourseCard';
import { ICON_STAR_LIME, LEARNER_MORE_DARK } from '../home/homeAssets';
import { HOME_COURSES } from '../home/homeData';
import OrnamentField from '../home/OrnamentField';
import { REGISTER_ORNAMENTS } from './registerAssets';
import { selectShowcaseCourses } from './registerCopy';
import RegisterStudentsCard from './RegisterStudentsCard';

const showcaseCourses = selectShowcaseCourses(HOME_COURSES);

// Figma Register "Group 7" (15254:194): cards first, ornaments painted on top.
const RegisterShowcase = memo(() => (
  <div className="register-showcase">
    {showcaseCourses.map(({ course, placement }) => (
      <div
        key={course.id}
        className={`register-course register-course-${placement} home-figma-card`}
      >
        <CourseCard course={course} ratingIcon={ICON_STAR_LIME} extraBadge={LEARNER_MORE_DARK} />
      </div>
    ))}
    <RegisterStudentsCard />
    <OrnamentField ornaments={REGISTER_ORNAMENTS} />
  </div>
));

RegisterShowcase.displayName = 'RegisterShowcase';

export default RegisterShowcase;
