import React from 'react';
import tw, { css, styled } from 'twin.macro';

const Correct = styled.div(() => [
  tw`
    rounded-full
    border-green-500 border-opacity-75
  `,
  css`
    width: 17vw;
    height: 33.93vh;
    border-width: 2vw;
  `
]);

const InCorrect = styled.div(() => [
  tw`
    transform rotate-45
    border-red-600 border-opacity-75
  `,
  css`
    width: 11vw;
    height: 33vh;
    border-bottom-width: 2vw;
    border-right-width: 2vw;
  `
])

const NoneDisplay = styled.div(() => [
  tw`hidden`
]);

const Judge = (props) => {
  const isAnswered = props.isAnswered;
  const isCorrect = props.isCorrect;

  if (isAnswered) {
    return isCorrect ? <Correct /> : <InCorrect />;
  }
  return <NoneDisplay />
}

export default Judge;