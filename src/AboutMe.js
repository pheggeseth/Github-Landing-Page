import React from 'react';
import { 
  CardContainer, 
  Card, 
  CardHeadline, 
  CardTitle, 
  CardBody 
} from './CardComponents';

export const AboutMe = props => (
  <CardContainer {...props}>
    <Card>
      <CardTitle>About Me</CardTitle>
      <CardHeadline>I love crafting creative solutions to complex, interesting problems.</CardHeadline>
      <CardBody>
        Hi! I'm Paul, and I'm a Full-Stack Web Developer.
        I have the creativity and persistence of a conservatory-trained musician, 
        the inquisitive mind of a philosopher, 
        and the analytical brain of an engineer.
        Please expore this page to learn more about my skills and experience.
        I'd love to connect about any questions you may have, or about potential employment opportunities!
      </CardBody>
    </Card>
  </CardContainer>
);