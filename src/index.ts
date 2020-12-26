import { Renderer } from './types';

import createElement from './createElement';
import render from './render';

const create = (width: number, height: number): Renderer => {
  const canvasElement = createElement(width, height);
  const context = canvasElement.getContext('2d');

  return { render: render(context!) };
};

export default create;
