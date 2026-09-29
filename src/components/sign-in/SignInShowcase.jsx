import React, { memo } from 'react';
import CourseCard from '../home/CourseCard';
import { HOME_COURSES } from '../home/homeData';
import { selectShowcaseCourses } from '../register/registerCopy';
import RegisterStudentsCard from '../register/RegisterStudentsCard';
import { SIGN_IN_ORNAMENTS } from './signInAssets';

const showcaseCourses = selectShowcaseCourses(HOME_COURSES);

const SignInOrnament = memo(({ ornament }) => (
  <img className={`register-ornament ${ornament.className}`} src={ornament.src} alt="" />
));

SignInOrnament.displayName = 'SignInOrnament';

const SignInShowcase = memo(() => (
  <div className="register-showcase sign-in-showcase">
    {SIGN_IN_ORNAMENTS.map((ornament) => (
      <SignInOrnament key={ornament.id} ornament={ornament} />
    ))}
    {showcaseCourses.map(({ course, placement }) => (
      <div key={course.id} className={`register-course register-course-${placement}`}>
        <CourseCard course={course} />
      </div>
    ))}
    <RegisterStudentsCard />
  </div>
));

SignInShowcase.displayName = 'SignInShowcase';

export default SignInShowcase;
