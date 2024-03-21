import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { Login } from '../api/userAPI';
import { storeDataToStorage } from '../tools/StorageTool';

function LoginPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(e) {
    setUsername(e);
  }

  function handlePassword(e) {
    setPassword(e);
  }


  function handleRegisterPress() {
    navigation.navigate('Register');
  }

  async function handleLoginPress() {
    const response = await Login(username, password);
    console.log(response);
    if (response.status === 200) {
      await storeDataToStorage('access_token', response.data.token);
      navigation.navigate('Main');
    } else {
      alert(response);
    }
  }
  return (
    <View style={tw`flex flex-col justify-center items-center w-full h-5/6`}>
      <Text style={tw`text-center text-3xl w-3/4`}>Chào mừng trở lại</Text>
      <View style={tw`my-2 justify-around items-center w-full`}>
        <TextInput
          placeholder="Tên đăng nhập"
          style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent`}
          defaultValue={username}
          onChangeText={handleUsername}
        />
        <TextInput
          placeholder="Mật khẩu"
          style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent`}
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={handlePassword}
        />
        <View style={tw`w-3/4`}>
          <Text style={tw`text-right`}>
            Chưa có tài khoản? <Text style={tw`text-gray-500`} onPress={handleRegisterPress}>Đăng ký</Text>
          </Text>
        </View>
        <TouchableOpacity style={tw`my-2 w-1/4 h-12 rounded-sm pl-2 bg-sky-500 mt-10`}
          onPress={handleLoginPress}>
          <View style={tw`flex-row justify-center items-center w-full h-full`}>
            <Text style={tw`text-white text-center`}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
