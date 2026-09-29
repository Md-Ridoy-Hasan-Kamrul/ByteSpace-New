import React, { memo } from 'react';
import CourseCard from '../home/CourseCard';
import { HOME_COURSES } from '../home/homeData';
import { REGISTER_ORNAMENTS } from './registerAssets';
import { selectShowcaseCourses } from './registerCopy';
import RegisterStudentsCard from './RegisterStudentsCard';

const showcaseCourses = selectShowcaseCourses(HOME_COURSES);

const RegisterOrnament = memo(({ ornament }) => (
  <img className={`register-ornament ${ornament.className}`} src={ornament.src} alt="" />
));

RegisterOrnament.displayName = 'RegisterOrnament';

const RegisterShowcase = memo(() => (
  <div className="register-showcase">
    {REGISTER_ORNAMENTS.map((ornament) => (
      <RegisterOrnament key={ornament.id} ornament={ornament} />
    ))}
    {showcaseCourses.map(({ course, placement }) => (
      <div key={course.id} className={`register-course register-course-${placement}`}>
        <CourseCard course={course} />
      </div>
    ))}
    <RegisterStudentsCard />
  </div>
));

RegisterShowcase.displayName = 'RegisterShowcase';

export default RegisterShowcase;
