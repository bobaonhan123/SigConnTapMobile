/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc'

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import MainPage from './pages/MainPage';


const Stack = createNativeStackNavigator();

function Main(): React.JSX.Element {
  return (
    <NavigationContainer>
    <View style={tw`bg-white dark:bg-black h-full w-full p-0`}>
      <Header />
      
        <Stack.Navigator>
          <Stack.Screen 
            name="Main" 
            component={MainPage} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      
    </View>
    
  </NavigationContainer>
  );
}
export default Main;
