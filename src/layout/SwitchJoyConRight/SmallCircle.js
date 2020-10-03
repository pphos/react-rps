import tw, { css, styled } from 'twin.macro';


const SmallCircle = styled.div(() => [
  tw`absolute rounded-full bg-black`,
  css`
    top: 85%;
    left: 10%;
    width: 1.73vw;
    height: 3.60vh;
  `,
]);

export default SmallCircle;