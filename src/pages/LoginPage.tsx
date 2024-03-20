import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const LoginPage = () => {
  return (
    <View style={tw`flex flex-col justify-center items-center w-full h-5/6`}>
      <Text style={tw`text-center text-3xl font-montserrat w-3/4`}>Chào mừng trở lại</Text>
      <View style={tw`my-2 justify-around items-center w-full`}>
        <TextInput
          placeholder="Tên đăng nhập"
          style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent`}
        />
        <TextInput
          placeholder="Mật khẩu"
          style={tw`my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent`}
          secureTextEntry={true}
        />
        <View style={tw`w-3/4`}>
          <Text style={tw`text-right`}>
            Chưa có tài khoản? <Text style={tw`text-gray-500`}>Đăng ký</Text>
          </Text>
        </View>
        <TouchableOpacity style={tw`my-2 w-1/4 h-12 rounded-sm pl-2 bg-sky-500 mt-10`}>
          <Text style={tw`text-white`}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
