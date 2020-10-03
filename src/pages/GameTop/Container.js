import React from 'react';
import tw from 'twin.macro';


const Container = (props) => {
  return (
    <div tw="flex justify-center items-center h-full">
      <div tw="grid grid-rows-2 grid-cols-3 w-3/4">
        {props.children}
      </div>
    </div>
  );
}

export default Container;