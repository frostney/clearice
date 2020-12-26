import { Instructions, Instruction, InstructionType, Renderer } from './types';

const create = (width: number, height: number): Renderer => {
  const canvasElement = document.createElement('canvas');
  canvasElement.width = width;
  canvasElement.height = height;

  document.body.appendChild(canvasElement);

  const context = canvasElement.getContext('2d');

  return { render: render(context!) };
};

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

export default create;
