import React from 'react';
import { useHistory } from 'react-router-dom';
import tw from 'twin.macro';

import SwitchFrame from '../../layout/SwitchFrame';
import Button from '../shared/Button';
import Title from '../shared/Title';
import Message from './Message';
import ContentWrapper from './ContentWrapper';

import {
  appURL,
  resultButtonText,
  resultTitleTextObj
}
from '../../game-config';


const Result = ({gameStore}) => {
  const history = useHistory();

  const correct = gameStore.correct;
  const incorrect = gameStore.times - gameStore.correct;
  const resultTitleText = correct > incorrect ? resultTitleTextObj.win : resultTitleTextObj.lose;

  return (
    <SwitchFrame>
      <div tw="grid grid-rows-3 grid-cols-2">
        <ContentWrapper>
          <Title>{resultTitleText}</Title>
        </ContentWrapper>
        <ContentWrapper>
          <Message tw="pr-10">{correct}問 正解</Message>
          <Message>{incorrect}問 不正解</Message>
        </ContentWrapper>
        <ContentWrapper>
          <Button onClick={() => history.push(appURL.top)}>{resultButtonText}</Button>
        </ContentWrapper>
      </div>
    </SwitchFrame>
  );
}

export default Result;