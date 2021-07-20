import React from 'react';
import { Center } from 'native-base';

import { LogoImage } from './LogoImage';

import { ImageSizeType } from '../type';

export const Loader = () => {
  return (
    <Center flex={1}>
      <LogoImage size={ImageSizeType.xl} />
    </Center>
  );
};
