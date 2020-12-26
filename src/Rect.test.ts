import {
  DEFAULT_X,
  DEFAULT_Y,
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
} from './constants';
import { Rect } from './Rect';
import { InstructionType } from './types';

describe('Given a Rect function', () => {
  it('should return an instruction', () => {
    expect(Rect()).toBe({
      type: InstructionType.DRAW_RECT,
      data: {
        x: DEFAULT_X,
        y: DEFAULT_Y,
        w: DEFAULT_WIDTH,
        h: DEFAULT_HEIGHT,
      },
    });
  });
});
