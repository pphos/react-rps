import React from 'react';
import tw from 'twin.macro';

import Title from '../shared/Title';


const TitleWrapper = (props) => {
  return (
    <div tw="row-span-1 col-span-3">
      <Title>{props.children}</Title>
    </div>
  )
}

export default TitleWrapper;