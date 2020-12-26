import create from '.';

const createElement = (width: number, height: number): HTMLCanvasElement => {
  const canvasElement = document.createElement('canvas');
  canvasElement.width = width;
  canvasElement.height = height;

  document.body.appendChild(canvasElement);

  return canvasElement;
};

export default createElement;
