/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import GradientButton from './components/GradientButton';
import BoxShadowButton from './components/BoxShadowButton';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <GradientButton title={'Button 1'} />
      <BoxShadowButton title={'Button 2'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
});

export default App;
