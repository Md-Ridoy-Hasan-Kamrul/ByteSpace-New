import React, { memo } from 'react';
import { HERO_ORNAMENTS, ORNAMENT_RENDER_SIZE } from './homeAssets';

const OrnamentField = memo(() =>
  HERO_ORNAMENTS.map((ornament) => (
    <img
      key={ornament.id}
      src={ornament.src}
      alt=""
      className={`home-ornament ${ornament.className}`}
      width={ORNAMENT_RENDER_SIZE}
      height={ORNAMENT_RENDER_SIZE}
    />
  )),
);

OrnamentField.displayName = 'OrnamentField';

export default OrnamentField;
