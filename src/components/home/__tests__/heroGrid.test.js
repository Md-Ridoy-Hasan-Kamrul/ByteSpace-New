import {
  GRID_FRAME_HEIGHT,
  GRID_FRAME_WIDTH,
  GRID_STEP,
  HORIZONTAL_GRID_LINES,
  LINE_21_Y,
  VERTICAL_GRID_LINES,
  VERTICAL_LINE_COUNT,
} from '../heroGridLines';

describe('heroGrid', () => {
  it('places thirteen vertical lines on a 120px step across the 1440 frame', () => {
    expect(VERTICAL_GRID_LINES).toHaveLength(VERTICAL_LINE_COUNT);
    expect(VERTICAL_GRID_LINES[0]).toEqual({ id: 'Line 1', x: 0 });
    expect(VERTICAL_GRID_LINES[12]).toEqual({ id: 'Line 13', x: GRID_FRAME_WIDTH });
    expect(VERTICAL_GRID_LINES[6].x - VERTICAL_GRID_LINES[5].x).toBe(GRID_STEP);
  });

  it('places nine horizontal lines, with Line 21 at the Figma y of 606', () => {
    expect(HORIZONTAL_GRID_LINES).toHaveLength(9);
    expect(HORIZONTAL_GRID_LINES.map((line) => line.id)).toEqual([
      'Line 18',
      'Line 19',
      'Line 20',
      'Line 21',
      'Line 22',
      'Line 23',
      'Line 24',
      'Line 25',
      'Line 26',
    ]);
    expect(HORIZONTAL_GRID_LINES[0].y).toBe(960);
    expect(HORIZONTAL_GRID_LINES[3]).toEqual({ id: 'Line 21', y: LINE_21_Y });
    expect(HORIZONTAL_GRID_LINES[8].y).toBe(0);
    expect(HORIZONTAL_GRID_LINES[0].y).toBeLessThanOrEqual(GRID_FRAME_HEIGHT);
  });
});
