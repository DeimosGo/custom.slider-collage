type imageElement = {
  position: position,
  imageUrl: string,
  altText: string,
  desktopImage: string,
  mobileImage: string
};

type position = {
  gridRowStart: number,
  gridRowEnd: number,
  gridColStart: number,
  gridColEnd: number,
}

type images = {
  images: imageElement,
}

type SliderCollageProps = {
  imageList: images[]
}

export { imageElement, images, SliderCollageProps };
