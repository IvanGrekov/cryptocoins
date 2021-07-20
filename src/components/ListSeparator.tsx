import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from 'native-base';

export const ListSeparator = () => <Box style={styles.listSepartor} />;

const styles = StyleSheet.create({
  listSepartor: {
    height: 1,
    backgroundColor: '#DDDDDD',
  },
});
