import Slider from './Slider';
import Collage from './Collage';
import { IMAGES } from '../typings/sliderItem';
import { SliderCollageProps } from '../typings/images.types';
import { defaultImageList } from "../utils/defaultData";
import React from 'react';


const SliderCollage = ({ imageList }: SliderCollageProps) => {
  const [showSlider, setShowSlider] = React.useState(true);
  const [loadComponents, setLoadComponents] = React.useState(false);
  const [imageListArray, setImageListArray] = React.useState(defaultImageList.imageList);
  React.useEffect(() => {
    if (imageList) {
      setImageListArray(imageList);
    }
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
    <div style={{
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem"
    }}>
      {
        (!!showSlider && loadComponents) && (
          <Slider
            imageList={imageListArray}
          />
        )
      }
      {
        (!showSlider && loadComponents) && (
          <Collage
            imageList={imageListArray}
          />
        )
      }
    </div>
  );
}

SliderCollage.schema = {
  title: 'Slider-Collage-Mothers',
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

export { SliderCollage };
