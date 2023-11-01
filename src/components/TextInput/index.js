import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Dimensions} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const CustomTextInput = props => {
  const [isIconVisible, setIsIconVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const textColor = props.isBlackText ? '#000' : '#DC1F26';

  const handleTextChange = text => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsIconVisible(emailPattern.test(text));
  };

  return (
    <View>
      <Text style={styles.inputTitle}>{props.title}</Text>

      <View style={[styles.inputContainer, {width: screenWidth - 50}]}>
        <TextInput
          style={[styles.input, {color: textColor}]}
          placeholder={props.text}
          placeholderTextColor="#B5B6BA"
          onChangeText={handleTextChange}
        />
        {isIconVisible && (
          <Icons name={props.IconName} size={25} color={'#DC1F26'} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFE8EB',
    backgroundColor: '#fff',
    marginBottom: 25,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
    marginBottom: 17,
  },
  input: {
    fontSize: 16,
  },
});

export default CustomTextInput;
