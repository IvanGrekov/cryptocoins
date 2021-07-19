import React from 'react';
import {Image} from 'native-base';

import {ImageSizeType} from '../type';

export const LogoImage = ({size}: {size: ImageSizeType}) => {
  return (
    <Image source={require('../images/LogoIcon.png')} alt="Logo" size={size} />
  );
};
