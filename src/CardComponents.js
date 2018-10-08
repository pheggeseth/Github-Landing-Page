import styled from 'styled-components';

import { STYLE_CONSTANTS } from './constants';

export const CardsContainer = styled.div`
  max-width: ${STYLE_CONSTANTS.DESKTOP_BREAKPOINT - STYLE_CONSTANTS.CONTENT_MARGIN * 2}px;
  padding: ${STYLE_CONSTANTS.CONTENT_MARGIN}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${STYLE_CONSTANTS.CONTENT_MARGIN}px;

  @media only screen and (max-width: ${STYLE_CONSTANTS.MOBILE_BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: ${STYLE_CONSTANTS.TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat (2, 1fr);
  }
`;

export const CardContainer = styled.div`
  grid-row-end: ${props => props.rows ? 'span '+props.rows : ''};
  grid-column-end: ${props => props.columns ? 'span '+props.columns : ''};
  
  @media only screen and (max-width: ${STYLE_CONSTANTS.MOBILE_BREAKPOINT}px) {
    margin-bottom: ${STYLE_CONSTANTS.CONTENT_MARGIN}px;
  }
`;

export const CardContent = styled.div`
  // padding: 0 ${STYLE_CONSTANTS.CARD_PADDING}px;
`;

export const Card = styled.div`
  // height: calc(100% - ${STYLE_CONSTANTS.CARD_PADDING * 2}px);
  border-radius: 5px;
  box-shadow: ${STYLE_CONSTANTS.BOX_SHADOWS[0]};
  background-color: ${STYLE_CONSTANTS.COLORS.CARD_WHITE};
  color: ${STYLE_CONSTANTS.COLORS.BLACK};
  padding: ${STYLE_CONSTANTS.CARD_PADDING}px;
  margin-top: 0px;
  

  ${props => props.withImage
  ? `margin-top: ${STYLE_CONSTANTS.CARD_IMAGE_HANGOVER}px;
     height: calc(100% - ${STYLE_CONSTANTS.CARD_PADDING * 2 + STYLE_CONSTANTS.CARD_IMAGE_HANGOVER}px);`
  : ''}

  ${props => {
    if (props.darkAccent) {
      return `
        background-color: ${STYLE_CONSTANTS.COLORS.DARK_ACCENT_BROWN};
        color: ${STYLE_CONSTANTS.COLORS.CARD_WHITE};
      `;
    } else if (props.black) {
      return `
        background-color: ${STYLE_CONSTANTS.COLORS.BLACK};
        color: ${STYLE_CONSTANTS.COLORS.CARD_WHITE};
      `;
    } else {
      return '';
    }
  }}

  // transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

export const CardImage  = styled(Card)`
  width: calc(100% - ${STYLE_CONSTANTS.CARD_PADDING}px);
  height: ${props => props.height};
  background-color: ${props => props.color};
  box-shadow: 0 10px 25px -5px rgba(0,0,0, 0.4), 0 10px 15px -10px rgba(0,0,0, 0.5);
  margin: 0 auto;
  position: relative;
  top: -${STYLE_CONSTANTS.CARD_IMAGE_HANGOVER + STYLE_CONSTANTS.CARD_PADDING}px;
  right: 15px;
  margin-bottom: -${STYLE_CONSTANTS.CARD_IMAGE_HANGOVER}px;
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: auto;
`;

export const CardHeadline = styled.h2`
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Bitter, serif'};
  font-size: 20px;
  color: ${props => props.darkAccent ? STYLE_CONSTANTS.COLORS.CARD_WHITE : STYLE_CONSTANTS.COLORS.BLACK};
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
  color: ${STYLE_CONSTANTS.COLORS.MAIN_BLUE};

  ${({darkAcent, black}) => {
    if (darkAcent) return `color: ${STYLE_CONSTANTS.COLORS.DARK_ACCENT_BROWN};`;
    else if (black) return `color: ${STYLE_CONSTANTS.COLORS.CARD_WHITE};`;
  }}
  // color: ${props => props.darkAccent ? STYLE_CONSTANTS.COLORS.CARD_WHITE : STYLE_CONSTANTS.COLORS.MAIN_BLUE};
  margin: 0;
  margin-bottom: ${STYLE_CONSTANTS.CARD_PADDING / 2}px;
`;