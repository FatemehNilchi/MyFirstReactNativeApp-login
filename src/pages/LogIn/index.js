import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomTextInput from '../../components/TextInput';
import CustomButton from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import mainStyles from '../../constants/styles';
import AuthenticationHeader from '../../components/AuthenticationHeader';
const LoginPage = () => {
  const nav = useNavigation();

  return (
    <ScrollView contentContainerStyle={mainStyles.scrollViewContainer}>
      <View style={mainStyles.container}>
        <AuthenticationHeader
          mainHeader={'Log in'}
          subHeader={' Log in with one of the following options'}
        />

        <CustomTextInput
          isBlackText={false}
          text="Enter Your Email"
          title="Email"
          IconName="check-circle"
        />

        <CustomTextInput
          isBlackText={true}
          text="Enter Your Password"
          title="Password"
        />

        <CustomButton
          buttonName="Log in"
          onPress={() => nav.navigate('VerifyPage')}
        />

        <View style={mainStyles.centeredContent}>
          <Text style={mainStyles.haveAnAccountText}>Don’t Have an Account?</Text>

          <TouchableOpacity onPress={() => nav.navigate('SignUpPage')}>
            <Text style={mainStyles.switchAuthText}>Please Sign Up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


export default LoginPage;
