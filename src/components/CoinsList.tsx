import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'native-base';

import { ListItem } from './ListItem';
import { ListSeparator } from './ListSeparator';

import { CoinInterface } from '../type';
import { createKeyExtractor } from '../helpers/flatListHelper';

interface Props {
  coins: CoinInterface[];
  loadItems: Function;
}

export const CoinsList = ({ coins, loadItems }: Props) => {
  const [momentumScroll, setMomentumScroll] = useState(false);

  const renderItem = useCallback(({ item }) => {
    return <ListItem coin={item} />;
  }, []);

  const onMomentumScrollBegin = useCallback(() => {
    setMomentumScroll(false);
  }, []);

  const onEndReached = useCallback(() => {
    if (!momentumScroll) {
      loadItems();
      setMomentumScroll(true);
    }
  }, [loadItems, momentumScroll]);

  return (
    <FlatList
      style={styles.list}
      data={coins}
      keyExtractor={createKeyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={ListSeparator}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onEndReachedThreshold={0.25}
      onEndReached={onEndReached}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    borderWidth: 0,
    backgroundColor: '#EEEEEE',
  },
});
