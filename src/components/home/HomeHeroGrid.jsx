import React, { memo } from 'react';
import {
  GRID_FRAME_HEIGHT,
  GRID_FRAME_WIDTH,
  HORIZONTAL_GRID_LINES,
  VERTICAL_GRID_LINES,
} from './heroGridLines';

const HomeHeroGrid = memo(() => (
  <svg
    className="home-hero-grid"
    width={GRID_FRAME_WIDTH}
    height={GRID_FRAME_HEIGHT}
    viewBox={`0 0 ${GRID_FRAME_WIDTH} ${GRID_FRAME_HEIGHT}`}
    aria-hidden="true"
  >
    {VERTICAL_GRID_LINES.map((line) => (
      <line key={line.id} id={line.id} x1={line.x} y1="0" x2={line.x} y2={GRID_FRAME_HEIGHT} />
    ))}
    {HORIZONTAL_GRID_LINES.map((line) => (
      <line key={line.id} id={line.id} x1="0" y1={line.y} x2={GRID_FRAME_WIDTH} y2={line.y} />
    ))}
  </svg>
));

HomeHeroGrid.displayName = 'HomeHeroGrid';

export default HomeHeroGrid;
