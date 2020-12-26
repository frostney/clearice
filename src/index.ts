import {
  Instructions,
  Instruction,
  InstructionType,
  RectData,
  Renderer,
} from './types';
import {
  DEFAULT_X,
  DEFAULT_Y,
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
} from './constants';

const loadImage = (image: HTMLImageElement): Promise<void> => {
  return new Promise((resolve, reject) => {
    image.onload = d => {
      resolve();
    };

    image.onerror = err => {
      reject(err);
    };
  });
};

let textureMap = {};

const textureFromImageUrl = (imageUrl: string): number => {
  const img = new Image();
  img.src = imageUrl;

  loadImage(img);

  return 0;
};

const textureFromImage = (image: HTMLImageElement): number => {
  return 0;
};

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

export const Rect = ({
  x = DEFAULT_X,
  y = DEFAULT_Y,
  w = DEFAULT_WIDTH,
  h = DEFAULT_HEIGHT,
  color,
}: RectData) => ({
  type: InstructionType.DRAW_RECT,
  data: { x, y, w, h, color },
});

export default create;
