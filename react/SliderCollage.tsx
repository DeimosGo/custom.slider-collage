import React from 'react';
import Slider from './Slider';
import Collage from './Collage';
import { IMAGES } from './typings/sliderItem';
import { SliderCollageProps } from './typings/images.types';


const SliderCollage = ({ imageList }: SliderCollageProps) => {
  const [showSlider, setShowSlider] = React.useState(true);
  const [loadComponents, setLoadComponents] = React.useState(false);

  React.useEffect(() => {
    const initialWidth = window.innerWidth;
    const condition = (initialWidth < 721);
    setShowSlider(condition);
    setLoadComponents(true);
    function displayWindowSize() {
      if (window.innerWidth < 721) {
        setShowSlider(true)
      } else {
        setShowSlider(false);
      }
      setLoadComponents(true);
    }
    window.addEventListener("resize", displayWindowSize);
  }, []);


  return (
    <>
      {
        (!!imageList && !!showSlider && loadComponents) && (
          <Slider
            imageList={imageList}
          />
        )
      }
      {
        (!!imageList && !showSlider && loadComponents) && (
          <Collage
            imageList={imageList}
          />
        )
      }
    </>
  );
}

SliderCollage.schema = {
  title: 'Slider-Collage',
  type: 'object',
  properties: {
    imageList: {
      type: 'array',
      title: 'Image List',
      items: {
        properties: IMAGES
      },
    }
  },
};

export default SliderCollage
