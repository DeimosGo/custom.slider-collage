import React from 'react';
import { SliderCollageProps } from '../typings/images.types';
import { GridItem } from '../styles/CollageStyles';
import collageStyles from '../styles/Collage.css';

const Collage = ({ imageList }: SliderCollageProps) => {
  return (
    <div className={collageStyles.collage__contaner}>
      <div className={collageStyles.grid__container__mother}>
        {
          !!imageList && (
            imageList.map((item, index) => (
              <GridItem
                rounded={false}
                key={item.images.desktopImage}
                colStart={item.images.position.gridColStart}
                colEnd={item.images.position.gridColEnd}
                rowStart={item.images.position.gridRowStart}
                rowEnd={item.images.position.gridRowEnd}>
                <a className={collageStyles.url__image__mother}
                  href={item.images.imageUrl}>
                  <img
                    className={collageStyles.grid__image__mother}
                    src={item.images.desktopImage}
                    alt={item.images.altText}
                  />
                  <p style={
                    (index === 0)
                      ? { fontSize: '50px' }
                      : {}}>
                    {item.images.altText}
                  </p>
                </a>
              </GridItem>
            ))
          )
        }
      </div>
    </div>
  );
}

export default Collage;
