import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS } from './constants';

import { 
  CardsContainer, 
  CardContainer, 
  Card, 
  CardBody, 
  CardTitle 
} from './CardComponents';

import { AboutMe } from './AboutMe';
import { Contact } from './Contact';
import { Skills } from './Skills';
import { AboutThisPage } from './AboutThisPage';
import { SoloProject } from './SoloProject';
import { GroupProject } from './GroupProject';
import { AngularJSCapstone } from './AngularJSCapstone';

const Container = styled.div`
  background-color: ${COLORS.BACKGROUND};
`;

const ReactBattleship = props => (
  <CardContainer {...props}>
    <Card {...props}>
      <CardTitle {...props}>React Battleship</CardTitle>
      <CardBody>
        I tought myself React by building a two-player Battleship game.
      </CardBody>
    </Card>
  </CardContainer>
);

class App extends Component {
  render() {
    return (
      <Container>
        <CardsContainer>
          <AboutMe rows="1" columns="2" />
          <Contact rows="2" />
          <Skills darkAccent rows="2" />
          <AboutThisPage black />
          <SoloProject rows="2" columns="2" />
          <AngularJSCapstone />
          <GroupProject rows="2" columns="2" />
          <ReactBattleship black />
        </CardsContainer>
      </Container>
    );
  }
}

export default App;