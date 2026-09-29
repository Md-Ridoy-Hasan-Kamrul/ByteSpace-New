import { HOME_ASSET_BASE } from '../home/homeAssets';

const asset = (fileName) => `${HOME_ASSET_BASE}/${fileName}`;

export const REGISTER_ORNAMENTS = [
  { id: 'ring', src: asset('ornament-ring.png'), className: 'register-ornament-ring' },
  { id: 'cone', src: asset('cone-a.png'), className: 'register-ornament-cone' },
  { id: 'prism', src: asset('cone-c.png'), className: 'register-ornament-prism' },
];
