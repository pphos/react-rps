import React from 'react';
import tw, { css, styled } from 'twin.macro';


const StyledContainer = styled.div(() => [
  tw`grid bg-white w-full h-full`,
  css`
    grid-template-columns: 1fr 5fr 1fr;
    border-radius: 3.2vw;
  `
]);

const Container = (props) => {
  return (
    <div tw="flex h-full justify-center items-center">
      <div css={`width: 75%; height: 56vh; margin-top: 20vh;`}>
        <StyledContainer>
          {props.children}
        </StyledContainer>
      </div>
    </div>
  );
}

export default Container;