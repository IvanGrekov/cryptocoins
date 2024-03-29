import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Text } from 'native-base';

import { CoinInterface } from '../types';
import { styleVariables } from '../helpers/styleHelper';

export const CoinPriceDetails = ({ coin }: { coin: CoinInterface }) => {
  const preparedMarketCap = (coin.market_cap / 1000_000_000).toFixed(2);

  return (
    <VStack space={styleVariables.gapItemDetails}>
      <Text style={styles.price}>{`$${coin.current_price}`}</Text>

      <Text style={styles.marketCap}>
        {`Market cap: $${preparedMarketCap} bln`}
      </Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  price: {
    fontSize: styleVariables.headingFontSize,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  marketCap: {
    textAlign: 'right',
    color: styleVariables.fontReserveColor,
  },
});
