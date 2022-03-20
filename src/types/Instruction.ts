import { Position, Dimension, OptionalDimension, Rotation } from './Primitives';

export type Instructions = SpecificInstruction[];

export enum InstructionType {
  RECT = 'RECT',
  TEXTURE = 'TEXTURE',
  POINT = 'POINT',
  CIRCLE = 'CIRCLE',
}

export interface Instruction {
  type: InstructionType;
  data: {
    [key: string]: any;
  };
}

type RectData = Position &
  Rotation &
  Dimension & {
    color: string;
  };

type PointData = Position & {
  color: string;
};

type CircleData = Position &
  Dimension & {
    color: string;
  };

type TextureData = Position &
  OptionalDimension & {
    image: HTMLImageElement;
    sx?: number;
    sy?: number;
    sw?: number;
    sh?: number;
  };
export interface DrawRectInstruction extends Instruction {
  type: InstructionType.RECT;
  data: RectData;
}

export interface DrawCircleInstruction extends Instruction {
  type: InstructionType.CIRCLE;
  data: CircleData;
}

export interface DrawTextureInstruction extends Instruction {
  type: InstructionType.TEXTURE;
  data: TextureData;
}

export interface DrawPointInstruction extends Instruction {
  type: InstructionType.POINT;
  data: PointData;
}

export type SpecificInstruction =
  | DrawRectInstruction
  | DrawTextureInstruction
  | DrawPointInstruction;

export type ChildInstruction = SpecificInstruction & {
  children: ChildInstruction[];
};
