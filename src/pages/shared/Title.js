import tw, { css, styled } from 'twin.macro';


const Title = styled.h1(() => [
  tw`font-semibold text-center mb-10`,
  css`
    font-size: 4vw;
  `
]);

export default Title;