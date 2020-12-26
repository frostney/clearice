import create, { Rect } from '../.';

import hero from './hero_front.png';

const img = new Image();
img.src = hero;

const renderer = create(200, 200);

img.onload = () => {
  renderer.render([
    Rect({
      color: 'red',
      x: 10,
      y: 10,
      w: 100,
      h: 100,
    }),
    Rect({
      color: 'blue',
      x: 50,
      y: 50,
      w: 100,
      h: 100,
    }),
    {
      type: 'DRAW_IMAGE',
      data: {
        image: img,
        x: 20,
        y: 20,
      },
    },
  ]);
};
