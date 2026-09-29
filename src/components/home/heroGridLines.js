export const GRID_FRAME_WIDTH = 1440;
export const GRID_FRAME_HEIGHT = 1024;
export const GRID_STEP = 120;
export const VERTICAL_LINE_COUNT = 13;
export const HORIZONTAL_LINE_COUNT = 9;
export const HORIZONTAL_LINE_ORIGIN = 18;
export const HORIZONTAL_LINE_TOP = 960;
export const LINE_21_NUMBER = 21;
export const LINE_21_Y = 606;

export const verticalGridLine = (index) => ({
  id: `Line ${index + 1}`,
  x: index * GRID_STEP,
});

export const horizontalGridLine = (offset) => {
  const number = HORIZONTAL_LINE_ORIGIN + offset;
  const evenStep = HORIZONTAL_LINE_TOP - offset * GRID_STEP;

  return {
    id: `Line ${number}`,
    y: number === LINE_21_NUMBER ? LINE_21_Y : evenStep,
  };
};

export const VERTICAL_GRID_LINES = Array.from({ length: VERTICAL_LINE_COUNT }, (_, index) =>
  verticalGridLine(index),
);

export const HORIZONTAL_GRID_LINES = Array.from({ length: HORIZONTAL_LINE_COUNT }, (_, offset) =>
  horizontalGridLine(offset),
);
