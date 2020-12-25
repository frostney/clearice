import { Instructions, Instruction, InstructionType } from './types';

interface Renderer {
  render(iterations: Instructions): void;
}

const create = (width: number, height: number): Renderer => {
  const canvasElement = document.createElement('canvas');
  canvasElement.width = width;
  canvasElement.height = height;

  document.body.appendChild(canvasElement);

  const context = canvasElement.getContext('2d');

  return { render: render(context!) };
};

const render = (context: CanvasRenderingContext2D) => (
  iterations: Instructions = []
) => {
  console.log(context);

  context.clearRect(0, 0, 0, 0);

  iterations.forEach((iter: Instruction) => {
    switch (iter.type) {
      case InstructionType.DRAW_RECT: {
        const drIter = iter;

        context.fillStyle = drIter.data.color;
        context.fillRect(
          drIter.data.x,
          drIter.data.y,
          drIter.data.width,
          drIter.data.height
        );
        break;
      }
      case InstructionType.DRAW_IMAGE: {
        context.drawImage(iter.data.image, iter.data.x, iter.data.y);
        break;
      }
      default:
        break;
    }
  });
};

export default create;
