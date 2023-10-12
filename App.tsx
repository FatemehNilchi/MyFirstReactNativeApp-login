import React from 'react';
import {View, Text} from 'react-native';
import LoginPage from './loginComponents/LogInPage';
import SignUpPage from './loginComponents/SignUpPage';
import VerifyPage from './loginComponents/VerifyPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const FeedScreen = () => (
  <View>
    <Text>First screen</Text>
  </View>
);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
