import React from 'react';
import styled from 'styled-components';

import { COLORS } from './constants';

import { 
  CardContainer, 
  Card, 
  CardImage, 
  // CardHeadline, 
  CardTitle, 
  CardBody,
  // CardBody,
  // CardContent, 
} from './CardComponents';

const OddissiiImage = styled(CardImage)`
  background-color: ${COLORS.MAIN_BLUE};
  height: 125px;
  font-size: 80px;
  color: ${COLORS.CARD_WHITE};
  &::after {
    content: "odissii"
  }
`;

export const GroupProject = props => (
  <CardContainer {...props}>
    <Card withImage {...props}>
      <OddissiiImage />
      <CardTitle {...props}>Group Project</CardTitle>
      <CardBody {...props}>
        As my group project for Prime Digital Academy, 
        I collaborated directly with three other developers to help create odissi, 
        a mobile-first, progressive web app to help supervisors provide feedback
        and performance reviews to their employees in an equitable way,
        while allowing upper management to monitor supervisor feedback trends over time.
      </CardBody>
    </Card>
  </CardContainer>
);