import tw, { css, styled } from 'twin.macro';


const MinusSign = styled.div(() => [
  tw`absolute rounded-lg bg-black`,
  css`
    top: 5%;
    left: 70%;
    width: 1.7vw;
    height: 0.90vh;
  `
]);

export default MinusSign;