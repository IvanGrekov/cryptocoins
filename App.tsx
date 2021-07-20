import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, StatusBar, Box } from 'native-base';

import { Content } from './src/components/Content';

import { styleVariables } from './src/helpers/styleHelper';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styleVariables.bgColor}
      />

      <Box style={styles.appWrapper}>
        <Content />
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    height: '100%',

    backgroundColor: styleVariables.bgColor,
  },
});

export default App;
