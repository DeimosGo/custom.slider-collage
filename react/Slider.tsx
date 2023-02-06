import React from "react"
import Glide from "@glidejs/glide";
import glideStyles from "./styles/glide.core.min.css";
import { SliderCollageProps } from './typings/images.types';

const Slider = ({ imageList }: SliderCollageProps) => {
  const slider = new Glide('.footloose-custom-slider-collage-0-x-glide', {
    gap: 0,
    peek: 5,
    perView: 2,
    type: 'carousel'
  });

  React.useEffect(() => {
    slider.mount();
  }, []);

  return (
    <>
      <div className={glideStyles.glide}>
        <div className={glideStyles.glide__track} data-glide-el='track'>
          <ul className={glideStyles.glide__slides}>
            {
              !!imageList && imageList.map((item) => (
                <li key={item.images.desktopImage}
                  className={glideStyles.glide__slide + ' ' + glideStyles.slider}>
                  <a className={glideStyles.slide__url} href={item.images.imageUrl}>
                    <img className={glideStyles.slider__item__image}
                      src={item.images.mobileImage}
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
        {/*!!loading && <MobileSkeleton />*/}
      </div>
    </>
  )
}

export default Slider
