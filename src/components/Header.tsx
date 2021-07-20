import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, Text } from 'native-base';

import { LogoImage } from './LogoImage';

import { ImageSizeType } from '../type';
import { styleVariables } from '../helpers/styleHelper';

export const Header = () => {
  return (
    <Box style={styles.header}>
      <HStack space={2} alignItems="center">
        <LogoImage size={ImageSizeType.xs} />
        <Text style={styles.text}>CryptoCoins</Text>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: styleVariables.mainPadding,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
