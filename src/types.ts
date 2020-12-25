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

export interface DrawRectInstruction extends Instruction {
  type: InstructionType.DRAW_RECT;
  data: {
    color: string;
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface DrawImageInstruction extends Instruction {
  type: InstructionType.DRAW_IMAGE;
  data: {
    image: ImageBitmap;
    x: number;
    y: number;
    width?: number;
    height?: number;
  };
}

export interface DrawPointInstruction extends Instruction {
  type: InstructionType.DRAW_POINT;
  data: {
    color: string;
    x: number;
    y: number;
  };
}

export type SpecificInstruction =
  | DrawRectInstruction
  | DrawImageInstruction
  | DrawPointInstruction;
