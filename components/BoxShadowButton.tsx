import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type BtnProps = {
  title: string;
};
const BoxShadowButton = ({title}: BtnProps) => {
  const onPress = () => {
    Alert.alert('Button', title);
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <LinearGradient
        colors={['#2E5443', '#1E415E']}
        start={{x: 0.1, y: 0.2}}
        end={{x: 0.3, y: 1.7}}
        style={styles.gradientContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    width: 100,
    borderColor: '#84D3C5',
    borderWidth: 2,
    borderRadius: 8,
    shadowColor: '#00FFFF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 24,
  },
  gradientContainer: {
    borderRadius: 8,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default BoxShadowButton;
