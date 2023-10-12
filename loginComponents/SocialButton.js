import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const SocialButton = props => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
        <Icons name={props.IconName} size={20} color={'#DC1F26'} />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 95,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FAE4E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#DC1F26',
    fontSize: 16,
  },
});
export default SocialButton;
