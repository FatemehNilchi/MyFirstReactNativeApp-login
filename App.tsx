import React from 'react';
import LogInPage from './loginComponents/LogInPage';
import SignUpPage from './loginComponents/SignUpPage';
import VerifyPage from './loginComponents/VerifyPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LogInPage" component={LogInPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="VerifyPage" component={VerifyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
