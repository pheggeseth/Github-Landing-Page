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
        Not afraid of taking risks in pursuit of efficient, elegant applications, 
        I am deeply motivated to push the envelope of my skills, 
        diving into both new technologies and the intricacies of existing ones 
        in search of the deeper “why.” 
        Nothing excites me more than learning from past struggles and failures 
        in order to open up new possibilities.
        Please expore this page to learn more about my skills and experience.
        I'd love to connect about any questions you may have, or about potential employment opportunities!
      </CardBody>
    </Card>
  </CardContainer>
);