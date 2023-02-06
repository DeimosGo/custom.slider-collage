import styled, { keyframes } from 'styled-components';
interface Props {
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number,
}

const backAnimation = keyframes`
0%{
  background-color:  #DADADA
}

50%{
  background-color:  #C4C4C4
}

100%{
  background-color:  #DADADA
}

`;
const GridItem = styled.div<Props>`
width: 100%;
height: 100%;
background-color: #DADADA;
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
animation: ${backAnimation} 2s linear infinite;
& a {
  width: 100%;
  height: 100%;
}
`;

export { GridItem };
