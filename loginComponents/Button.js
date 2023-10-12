import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

const CustomButton = props => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity
      style={[styles.button, {width: screenWidth - 50}]}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 310,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#DC1F26',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 23,
    marginTop: 17,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
export default CustomButton;
