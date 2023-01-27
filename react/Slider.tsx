import React from "react"
import Glide from "@glidejs/glide";
import glideStyles from "./styles/glide.core.min.css";
import { ChildProps } from './typings/images.types';
import { SliderItem } from './styles/SliderStyles';
import MobileSkeleton from './LoadingComponents/MobileSkeleton';

const Slider = ({ imageList, loading, setLoading }: ChildProps) => {
  const slider = new Glide('.footloose-custom-slider-collage-0-x-glide', {
    gap: 18,
    peek: 60,
    perView: 2,
    type: 'carousel'
  });

  const loaded = (index: number) => {
    if (index === (imageList.length - 1)) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    slider.mount();
  }, []);

  return (
    <>
      <div className={glideStyles.glide}>
        <div className={glideStyles.glide__track} data-glide-el='track'>
          <ul className={glideStyles.glide__slides}>
            {
              !!imageList && imageList.map((item, index) => (
                <li key={item.images.desktopImage}
                  className={glideStyles.glide__slide + ' ' + glideStyles.slider}>
                  <a className={glideStyles.slide__url} href={item.images.imageUrl}>
                    <SliderItem
                      src={item.images.mobileImage}
                      onLoad={() => loaded(index)}
                      alt={item.images.altText} />
                  </a>
                </li>
              ))
            }
          </ul>

        </div>
        <div className={glideStyles.glide__bullets} data-glide-el="controls[nav]">
          <button className={glideStyles.glide__bullet} data-glide-dir="=0"></button>
          <button className={glideStyles.glide__bullet} data-glide-dir="=2"></button>
          <button className={glideStyles.glide__bullet} data-glide-dir="=4"></button>
        </div>
        {!!loading && <MobileSkeleton />}
      </div>
    </>
  )
}

export default Slider
