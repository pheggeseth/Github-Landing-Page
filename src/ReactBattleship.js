import React from 'react';

import { 
  CardContainer, 
  Card, 
  CardBody, 
  CardTitle 
} from './CardComponents';

export const ReactBattleship = props => (
  <CardContainer {...props}>
    <Card {...props}>
      <CardTitle {...props}>React Battleship</CardTitle>
      <CardBody>
        In preparation for starting Prime Digital Academy, 
        I decided to work ahead by learning React on my own. 
        I got so carried away that I ended up building a two-player Battleship game, 
        teaching myself styled-components, and JavaScript functional programming along the way!
        Try it out on <a href="https://desolate-plains-20392.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku</a>, and see the code on <a href="https://github.com/pheggeseth/battleship-react" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </CardBody>
    </Card>
  </CardContainer>
);