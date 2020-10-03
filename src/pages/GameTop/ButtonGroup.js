import React from 'react';
import tw from 'twin.macro';

import Button from '../shared/Button';


const ButtonGroup = (props) => {
  return (
    <>
      {props.timesArr.map((item, index) => (
        <div key={index} tw="row-span-2 col-span-1 text-center">
          <Button onClick={() => props.onClick(item.times)}>
            {item.text}
          </Button>
        </div>
      ))}
    </>
  );
}

export default ButtonGroup;