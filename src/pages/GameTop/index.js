import React from 'react';
import { useHistory } from 'react-router-dom';
import tw, {styled} from 'twin.macro';

import SwitchFrame from '../../layout/SwitchFrame';
import TitleWrapper from './TitleWrapper';
import Container from './Container';
import ButtonGroup from './ButtonGroup';
import { appURL, topTitleText } from '../../game-config';


const GameTop = ({timesArr, setGameStore}) => {
  const history = useHistory();

  const handleOnClick = (times) => {
    setGameStore(gameStore => ({
      ...gameStore,
      times: times
    }));
    history.push(appURL.main);
  }

  return (
    <SwitchFrame>
      <Container>
        <TitleWrapper>
          {topTitleText}
        </TitleWrapper>
        <ButtonGroup
          timesArr={timesArr}
          onClick={handleOnClick}
        />
      </Container>
    </SwitchFrame>
  );
}

export default GameTop;