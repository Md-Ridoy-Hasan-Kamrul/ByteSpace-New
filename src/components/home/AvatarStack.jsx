import React, { memo } from 'react';

const AvatarStack = memo(({ avatars, extraLabel, badgeSrc, size }) => (
  <ul className="home-avatars" aria-hidden="true">
    {avatars.map((avatar) => (
      <li key={avatar.id}>
        <img src={avatar.src} alt="" width={size} height={size} />
      </li>
    ))}
    <li className="home-avatars-extra">
      <img src={badgeSrc} alt="" width={size} height={size} />
      <span>{extraLabel}</span>
    </li>
  </ul>
));

AvatarStack.displayName = 'AvatarStack';

export default AvatarStack;
