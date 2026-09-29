import React, { memo } from 'react';
import AvatarStack from '../home/AvatarStack';
import { AVATAR_MORE_DARK, HERO_AVATAR_SIZE, ICON_STAR_BLUE } from '../home/homeAssets';
import {
  REGISTER_STUDENT_AVATARS,
  STUDENTS_COUNT,
  STUDENTS_EXTRA,
  STUDENTS_LABEL,
  STUDENTS_RATING,
} from './registerCopy';

// Figma Register "Happy Students" card (49:132).
const RegisterStudentsCard = memo(() => (
  <article className="register-students">
    <div>
      <p className="register-students-label">{STUDENTS_LABEL}</p>
      <p className="register-students-score">
        <strong>{`${STUDENTS_RATING} `}</strong>
        {STUDENTS_COUNT}
        <span className="register-students-star">
          <img src={ICON_STAR_BLUE} alt="" />
        </span>
      </p>
    </div>
    <AvatarStack
      avatars={REGISTER_STUDENT_AVATARS}
      extraLabel={STUDENTS_EXTRA}
      badgeSrc={AVATAR_MORE_DARK}
      size={HERO_AVATAR_SIZE}
    />
  </article>
));

RegisterStudentsCard.displayName = 'RegisterStudentsCard';

export default RegisterStudentsCard;
