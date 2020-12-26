import { Instruction, Instructions, InstructionType } from './types';

const render = (context: CanvasRenderingContext2D) => (
  instructions: Instructions = []
) => {
  context.clearRect(0, 0, 0, 0);

  instructions.forEach((inst: Instruction) => {
    switch (inst.type) {
      case InstructionType.DRAW_RECT: {
        context.fillStyle = inst.data.color;
        context.fillRect(inst.data.x, inst.data.y, inst.data.w, inst.data.h);
        break;
      }
      case InstructionType.DRAW_IMAGE: {
        context.drawImage(inst.data.image, inst.data.x, inst.data.y);
        break;
      }
      default:
        break;
    }
  });
};

export default render;
