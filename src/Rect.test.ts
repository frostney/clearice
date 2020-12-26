import { Rect } from './Rect';
import { InstructionType } from './types';

describe('Given a Rect function', () => {
  it('should return an instruction', () => {
    expect(Rect({ x: 50, y: 50, w: 100, h: 100, color: 'red' })).toStrictEqual({
      type: InstructionType.DRAW_RECT,
      data: {
        x: 50,
        y: 50,
        w: 100,
        h: 100,
        color: 'red',
      },
    });
  });
});
