import styled from 'styled-components';
import { ReactComponent as Cat } from 'staticImages/catUp.svg';
import { device } from '../../../devices';

const ImageBc = styled('img')`
  width: 100%;
  height: 100%;
`;

const Grid = styled('ul')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 32px;
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, 336px);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fill, 288px);
  }
`;

const Scroll = styled(Cat)`
  width: 60px;
  height: 60px;
  background: transparent;
  fill: ${props => props.theme.colors.accent};
  border-radius: 50%;
  position: fixed;
  bottom: 15px;
  right: 35px;
  cursor: pointer;
  transition: 0.3s all;

  :hover,
  :focus {
    filter: drop-shadow(0px 0px 30px red);
  }

  @media ${device.tablet} {
    bottom: 50px;
    right: 50px;
  }
`;

const style = { Scroll, Grid, ImageBc };

export default style;
