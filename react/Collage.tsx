import React from 'react';
import { SliderCollageProps } from './typings/images.types';
import { GridItem } from './styles/CollageStyles';
import collageStyles from './styles/Collage.css';

const Collage = ({ imageList }: SliderCollageProps) => {
  return (
    <div className={collageStyles.collage__contaner}>
      <div className={collageStyles.grid__container}>
        {
          !!imageList && (
            imageList.map((item) => (
              <GridItem
                key={item.images.desktopImage}
                colStart={item.images.position.gridColStart}
                colEnd={item.images.position.gridColEnd}
                rowStart={item.images.position.gridRowStart}
                rowEnd={item.images.position.gridRowEnd}>
                <a href={item.images.imageUrl}>
                  <img
                    className={collageStyles.grid__image}
                    src={item.images.desktopImage}
                    alt={item.images.altText}
                  />
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
