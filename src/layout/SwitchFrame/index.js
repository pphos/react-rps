import React from 'react';

import Container from './Container';
import Display from './Display';
import SwitchJoyConLeft from '../SwitchJoyConLeft';
import SwitchJoyConRight from '../SwitchJoyConRight';


const SwitchFrame = (props) => {
  return (
    <Container>
      <SwitchJoyConLeft />
      <Display>
        {props.children}
      </Display>
      <SwitchJoyConRight />
    </Container>
  );
}

export default SwitchFrame;
