import { Rect, Circle, Point } from './Shapes';
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

describe('Given a Circle function', () => {
  it('should return an instruction', () => {
    expect(
      Circle({ x: 50, y: 50, w: 100, h: 100, color: 'red' })
    ).toStrictEqual({
      type: InstructionType.DRAW_CIRCLE,
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

describe('Given a Point function', () => {
  it('should return an instruction', () => {
    expect(Point({ x: 50, y: 50, color: 'red' })).toStrictEqual({
      type: InstructionType.DRAW_POINT,
      data: {
        x: 50,
        y: 50,
        color: 'red',
      },
    });
  });
});
