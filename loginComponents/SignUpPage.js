import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CustomTextInput from './TextInput';
import CustomButton from './Button';
import SocialButton from './SocialButton';

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 600,
          color: '#000',
          marginBottom: 13,
        }}>
        Sign Up
      </Text>
      <Text style={{fontSize: 13, color: '#000', marginBottom: 30}}>
        Sign Up with one of the following options
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 52,
        }}>
          
        <SocialButton IconName="facebook" />
        <SocialButton IconName="google" />
        <SocialButton IconName="apple" />
      </View>

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

      <CustomButton buttonName="Create account" />

      <View style={styles.centeredContent}>
        <Text style={{fontSize: 12, color: '#000', marginRight: 3}}>
          Already Have an Account?
        </Text>

        <TouchableOpacity>
          <Text style={{fontSize: 11, color: '#DC1F26'}}>Please Login.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFBFC',
    paddingTop: 43,
    paddingLeft: 25,
    paddingRight: 25,
  },

  centeredContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SignUpPage;
