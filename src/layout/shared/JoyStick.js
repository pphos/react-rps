import tw, { css, styled } from 'twin.macro';


const JoyStick = styled.div(({top, bottom}) => [
  tw`absolute rounded-full bg-black`,
  top && css`top: ${top};`,
  bottom && css`bottom: ${bottom};`,
  css`
    left: 30%;
    width: 3.46vw;
    height: 7.24vh;
  `
]);

export default JoyStick;