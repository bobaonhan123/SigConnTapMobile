import React from 'react';
import { View, Image } from 'react-native';
import logo from "../images/logo.png";
import name from "../images/name.png";
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    const handleNavigateToMain = () => {
        navigation.navigate('Main');
      };
    return (
      <View style={tw`flex-row justify-start items-center bg-[#cfefff] h-[9%] absolute top-2 left-2 right-2 rounded-2xl z-20 p-0`}>
        <TouchableOpacity style={tw`m-0 h-full items-center justify-start`} onPress={handleNavigateToMain}>
          <View style={tw`ml-0 flex-row items-center justify-start`}>
            <Image source={logo} style={tw`h-3/4 w-32`} resizeMode="contain" />
            <Image source={name} style={tw`h-full w-auto aspect-3 ml-0`} resizeMode="contain" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

export default Header;
