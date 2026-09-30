import { memo } from 'react';
import { HERO_ORNAMENTS } from '../data/home';

// Figma draws each ornament image slightly outside its frame; cones and coils bleed differently.
const ART = {
  cone: 'absolute top-[-0.22%] right-[0.56%] bottom-[-0.28%] left-[-1.05%]',
  coil: 'absolute top-0 right-[0.47%] bottom-[-0.47%] left-[-0.93%]',
};

// Tint painted over the 3D image through its own alpha mask.
const TINT_BASE =
  'pointer-events-none absolute inset-0 mix-blend-hard-light [mask-image:var(--ornament-mask)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%]';
const TINT = {
  lime: `${TINT_BASE} bg-brand-lime`,
  paper: `${TINT_BASE} bg-canvas`,
};

const Ornament = memo(({ ornament }) => (
  <span className={ornament.className}>
    <span className={ART[ornament.cone ? 'cone' : 'coil']}>
      <img
        className="block h-full w-full object-contain"
        src={ornament.src}
        alt=""
        width={ornament.width}
        height={ornament.height}
      />
      <span
        className={TINT[ornament.tone]}
        style={{ '--ornament-mask': `url("${ornament.src}")` }}
      />
    </span>
  </span>
));

Ornament.displayName = 'Ornament';

export const OrnamentField = memo(({ ornaments = HERO_ORNAMENTS }) =>
  ornaments.map((ornament) => <Ornament key={ornament.id} ornament={ornament} />),
);

OrnamentField.displayName = 'OrnamentField';
