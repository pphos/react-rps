import tw, { css, styled } from 'twin.macro';


const DPad = styled.div(({top, right, bottom, left}) => [
  tw`absolute rounded-full bg-black`,
  top && css`top: ${top};`,
  right && css`right: ${right};`,
  bottom && css`bottom: ${bottom};`,
  left && css`left: ${left};`,
  css`
    width: 1.73vw;
    height: 3.61vh;
  `,
]);

export default DPad;