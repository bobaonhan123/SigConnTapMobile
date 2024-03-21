import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { getDataFromStorage } from '../tools/StorageTool';
import { getName } from '../api/userAPI';

function MainPage({ navigation }) {
    const [name, setName] = useState('');
    useEffect(() => {
        const checkLogin = async () => {
            const token = await getDataFromStorage('access_token');
            if (!token) {
                navigation.replace('Login');
            }
            const response = await getName();
            if (response.status === 200) {
                setName(response.data.username);
            } else {
                navigation.replace('Login');
            }
        };
        checkLogin();
    }, []);
    return (
        <View style={tw`flex flex-col justify-center items-center w-full h-5/6`}>
            
            <Text style={tw`text-center text-3xl w-3/4`}>{name}</Text>

        </View>
    );
};

export default MainPage;
