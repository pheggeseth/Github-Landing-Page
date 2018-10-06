import React from 'react';
// import styled from 'styled-components';

import {
  // DESKTOP_BREAKPOINT,
  // TABLET_BREAKPOINT,
  // MOBILE_BREAKPOINT,
  // CONTENT_MARGIN,
  // CARD_PADDING,
  // BOX_SHADOWS,
  // COLORS
} from './constants';
import { 
  // CardsContainer, 
  CardContainer, 
  Card, 
  // CardBody, 
  // CardImage, 
  // CardContent, 
  CardHeadline, 
  // CardTitle 
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

// const SkillsGrid = styled.div`
//   margin-top: 15px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-auto-rows: 120px;
//   grid-gap: 15px;
// `;

// const SkillTile = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-size: 14px;

//   & > div.icon-container {
//     display: flex;
//     align-items: center;
//     flex-grow: 1;
//   }

//   & > div.icon-container > svg {
//     // width: calc((100% - 30px) / 3);
//     width 100%;
//     max-width: 75px;
//     // filter: saturate(90%);
//   }
// `;



// const Skill = props => (
//   <SkillTile>
//     <div className="icon-container">
//       {/* <img src={ICONS[props.name]} alt={props.name}/> */}
//       {icons[props.name]}
//     </div>
//     <div>{props.name}</div>
//   </SkillTile>
// );



// const Skills = props => (
//   <CardContainer {...props}>
//     <Card {...props}>
//       <CardHeadline {...props}>Skills</CardHeadline>
//       <SkillsGrid>
      
//         {/* <SkillTile>
//           <div className="icon-container">
//             {icons['React']}
//           </div>
//           <div>React</div>
//         </SkillTile> */}
//         <Skill name="React" />
//         <Skill name="AngularJS" />
//         <Skill name="Node.js" />
//         <Skill name="Express" />
//         <Skill name="Redux" />
//         <Skill name="Redux-Saga" />
//         <Skill name="PostgreSQL" />
//         <Skill name="MongoDB" />
//         <Skill name="JavaScript" />
//         <Skill name="HTML" />
//         <Skill name="CSS" />
//         {/* <SkillTile>
//           <div className="icon-container">
//             <img src={ICONS['styled-components']} alt="styled-components" />
//           </div>
//           <div>styled-comp</div>
//         </SkillTile> */}
//       </SkillsGrid>
//     </Card>
//   </CardContainer>
// );