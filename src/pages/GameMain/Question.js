import React from 'react';
import { animated, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

import { rpsHandArr } from '../../game-config';

const Text = ({text}) => {
  return (
    <div tw="flex justify-center items-center h-full">
      <h1 tw="font-bold" css={`font-size: 2vw;`}>
        {text}
      </h1>
    </div>
  );
}

const Image = ({hand}) => {
  const handObj = rpsHandArr.find(v => v.text === hand);
  return (
    <div tw="flex justify-center items-center h-full">
      <img
        src={handObj.img}
        alt={handObj.text}
        tw="transform -rotate-45"
        css={`width: 17vw;`}
      />
    </div>
  );
}

export function Question(props) {
  const imgAnimation = useSpring({
    from: { opacity: 0, transform: "translate(2.7vw, -10vh)" },
    to: { opacity: 1, transform: "translate(0, 0)" },
    config: { duration: 200, mass: 1, tension: 180, friction: 12 }
  });
  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-5.6vh)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 200, mass: 1, tension: 180, friction: 12 }
  });

  return (
    <div tw="grid grid-rows-6">
      <animated.div tw="row-span-1" style={{...textAnimation}}>
        <Text text={props.text} />
      </animated.div>
      <animated.div tw="row-span-5" style={{...imgAnimation}}>
        <Image hand={props.hand} />
      </animated.div>
    </div>
  );
}

export default Question;