import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {BtnProps} from './Types';
import BaseButton from './BaseButton';

const gradientColors = [
  '#00FFFF',
  '#17C8FF',
  '#329BFF',
  '#4C64FF',
  '#6536FF',
  '#8000FF',
];

const GradientButton = ({title, onPress}: BtnProps) => {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{x: 0.1, y: 0.2}}
      end={{x: 0.3, y: 1.4}}
      style={styles.gradientContainer}>
      <BaseButton
        title={title}
        onPress={onPress}
        style={styles.buttonContainer}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 7,
  },
  gradientContainer: {
    height: 45,
    width: 100,
    borderRadius: 8,
    padding: 2,
  },
});

export default GradientButton;
