import React from 'react';

import { 
  // CardsContainer, 
  CardContainer, 
  Card, 
  CardBody, 
  CardTitle 
} from './CardComponents';

export const AboutThisPage = props => (
  <CardContainer {...props}>
    <Card {...props}>
      <CardTitle {...props}>About This Page</CardTitle>
      <CardBody {...props}>
        This landing page is not a cookie-cutter template. I custom-built it with React, styled-components, and CSS Grid.
        Checkout the <a href="https://github.com/pheggeseth/Github-Landing-Page" target="_blank" rel="noopener noreferrer">README</a> to learn more.
      </CardBody>
    </Card>
  </CardContainer>
);