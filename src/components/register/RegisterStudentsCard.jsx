import React, { memo } from 'react';
import AvatarStack from '../home/AvatarStack';
import { AVATAR_MORE, HERO_AVATAR_SIZE, ICON_STAR, STAR_SIZE } from '../home/homeAssets';
import {
  REGISTER_STUDENT_AVATARS,
  STUDENTS_EXTRA,
  STUDENTS_LABEL,
  STUDENTS_RATING,
} from './registerCopy';

const RegisterStudentsCard = memo(() => (
  <article className="register-students">
    <p className="register-students-score">
      {STUDENTS_RATING}
      <img src={ICON_STAR} alt="" width={STAR_SIZE} height={STAR_SIZE} />
    </p>
    <p>{STUDENTS_LABEL}</p>
    <AvatarStack
      avatars={REGISTER_STUDENT_AVATARS}
      extraLabel={STUDENTS_EXTRA}
      badgeSrc={AVATAR_MORE}
      size={HERO_AVATAR_SIZE}
    />
  </article>
));

RegisterStudentsCard.displayName = 'RegisterStudentsCard';

export default RegisterStudentsCard;
