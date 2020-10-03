import React from 'react';
import tw, { css, styled } from 'twin.macro';

import JoyStick from '../shared/JoyStick';
import DPad from '../shared/DPad';
import PlusSign from './PlusSign';
import SmallCircle from './SmallCircle';


const StyledJoyConRight = styled.div(() => [
  tw`relative bg-red-600`,
  css`
    border-radius: 0 4rem 4rem 0;
  `,
]);

const SwitchJoyConRight = () => {
  return (
    <StyledJoyConRight>
      <JoyStick bottom={"20%"} />
      <PlusSign />
      <DPad bottom={"55%"} left={"38.5%"} />
      <DPad bottom={"70%"} left={"38.5%"} />
      <DPad bottom={"62.5%"} left={"18.5%"} />
      <DPad bottom={"62.5%"} right={"25%"} />
      <SmallCircle />
    </StyledJoyConRight>
  );
}

export default SwitchJoyConRight;