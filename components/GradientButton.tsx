import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

type BtnProps = {
  title: string;
};

const GradientButton = ({title}: BtnProps) => {
  const onPress = () => {
    Alert.alert('Button', title);
  };

  return (
    <LinearGradient
      colors={[
        '#00FFFF',
        '#17C8FF',
        '#329BFF',
        '#4C64FF',
        '#6536FF',
        '#8000FF',
      ]}
      start={{x: 0.1, y: 0.2}}
      end={{x: 0.3, y: 1.4}}
      style={{
        height: 45,
        width: 100,
        borderRadius: 8,
        padding: 2,
      }}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'black',
    opacity: 0.8,
    borderRadius: 7,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default GradientButton;
