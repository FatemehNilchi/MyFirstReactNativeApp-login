import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import CustomButton from '../../components/Button';
import VerifyInput from '../../components/VerifyInput';
import mainStyles from '../../constants/styles';

const VerifyPage = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const handleVerify = () => {
    const combinedInput = input1 + input2 + input3 + input4;

    if (combinedInput === '1234') {
      Alert.alert('تایید شد', 'کد وارد شده صحیح است.');
    } else {
      Alert.alert('خطا', 'کد وارد شده اشتباه است. لطفاً دوباره امتحان کنید.');
    }
  };

  return (
    <View style={[mainStyles.container, {alignItems: 'center'}]}>
      <Text style={mainStyles.mainHeaderText}>Verify your email</Text>

      <Text style={mainStyles.subHeaderText}>
        We have sent a code to your email
      </Text>

      <View style={styles.inputStyle}>
        <VerifyInput
          Value={input1 !== ''}
          onChangeText={text => setInput1(text)}></VerifyInput>
        <VerifyInput
          Value={input2 !== ''}
          onChangeText={text => setInput2(text)}></VerifyInput>
        <VerifyInput
          Value={input3 !== ''}
          onChangeText={text => setInput3(text)}></VerifyInput>
        <VerifyInput
          Value={input4 !== ''}
          onChangeText={text => setInput4(text)}></VerifyInput>
      </View>

      <CustomButton buttonName="Verify" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 33,
    gap: 11,
  },
});

export default VerifyPage;
