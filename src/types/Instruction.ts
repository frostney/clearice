import { Position, Dimension } from './Primitives';

export type Instructions = SpecificInstruction[];

export enum InstructionType {
  DRAW_RECT = 'DRAW_RECT',
  DRAW_IMAGE = 'DRAW_IMAGE',
  DRAW_POINT = 'DRAW_POINT',
  DRAW_CIRCLE = 'DRAW_CIRCLE',
}

export interface Instruction {
  type: InstructionType;
  data: {
    [key: string]: any;
  };
}

export type RectData = Position &
  Dimension & {
    color: string;
  };

export type PointData = Position & {
  color: string;
};

export type CircleData = Position &
  Dimension & {
    color: string;
  };

export interface DrawRectInstruction extends Instruction {
  type: InstructionType.DRAW_RECT;
  data: RectData;
}

export interface DrawCircleInstruction extends Instruction {
  type: InstructionType.DRAW_CIRCLE;
  data: CircleData;
}

export interface DrawImageInstruction extends Instruction {
  type: InstructionType.DRAW_IMAGE;
  data: {
    image: HTMLImageElement;
    x: number;
    y: number;
    w?: number;
    h?: number;
  };
}

export interface DrawPointInstruction extends Instruction {
  type: InstructionType.DRAW_POINT;
  data: PointData;
}

export type SpecificInstruction =
  | DrawRectInstruction
  | DrawImageInstruction
  | DrawPointInstruction;
