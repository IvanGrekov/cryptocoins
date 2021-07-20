import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Box } from 'native-base';

import { Loader } from './Loader';
import { CoinsList } from './CoinsList';
import { Header } from './Header';

import { getCoinsList, coinsPerPage, maxPagesNumber } from '../api/cryptocoins';
import { CoinInterface } from '../type';
import { styleVariables } from '../helpers/styleHelper';

export const Content = () => {
  const [coinsList, setCoinsList] = useState<CoinInterface[]>([]);
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    getCoinsList().then(setCoinsList);
  }, []);

  const loadItems = useCallback(() => {
    if (loadingStatus) {
      return;
    }

    setLoadingStatus(true);

    const page = coinsList.length / coinsPerPage + 1;

    if (page === maxPagesNumber) {
      setLoadingStatus(false);
      return;
    }

    getCoinsList(page).then((data: CoinInterface[]) => {
      setCoinsList((prevState: CoinInterface[]) => [...prevState, ...data]);
      setLoadingStatus(false);
    });
  }, [coinsList.length, loadingStatus]);

  return (
    <Box style={styles.contentBox}>
      {coinsList.length === 0 ? (
        <Loader />
      ) : (
        <Box style={styles.mainContent}>
          <Box safeAreaTop backgroundColor={styleVariables.bgColor} />
          <Header />

          {loadingStatus && (
            <Box style={styles.loadingIndicator}>
              <ActivityIndicator
                size="large"
                style={styles.loadingIndicator}
                color={styleVariables.bgColor}
              />
            </Box>
          )}
          <CoinsList coins={coinsList} loadItems={loadItems} />
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    height: '100%',
  },
  mainContent: {
    height: '100%',
  },
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    zIndex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
