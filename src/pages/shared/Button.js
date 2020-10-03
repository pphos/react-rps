import tw, { css, styled } from 'twin.macro';


const Button = styled.button(() => [
  tw`w-3/4 border-2 border-blue-500 px-4 py-2 text-blue-500 rounded`,
  tw`hover:text-white hover:bg-blue-500`,
  css `
    font-size: 1.4vw;
  `
]);

export default Button;