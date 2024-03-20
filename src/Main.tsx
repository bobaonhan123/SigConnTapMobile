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
import tw from 'twrnc'
import LoginPage from './pages/LoginPage';

function Main(): React.JSX.Element {
  return (
      <View style={tw`p-4 android:pt-2 bg-white dark:bg-black h-full w-full`}>
        <LoginPage />
      </View>
  );
}
export default Main;
