import React from 'react';
import tw from 'twin.macro';

const ContentWrapper = (props) => {
  return (
    <div tw="row-span-1 col-span-2">
      <div tw="flex justify-center items-center">
        {props.children}
      </div>
    </div>
  );
}

export default ContentWrapper;