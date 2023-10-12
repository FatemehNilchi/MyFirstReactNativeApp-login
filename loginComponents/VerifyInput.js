import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const VerifyInput = props => {
  return (
    <TextInput
      style={
        props.Value ? styles.containerWithText : styles.containerWithoutText
      }
      maxLength={1}
      keyboardType="numeric"
      onChangeText={props.onChangeText}
      Value={props.Value}
    />
  );
};

export default VerifyInput;

const styles = StyleSheet.create({
  containerWithText: {
    height: 50,
    width: 70,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#FAE4E6',
    color: '#DC1F26',
  },
  containerWithoutText: {
    height: 50,
    width: 70,
    textAlign: 'center',
    borderRadius: 50,
    borderColor: '#DC1F26',
    borderWidth: 2,
    color: '#DC1F26',
  },
});
