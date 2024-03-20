import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

function MainPage({ navigation }) {
    React.useEffect(() => {
        navigation.replace('Login');
    }, []);
    return (
        <View style={tw`flex flex-col justify-center items-center w-full h-5/6`}>
            <Text style={tw`text-center text-3xl w-3/4`}>Chào mừng trở lại</Text>

        </View>
    );
};

export default MainPage;
