import React from 'react';
import Slider from './Slider';
import Collage from './Collage';
import { IMAGES } from './typings/sliderItem';
import { SliderCollageProps } from './typings/images.types';


const SliderCollage = ({ imageList }: SliderCollageProps) => {
  const [showSlider, setShowSlider] = React.useState(true);
  const [loadComponents, setLoadComponents] = React.useState(false);
  const [loadingMobile, setLoadingMobile] = React.useState(true);
  const [loadingDesktop, setLoadingDesktop] = React.useState(true);

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
            loading={loadingMobile}
            setLoading={setLoadingMobile}
            imageList={imageList}
          />
        )
      }
      {
        (!!imageList && !showSlider && loadComponents) && (
          <Collage
            loading={loadingDesktop}
            setLoading={setLoadingDesktop}
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
