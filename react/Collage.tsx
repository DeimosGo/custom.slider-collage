import React from 'react';
import { ChildProps } from './typings/images.types';
import { GridContainer, GridItem, ImageGrid, CollageContainer } from './styles/CollageStyles';
import DesktopSkeleton from './LoadingComponents/DesktopSkeleton';

const Collage = ({ imageList, loading, setLoading }: ChildProps) => {
  const loaded = (index: number) => {
    if (index == (imageList.length - 1)) {
      setLoading(false);
    }
  };
  return (
    <CollageContainer>
      {!!loading && <DesktopSkeleton />}
      <GridContainer>
        {
          !!imageList && (
            imageList.map((item, index) => (
              <GridItem
                key={item.images.desktopImage}
                colStart={item.images.position.gridColStart}
                colEnd={item.images.position.gridColEnd}
                rowStart={item.images.position.gridRowStart}
                rowEnd={item.images.position.gridRowEnd}>
                <a href={item.images.imageUrl}>
                  <ImageGrid
                    src={item.images.desktopImage}
                    alt={item.images.altText}
                    onLoad={() => loaded(index)}
                  />
                </a>
              </GridItem>
            ))
          )
        }
      </GridContainer>
    </CollageContainer>
  );
}

export default Collage;
