import React from 'react';
import tw, { css, styled } from 'twin.macro';


const StyledPlusSign1 = styled.div(() => [
  tw`absolute rounded-md bg-black`,
  css`
    top: 2.5%;
    right: 77%;
    width: 5%;
    height: 7.3%;
  `
]);

const StyledPlusSign2 = styled.div(() => [
  tw`absolute rounded-md bg-black`,
  css`
    top: 5.1%;
    right: 70%;
    width: 19%;
    height: 2%;
  `
]);

const PlusSign = () => {
  return (
    <>
      <StyledPlusSign1></StyledPlusSign1>
      <StyledPlusSign2></StyledPlusSign2>
    </>
  );
}

export default PlusSign;