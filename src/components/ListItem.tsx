import React from 'react';
import { StyleSheet } from 'react-native';
import { List, HStack, Image } from 'native-base';

import { CoinDetails } from './CoinDetails';
import { CoinPriceDetails } from './CoinPriceDetails';

import { CoinInterface } from '../type';
import { styleVariables } from '../helpers/styleHelper';

export const ListItem = ({ coin }: { coin: CoinInterface }) => {
  const { id, image } = coin;

  return (
    <List.Item style={styles.listItem}>
      <HStack style={styles.listItemContent}>
        <HStack space={5} style={styles.itemDetails}>
          <Image source={{ uri: `${image}` }} alt={id} style={styles.image} />

          <CoinDetails coin={coin} />
        </HStack>

        <CoinPriceDetails coin={coin} />
      </HStack>
    </List.Item>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    paddingLeft: styleVariables.mainPadding - 5,
    paddingRight: styleVariables.mainPadding,
    paddingTop: 20,
    paddingBottom: 20,
  },
  listItemContent: {
    width: '100%',
    justifyContent: 'space-between',
  },
  itemDetails: {
    alignItems: 'center',
  },
  image: {
    width: styleVariables.coinImgSize,
    height: styleVariables.coinImgSize,
    borderRadius: styleVariables.coinImgSize / 2,
  },
});
