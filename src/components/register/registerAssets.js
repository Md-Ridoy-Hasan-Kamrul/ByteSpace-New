import { HOME_ASSET_BASE, ORNAMENT_TONE_LIME, ORNAMENT_TONE_PAPER } from '../home/homeAssets';

const asset = (fileName) => `${HOME_ASSET_BASE}/${fileName}`;

// Figma Register "Group 7" ornaments (49:180, 49:185, 49:190), in Figma paint order.
export const REGISTER_ORNAMENTS = [
  {
    id: 'coil',
    src: asset('ornament-ring.png'),
    className: 'register-ornament-coil',
    tone: ORNAMENT_TONE_PAPER,
    width: 175,
    height: 175,
  },
  {
    id: 'ring',
    src: asset('cone-a.png'),
    className: 'home-ornament-cone register-ornament-ring',
    tone: ORNAMENT_TONE_LIME,
    width: 146,
    height: 146,
  },
  {
    id: 'prism',
    src: asset('cone-c.png'),
    className: 'home-ornament-cone register-ornament-prism',
    tone: ORNAMENT_TONE_LIME,
    width: 188,
    height: 188,
  },
];
