import styled from 'styled-components';

import {
  DESKTOP_BREAKPOINT,
  TABLET_BREAKPOINT,
  MOBILE_BREAKPOINT,
  CONTENT_MARGIN,
  CARD_PADDING,
  BOX_SHADOWS,
  CARD_IMAGE_HANGOVER,
  COLORS
} from './constants';

export const CardsContainer = styled.div`
  max-width: ${DESKTOP_BREAKPOINT - CONTENT_MARGIN * 2}px;
  padding: ${CONTENT_MARGIN}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${CONTENT_MARGIN}px;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat (2, 1fr);
  }
`;

export const CardContainer = styled.div`
  grid-row-end: ${props => props.rows ? 'span '+props.rows : ''};
  grid-column-end: ${props => props.columns ? 'span '+props.columns : ''};
  
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-bottom: ${CONTENT_MARGIN}px;
  }
`;

export const CardContent = styled.div`
  // padding: 0 ${CARD_PADDING}px;
`;

export const Card = styled.div`
  // height: calc(100% - ${CARD_PADDING * 2}px);
  border-radius: 5px;
  box-shadow: ${BOX_SHADOWS[0]};
  background-color: ${COLORS.CARD_WHITE};
  color: ${COLORS.BLACK};
  padding: ${CARD_PADDING}px;
  margin-top: 0px;
  

  ${props => props.withImage
  ? `margin-top: ${CARD_IMAGE_HANGOVER}px;
     height: calc(100% - ${CARD_PADDING * 2 + CARD_IMAGE_HANGOVER}px);`
  : ''}

  ${props => {
    if (props.darkAccent) {
      return `
        background-color: ${COLORS.DARK_ACCENT_BROWN};
        color: ${COLORS.CARD_WHITE};
      `;
    } else if (props.black) {
      return `
        background-color: ${COLORS.BLACK};
        color: ${COLORS.CARD_WHITE};
      `;
    } else {
      return '';
    }
  }}

  // transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

export const CardImage  = styled(Card)`
  width: calc(100% - ${CARD_PADDING}px);
  height: ${props => props.height};
  background-color: ${props => props.color};
  box-shadow: 0 10px 25px -5px rgba(0,0,0, 0.4), 0 10px 15px -10px rgba(0,0,0, 0.5);
  margin: 0 auto;
  position: relative;
  top: -${CARD_IMAGE_HANGOVER + CARD_PADDING}px;
  right: 15px;
  margin-bottom: -${CARD_IMAGE_HANGOVER}px;
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: auto;
`;

export const CardHeadline = styled.h2`
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Bitter, serif'};
  font-size: 20px;
  color: ${props => props.darkAccent ? COLORS.CARD_WHITE : COLORS.BLACK};
  margin: 0;
`;

export const CardBody = styled.div`
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;

export const CardTitle = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${COLORS.MAIN_BLUE};

  ${({darkAcent, black}) => {
    if (darkAcent) return `color: ${COLORS.DARK_ACCENT_BROWN};`;
    else if (black) return `color: ${COLORS.CARD_WHITE};`;
  }}
  // color: ${props => props.darkAccent ? COLORS.CARD_WHITE : COLORS.MAIN_BLUE};
  margin: 0;
  margin-bottom: ${CARD_PADDING / 2}px;
`;