import createElement from './createElement';

import * as Renderer from './Renderer';
import type { RendererT } from './Renderer'

const create = (width: number, height: number): RendererT => {
  const canvasElement = createElement(width, height);
  const context = canvasElement.getContext('2d');

  return { render: Renderer.render(context!), clear: Renderer.clear(context!), };
};

export default create;
