import create from '../.';

import hero from './hero_front.png';

const img = new Image();
img.src = hero;

const renderer = create(200, 200);

img.onload = () => {
  renderer.render([
    {
      type: 'DRAW_RECT',
      data: {
        color: 'red',
        x: 10,
        y: 10,
        width: 100,
        height: 100,
      },
    },
    {
      type: 'DRAW_RECT',
      data: {
        color: 'blue',
        x: 50,
        y: 50,
        width: 100,
        height: 100,
      },
    },
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
