import React from 'react';
import tw from 'twin.macro';
import Webcam from 'react-webcam';

import { emojiRpsHand } from '../../game-config';

const Player = ({webcamRef, canvasRef, currentHand}) => {
  const emojiHand = currentHand !== '' ? emojiRpsHand[currentHand] : '';

  return (
    <div tw="relative h-full">
      <Webcam
        tw="absolute w-full object-fill rounded-r-lg"
        css={`height: 100.25%; transform: scaleX(-1);`}
        audio={false}
        ref={webcamRef}
      />
      <canvas
        tw="absolute"
        ref={canvasRef}
      />
      <div tw="absolute" css={`font-size: 3.0vw;`}>{emojiHand}</div>
    </div>
  );
}

export default Player;