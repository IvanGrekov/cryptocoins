import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Box} from 'native-base';

import {Loader} from './Loader';
import {CoinsList} from './CoinsList';
import {Header} from './Header';

import {getCoinsList} from '../api/cryptocoins';
import {bgColor} from '../helpers/styleHelper';

export const Content = () => {
  const [coinsList, setCoinsList] = useState([]);

  useEffect(() => {
    getCoinsList().then(setCoinsList);
  }, []);

  return (
    <Box style={styles.contentBox}>
      {coinsList.length === 0 ? (
        <Loader />
      ) : (
        <Box>
          <Box safeAreaTop backgroundColor={bgColor} />
          <Header />

          <CoinsList coins={coinsList} />
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    height: '100%',
  },
});
