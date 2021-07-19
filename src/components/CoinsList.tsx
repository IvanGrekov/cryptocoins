import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView, List} from 'native-base';

import {ListItem} from './ListItem';

import {CoinInterface} from '../type';

export const CoinsList = ({coins}: {coins: CoinInterface[]}) => {
  return (
    <ScrollView>
      <List style={styles.list}>
        {coins.map(item => (
          <ListItem key={item.id} coin={item} />
        ))}
      </List>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    borderWidth: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#EEEEEE',
  },
});
