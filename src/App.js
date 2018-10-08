import React, { Component } from 'react';
import styled from 'styled-components';

import { STYLE_CONSTANTS } from './constants';

import { 
  CardsContainer, 
} from './CardComponents';

import { AboutMe } from './AboutMe';
import { Contact } from './Contact';
import { Skills } from './Skills';
import { AboutThisPage } from './AboutThisPage';
import { SoloProject } from './SoloProject';
import { GroupProject } from './GroupProject';
import { AngularJSCapstone } from './AngularJSCapstone';
import { ReactBattleship } from './ReactBattleship';

const Container = styled.div`
  background-color: ${STYLE_CONSTANTS.COLORS.BACKGROUND};
`;

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