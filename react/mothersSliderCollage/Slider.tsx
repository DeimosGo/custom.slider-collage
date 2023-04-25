import React from "react"
import Glide from "@glidejs/glide";
import glideStyles from "../styles/glide.core.min.css";
import { SliderCollageProps } from '../typings/images.types';

const Slider = ({ imageList }: SliderCollageProps) => {
  const slider = new Glide('.slider-collage_slider', {
    gap: 0,
    peek: 5,
    perView: 1.6,
    type: 'carousel'
  });

  React.useEffect(() => {
    slider.mount();
  }, []);

  return (
    <>
      <div className={`${glideStyles.glide} slider-collage_slider`}>
        <div className={glideStyles.glide__track} data-glide-el='track'>
          <ul className={glideStyles.glide__slides__mother}>
            {
              !!imageList && imageList.map((item) => (
                <li key={item.images.desktopImage}
                  className={glideStyles.glide__slide + ' ' + glideStyles.slider}>
                  <a className={glideStyles.slide__url__mother} href={item.images.imageUrl}>
                    <p>
                      {item.images.altText}
                    </p>
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
          {
            imageList.map((el, index) => (
              <button key={el.images.altText} className={glideStyles.glide__bullet__mother} data-glide-dir={`=${index}}`}></button>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Slider
