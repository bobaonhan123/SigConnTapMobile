import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { Register } from '../api/userAPI';

function RegisterPage({ navigation }) {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reEnter, setReEnter] = useState("");

  function handleName(e) {
    setName(e);
  }

  function handleUsername(e) {
    setUsername(e);
  }

  function handlePassword(e) {
    setPassword(e);
  }

  function handleReEnter(e) {
    setReEnter(e);
  }

  async function handleRegisterPress() {
    // alert(`Name: ${name}, Username: ${username}, Password: ${password}, Re-enter: ${reEnter}`)
    const response = await Register(name, username, password, reEnter);
    console.log(response);
    if (response.status === 201) {
      navigation.navigate('Login');
    } else {
      alert(response);
    }
  }
  return (
    <View style={tw`flex flex-col h-5/6 justify-center items-center w-screen`}>
      <Text style={tw`text-center text-3xl w-3/4 text-gray-700`}>Chào mừng đến với SigConn</Text>
      <View style={tw`my-2 flex flex-col justify-around items-center w-full`}>
        <TextInput
          placeholder="Tên"
          style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent text-gray-900`}
          defaultValue={name}
          onChangeText={handleName}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Email"
          style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent text-gray-900`}
          value={username}
          onChangeText={handleUsername}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Mật khẩu"
          secureTextEntry={true}
          style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent text-gray-900`}
          value={password}
          onChangeText={handlePassword}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Nhập lại mật khẩu"
          secureTextEntry={true}
          style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent text-gray-900`}
          value={reEnter}
          onChangeText={handleReEnter}
          placeholderTextColor="gray"
        />
        <View style={tw`w-3/4`}>
          <Text style={tw`text-right text-gray-700`}>Đã có tài khoản? <Text style={tw`text-sky-500`} onPress={handleLoginPress}>Đăng nhập</Text></Text>
        </View>
        <TouchableOpacity style={tw`my-2 w-1/4 h-12 rounded-sm pl-2 bg-sky-500 mt-10`}
          onPress={handleRegisterPress}>
          <View style={tw`flex-row justify-center items-center w-full h-full`}>
            <Text style={tw`text-white text-center`}>Đăng ký</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterPage;
