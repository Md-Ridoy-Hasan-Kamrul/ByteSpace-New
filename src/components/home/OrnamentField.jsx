import React, { memo } from 'react';
import { HERO_ORNAMENTS } from './homeAssets';

const Ornament = memo(({ ornament }) => (
  <span className={`home-ornament ${ornament.className}`}>
    <span className="home-ornament-art">
      <img src={ornament.src} alt="" width={ornament.width} height={ornament.height} />
      <span
        className={`home-ornament-tint home-ornament-tint-${ornament.tone}`}
        style={{ '--ornament-mask': `url("${ornament.src}")` }}
      />
    </span>
  </span>
));

Ornament.displayName = 'Ornament';

const OrnamentField = memo(() =>
  HERO_ORNAMENTS.map((ornament) => <Ornament key={ornament.id} ornament={ornament} />),
);

OrnamentField.displayName = 'OrnamentField';

export default OrnamentField;
