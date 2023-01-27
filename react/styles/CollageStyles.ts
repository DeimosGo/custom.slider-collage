import styled from 'styled-components';

const CollageContainer = styled.div`
width: 100%;
/*max-height: 740px;*/
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
min-height: calc(100vw / 2.4);
object-fit: cover;
overflow: hidden;
box-sizing: border-box;
position: relative;
`;

const GridContainer = styled.div`
gap: 0.8rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
max-width: 1368px;
min-height: calc(100vw / 2.4);
margin: 12px auto;
box-sizing: border-box;
@media screen and (min-width: 1924px) {
  max-width: 94%;
}
@media screen and (max-width: 1400px) {
  width: 96%;
}
`;

interface Props {
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number,
}

const GridItem = styled.div<Props>`
width: 100%;
height: 100%;
grid-row-start: ${props => props.rowStart};
grid-row-end: ${props => props.rowEnd};
grid-column-start: ${props => props.colStart};
grid-column-end: ${props => props.colEnd};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
overflow: hidden;
border-radius: 8px;
position: relative;
transition: all .4s;
& a {
  width: 100%;
  height: 100%;
}
`;

const ImageGrid = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
transition: all .4s;
`;


export { GridContainer, GridItem, ImageGrid, CollageContainer };
