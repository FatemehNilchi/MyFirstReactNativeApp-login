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

const SignUpPage = () => {
  const nav = useNavigation();
  return (
    <ScrollView contentContainerStyle={mainStyles.scrollViewContainer}>
      <View style={mainStyles.container}>
        <AuthenticationHeader
          mainHeader={'Sign Up'}
          subHeader={'Sign Up with one of the following options'}
        />
  

        <CustomTextInput
          isBlackText={false}
          text="Enter Your Name"
          title="Name"
          IconName="check-circle"
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
          buttonName="Create account"
          onPress={() => nav.navigate('VerifyPage')}
        />

        <View style={mainStyles.centeredContent}>
          <Text style={mainStyles.haveAnAccountText}>
            Already Have an Account?
          </Text>

          <TouchableOpacity onPress={() => nav.navigate('LogInPage')}>
            <Text style={mainStyles.switchAuthText}>Please Login.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};



export default SignUpPage;
