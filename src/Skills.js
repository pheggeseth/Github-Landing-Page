import React from 'react';

import { 
  CardContainer, 
  Card, 
  CardHeadline, 
} from './CardComponents';

import { ICONS } from './skillIcons';

const Skill = props => (
  <div style={{height: '50px', display: 'flex', alignItems: 'center'}}>
    <div style={{height: '40px', width: '40px', display: 'flex', alignItems: 'center'}}>
      <div style={{width: '100%'}}>
        {ICONS[props.name]}
      </div>
    </div>
    <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px', fontSize: '1.3em'}}>
      {props.name}
    </div>
  </div>
);

export const Skills = props => (
  <CardContainer {...props}>
    <Card {...props}>
      <CardHeadline {...props}>Skills</CardHeadline>
      <Skill name="React" />
      <Skill name="AngularJS" />
      <Skill name="Node.js" />
      <Skill name="Express" />
      <Skill name="Redux" />
      <Skill name="Redux-Saga" />
      <Skill name="PostgreSQL" />
      <Skill name="MongoDB" />
      <Skill name="JavaScript" />
      <Skill name="HTML" />
      <Skill name="CSS" />
    </Card>
  </CardContainer>
);