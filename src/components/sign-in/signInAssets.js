import { HOME_ASSET_BASE } from '../home/homeAssets';

const asset = (fileName) => `${HOME_ASSET_BASE}/${fileName}`;

export const SIGN_IN_ORNAMENTS = [
  { id: 'ring', src: asset('ornament-ring.png'), className: 'sign-in-ornament-ring' },
  { id: 'squiggle', src: asset('ornament-squiggle.png'), className: 'sign-in-ornament-squiggle' },
  { id: 'cone', src: asset('cone-c.png'), className: 'sign-in-ornament-cone' },
];
