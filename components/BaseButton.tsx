import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BtnProps} from './Types';

const BaseButton = ({title, onPress, style}: BtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.buttonContainer, ...style}}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    opacity: 0.8,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default BaseButton;
