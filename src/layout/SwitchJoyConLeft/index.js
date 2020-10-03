import React from 'react';
import tw, { css, styled } from 'twin.macro';

import JoyStick from '../shared/JoyStick';
import DPad from '../shared/DPad';
import MinusSign from './MinusSign';
import SmallSquare from './SmallSquare';


const StyledJoyConLeft = styled.div(() => [
  tw`relative bg-blue-400`,
  css`
    border-radius: 4rem 0 0 4rem;
  `
]);

const SwitchJoyConLeft = () => {
  return (
    <StyledJoyConLeft>
      <JoyStick top={"15%"} />
      <MinusSign />
      <DPad top={"55%"} left={"38.5%"} />
      <DPad top={"70%"} left={"38.5%"} />
      <DPad top={"62.5%"} left={"18.5%"} />
      <DPad top={"62.5%"} right={"25%"} />
      <SmallSquare />
    </StyledJoyConLeft>
  );
}

export default SwitchJoyConLeft;