import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomTextInput from './TextInput';
import CustomButton from './Button';
import SocialButton from './SocialButton';
import {useNavigation} from '@react-navigation/native';

const LoginPage = () => {
  const nav = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: '#000',
            marginBottom: 13,
          }}>
          Log in
        </Text>
        <Text style={{fontSize: 13, color: '#000', marginBottom: 30}}>
          Log in with one of the following options
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

        <View style={styles.centeredContent}>
          <Text style={{fontSize: 12, color: '#000', marginRight: 3}}>
            Don’t Have an Account?
          </Text>

          <TouchableOpacity onPress={() => nav.navigate('SignUpPage')}>
            <Text style={{fontSize: 11, color: '#DC1F26'}}>
              Please Sign Up.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffBFC',
    paddingTop: 43,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    flex: 1,
  },

  centeredContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default LoginPage;
