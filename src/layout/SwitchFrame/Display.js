import React from 'react';
import tw, { css, styled } from 'twin.macro';


const StyledDisplay = styled.div(() => [
  tw`relative rounded-lg bg-white`,
  css`
    top: 5%;
    left: 2.5%;
    width: 95%;
    height: 50.30vh;
  `,
]);

const Display = (props) => {
  return (
    <div tw="bg-black">
      <StyledDisplay>
        {props.children}
      </StyledDisplay>
    </div>
  );
}

export default Display;