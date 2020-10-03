import tw, { css, styled } from 'twin.macro';


const SmallSquare = styled.div(() => [
  tw`absolute rounded-md bg-black`,
  css`
    top: 85%;
    right: 10%;
    width: 1.73vw;
    height: 3.62vh;
  `,
]);

export default SmallSquare;