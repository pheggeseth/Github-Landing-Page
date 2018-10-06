import React from 'react';

import { 
  CardContainer, 
  Card, 
  CardBody, 
  CardTitle,
  CardHeadline, 
} from './CardComponents';

export const AngularJSCapstone = props => (
  <CardContainer {...props}>
    <Card {...props}>
      <CardTitle {...props}>AngularJS Solo Project</CardTitle>
      <CardHeadline fontFamily="'Press Start 2P'">Punch-Out!!</CardHeadline>
      <CardBody {...props}>
        As a capstone to learning AngularJS at Prime Digital Academy, 
        I was tasked with created a full-stack application in one weekend. 
        I chose to make a project time tracker application called Punch Out, inspired by the classic Nintendo game. 
        Repo's on <a href="https://github.com/pheggeseth/Punch-Out" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://ancient-lake-49937.herokuapp.com" target="_blank" rel="noopener noreferrer">Heroku</a>.
      </CardBody>
    </Card>
  </CardContainer>
);