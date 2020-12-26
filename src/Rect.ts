import {
  DEFAULT_X,
  DEFAULT_Y,
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
} from './constants';
import { RectData, InstructionType } from './types';

export const Rect = ({
  x = DEFAULT_X,
  y = DEFAULT_Y,
  w = DEFAULT_WIDTH,
  h = DEFAULT_HEIGHT,
  color,
}: RectData) => ({
  type: InstructionType.DRAW_RECT,
  data: { x, y, w, h, color },
});
