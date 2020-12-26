export const loadImage = (image: HTMLImageElement): Promise<void> => {
  return new Promise((resolve, reject) => {
    image.onload = () => {
      resolve();
    };

    image.onerror = err => {
      reject(err);
    };
  });
};

interface TextureDictionary {
  [key: number]: HTMLImageElement;
}

let textureMap: TextureDictionary = {};
let textureCounter = 0;

export const textureFromImageUrl = async (
  imageUrl: string
): Promise<number> => {
  const img = new Image();
  img.src = imageUrl;

  await loadImage(img);
  textureMap[textureCounter++] = img;
  return textureCounter;
};

export const textureFromImage = async (
  image: HTMLImageElement
): Promise<number> => {
  await loadImage(image);
  textureMap[textureCounter++] = image;
  return textureCounter;
};
