import React, { Component } from 'react';
import styled from 'styled-components';
import gravatar from './images/gravatar.jpg';

const MOBILE_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1024;

const Container = styled.div`
  max-width: ${DESKTOP_BREAKPOINT}px;
  margin: 0 auto;
`;

const Resume = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: 
    0 3px 6px rgba(0,0,0,0.125),
    0 1px 3px rgba(0,0,0,0.25);
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media only screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    margin: 40px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
`;

const Gravatar = styled.div`
  height: 0;
  width: 75%;
  padding-bottom: 75%;
  background-image: url(${gravatar});
  background-size: cover;
  border-radius: 50%;
  box-shadow: 
    0 3px 6px rgba(0,0,0,0.2),
    0 1px 3px rgba(0,0,0,0.4);
  margin: 0 auto;
  
`;

const Sidebar = styled.div`
  border: 1px solid black;
  background-color: inherit;
  padding: 10px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 200px;
    display: ${props => props.mobileToggle ? 'block' : 'none'};
    position: fixed;
  }
`;

const SidebarMobileToggle = styled.button`
  height: 50px;
  width: 50px;
  background-color: lightpink;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: none;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

const Content = styled.div`
  background-color: inherit;
  border: 1px solid black;
  filter: brightness(${props => props.dim ? 0.8 : 1});
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarVisible: false
    };
    this.contentRef = React.createRef();
  }
  
  handleWindowRisize = event => {
    if (this.state.sidebarVisible && event.target.innerWidth > MOBILE_BREAKPOINT) {
      window.removeEventListener('resize', this.handleWindowRisize);
      this.setState({
        sidebarVisible: false
      });
    }
  }

  showMobileSidebar = () => {
    document.addEventListener('click', this.handleClickAway, false);
    window.addEventListener('resize', this.handleWindowRisize);
    this.setState({
      sidebarVisible: true
    });
  };

  hideMobileSidebar = () => {
    this.setState({
      sidebarVisible: false
    });
  };

  handleClickAway = event => {
    if (event.target.id === 'content') {
      document.removeEventListener('click', this.handleClickAway, false);
      this.hideMobileSidebar();
    }
  };

  render() {
    return (
      <Container>
        <Resume ref={this.contentRef}>
          <SidebarMobileToggle onClick={this.showMobileSidebar}>
            Toggle
          </SidebarMobileToggle>
          <Sidebar mobileToggle={this.state.sidebarVisible}>
            <Gravatar />
          </Sidebar>
          <Content id="content" dim={this.state.sidebarVisible}>
            Hello world
          </Content>
        </Resume>
      </Container>
    );
  }
}

export default App;
