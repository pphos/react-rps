import React from 'react';
import tw from 'twin.macro';
import Webcam from 'react-webcam';


const Player = ({webcamRef, canvasRef}) => {
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
    </div>
  );
}

export default Player;