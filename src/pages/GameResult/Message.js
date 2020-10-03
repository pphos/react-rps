import tw, { css, styled } from 'twin.macro';

const Message = styled.div(() => [
  tw`font-semibold`,
  css`
    font-size: 2vw;
  `
]);

export default Message;