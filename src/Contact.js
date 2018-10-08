import React from 'react';
import styled from 'styled-components';

import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import gravatar from './images/gravatar.jpg';

import { STYLE_CONSTANTS } from './constants';

import { 
  CardContainer, 
  Card, 
  CardImage, 
  CardHeadline, 
  CardTitle, 
  CardContent, 
} from './CardComponents';

const Gravatar = styled.div`
  height: 175px;
  width: 100%;
  max-width: 175px;
  background-image: url(${gravatar});
  background-size: cover;
  border-radius: 15px;
  box-shadow: 
    0 3px 6px rgba(0,0,0,0.2),
    0 1px 3px rgba(0,0,0,0.4);
  // margin: ${STYLE_CONSTANTS.CONTENT_MARGIN}px auto;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactMethod = styled.li`
  height: 30px;
  // border: 1px solid black;
  margin-bottom: 5px;
  display: flex;
  align-items: stretch;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > .contact-icon {
    width: 25px;
  }
  & > .contact-icon > svg {
    height: 100%;
    width: 100%;
  }
  & > .contact-detail {
    font-size: 1.1em;
    margin-bottom: 2px;
    padding-left: 10px;
  }
`;

export const Contact = props => (
  <CardContainer {...props}>
    <Card withImage>
      <CardImage color={STYLE_CONSTANTS.COLORS.MAIN_BLUE} height="180px">
        <Gravatar />
      </CardImage>
      <CardContent>
        <CardTitle>Contact</CardTitle>
        <CardHeadline>Paul Heggeseth</CardHeadline>
        <ContactList>
          <ContactMethod>
            <span className="contact-icon"><FontAwesomeIcon icon={faPhoneSquare} /></span>
            <span className="contact-detail">(413) 672-7334</span>
          </ContactMethod>
          <ContactMethod>
            <span className="contact-icon"><FontAwesomeIcon icon={faEnvelopeSquare} /></span>
            <span className="contact-detail"><a href="mailto:pheggeseth@gmail.com">pheggeseth@gmail.com</a></span>
          </ContactMethod>
          <ContactMethod>
            <span className="contact-icon"><FontAwesomeIcon icon={faGithub} /></span>
            <span className="contact-detail"><a href="https://github.com/pheggeseth" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          </ContactMethod>
          <ContactMethod>
            <span className="contact-icon"><FontAwesomeIcon icon={faLinkedin} /></span>
            <span className="contact-detail"><a href="https://www.linkedin.com/in/paul-heggeseth-44913132/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          </ContactMethod>
        </ContactList>
      </CardContent>
    </Card>
  </CardContainer>
);