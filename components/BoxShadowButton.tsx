import {StyleSheet} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BtnProps} from './Types';
import BaseButton from './BaseButton';

const BoxShadowButton = ({title, onPress}: BtnProps) => {
  return (
    <Shadow
      style={styles.shadowContainer}
      distance={12}
      startColor={'#3A4E47'}
      endColor={'#000000'}>
      <LinearGradient
        colors={['#2E5443', '#1E415E']}
        start={{x: 0.1, y: 0.2}}
        end={{x: 0.3, y: 1.7}}
        style={styles.gradientContainer}>
        <BaseButton title={title} onPress={onPress} />
      </LinearGradient>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    height: 45,
    width: 100,
    borderRadius: 12,
  },
  gradientContainer: {
    borderColor: '#84D3C5',
    borderWidth: 2,
    borderRadius: 8,
    flex: 1,
  },
});

export default BoxShadowButton;
