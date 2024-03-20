import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

function RegisterPage({ navigation }) {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={tw`flex flex-col h-5/6 justify-center items-center w-screen`}>
    <Text style={tw`text-center text-3xl w-3/4`}>Chào mừng đến với SigConn</Text>
    <View style={tw`my-2 flex flex-col justify-around items-center w-full`}>
      <TextInput
        placeholder="Tên"
        style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent`}
      />
      <TextInput
        placeholder="Email"
        style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent`}
      />
      <TextInput
        placeholder="Mật khẩu"
        secureTextEntry={true}
        style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent`}
      />
      <TextInput
        placeholder="Nhập lại mật khẩu"
        secureTextEntry={true}
        style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent`}
      />
      <View style={tw`w-3/4`}>
        <Text style={tw`text-right`}>Đã có tài khoản? <Text style={tw`text-sky-500`} onPress={handleLoginPress}>Đăng nhập</Text></Text>
      </View>
      <TouchableOpacity style={tw`my-2 w-1/4 h-12 rounded-sm pl-2 bg-sky-500 mt-10`}>
          <View style={tw`flex-row justify-center items-center w-full h-full`}>
            <Text style={tw`text-white text-center`}>Đăng ký</Text>
          </View>
        </TouchableOpacity>
    </View>
  </View>
  );
};

export default RegisterPage;
