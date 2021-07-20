import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Heading, Text, HStack, Box } from 'native-base';

import { CoinInterface } from '../type';
import { styleVariables } from '../helpers/styleHelper';

const maxNameLength = 12;

export const CoinDetails = ({ coin }: { coin: CoinInterface }) => {
  const { name, symbol, market_cap_rank } = coin;

  return (
    <VStack space={styleVariables.gapItemDetails}>
      <Heading style={styles.title}>
        {name.length > maxNameLength ? symbol.toUpperCase() : name}
      </Heading>

      <HStack space={2}>
        <Box style={styles.rankWrapper}>
          <Text style={styles.rank}>{market_cap_rank}</Text>
        </Box>

        <Text style={styles.symbol}>{symbol.toUpperCase()}</Text>
      </HStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: styleVariables.headingFontSize,
    fontWeight: 'bold',
  },
  rankWrapper: {
    borderRadius: 7,
    backgroundColor: '#D8E3E7',
  },
  rank: {
    paddingHorizontal: 7,

    fontSize: 16,
    fontWeight: 'bold',
  },
  symbol: {
    color: styleVariables.fontReserveColor,
  },
});
