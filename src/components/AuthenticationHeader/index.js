import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SocialButton from '../../components/SocialButton';
import mainStyles from '../../constants/styles';
const AuthenticationHeader = ({mainHeader, subHeader}) => {
  return (
    <View>
      <Text style={mainStyles.mainHeaderText}>{mainHeader}</Text>
      <Text style={mainStyles.subHeaderText}>{subHeader}</Text>

      <View style={styles.socialButtonContainer}>
        <SocialButton IconName="facebook" />
        <SocialButton IconName="google" />
        <SocialButton IconName="apple" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 52,
  },
});

export default AuthenticationHeader;
