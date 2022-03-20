import { DEFAULT_X, DEFAULT_Y } from './constants';
import {
  Instruction,
  Instructions,
  Middleware,
  InstructionType,
} from './types';
import { Position } from './types/Primitives';

export const clear = (context: CanvasRenderingContext2D) => (
  r: number,
  g: number,
  b: number,
  a: number
) => {
  context.clearRect(r, g, b, a);
};

type RenderOptions = {
  offset: Position;
  middleware: Middleware[];
};

const DEFAULT_RENDER_OPTIONS = {
  offset: { x: DEFAULT_X, y: DEFAULT_Y },
  middleware: [],
};

export const render = (context: CanvasRenderingContext2D) => (
  instructions: Instructions = [],
  options: RenderOptions = DEFAULT_RENDER_OPTIONS
) => {
  instructions.forEach((inst: Instruction) => {
    switch (inst.type) {
      case InstructionType.RECT: {
        context.fillStyle = inst.data.color;
        context.fillRect(
          options.offset.x + inst.data.x,
          options.offset.y + inst.data.y,
          inst.data.w,
          inst.data.h
        );
        break;
      }
      case InstructionType.TEXTURE: {
        context.drawImage(
          options.offset.x + inst.data.image,
          options.offset.y + inst.data.x,
          inst.data.y
        );
        break;
      }
      default:
        break;
    }
  });
};

export const renderTree = () => {};

export type RendererT = {
  clear: (r: number, g: number, b: number, a: number) => void;
  render: (instructions: Instructions, options: RenderOptions) => void;
};
